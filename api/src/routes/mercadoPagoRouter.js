const { Router } = require('express');
const mercadopago = require('mercadopago');
const { URL_Vercel_back } = require('../../rutas')
const { Order, OrderDetail, User } = require('../db');
const { confirmacionPago } = require('../handlers/mailing/mailing')


const mpRouter = Router();


mpRouter.post('/payment', async (req, res) => {
    const prod = req.body;
    let preference = {
        items: [{
            id: prod.id,
            title: prod.title,
            currencyid: 'ARS',
            image: prod.image,
            description: prod.description,
            category_id: 'art',
            quantity: prod.quantity,
            unit_price: prod.price

        }],
        notification_url: `https://b123-2803-9800-b886-82b2-f559-f03e-c46b-2856.ngrok-free.app/mercadopago/notificar`,
        back_urls: {
            success: URL_Vercel_back + '/catalogo',
            failure: '',
            pending: ''
        },
        auto_return: 'approved',
        binary_mode: true, // pagos con tarjetas   
    }
    await mercadopago.preferences.create(preference)
        // .then((response) => console.log(response.body.init_point))
        .then((response) => res.status(200).send({ response }))
        .catch((error) => res.status(400).send({ error: error.message }))
});

mpRouter.post('/notificar', async (req, res) => {
    // const prod = req.body;
    // console.log(prod);
    // console.log(prod.quantity);
    // console.log(prod.price);
    // console.log('notificar');
    const { query } = req;
    // console.log({ query });
    const topic = query.topic || query.type;
    // console.log({ topic });


    switch (topic) {
        case "payment":
            const paymentId = query.id || query['data.id'];
            // console.log(topic, 'getting payment', paymentId);
            const payment = await mercadopago.payment.findById(paymentId);
            // console.log(payment);
            var { body } = await mercadopago.merchant_orders.findById(payment.body.order.id);
            break;

        case "merchant order":
            const orderId = query.id;
            // console.log(topic, 'getting merchant order', orderId);
            var { body } = await mercadopago.merchant_orders.findById(orderId);
            break;
    }

    if (body && body.payments) {
        console.log(body.payments);

        var paidAmount = 0;
        body.payments.forEach(payment => {
            if (payment.status === 'approved') {
                paidAmount += payment.transaction_amount;
            }
        });

        if (paidAmount >= body.total_amount) {
            console.log('El pago se concretó');

            const foundOrder = await Order.findOne({
                where: {
                    price_total: body.total_amount,
                },
                order: [['id', 'DESC']], // Ordenar por fecha de creación en orden descendente
                limit: 1, // Obtener solo el último registro
            });

            if (foundOrder) {
                foundOrder.state = 'Completed';
                await foundOrder.save();

                const user = await User.findOne({ where: { id: foundOrder.id_user } });
                // console.log(user);
                await confirmacionPago(
                    "Rayuela BookClub",
                    `${URL_Vercel_back}/perfil`,
                    user.dataValues.firstName,
                    foundOrder.date,
                    foundOrder.quantity,
                    `$ ${foundOrder.price_total}`,
                    user.dataValues.email,
                    'Detalle de compra'
                )

                const orderDetails = await OrderDetail.findAll({ where: { id_orden: foundOrder.id } });
                const suscribed = orderDetails.some(detail => detail.id_book === 58);

                if (suscribed) {
                    const user = await User.findOne({ where: { id: foundOrder.id_user } });

                    if (user) {
                        user.suscribed = true;
                        user.date_suscription = foundOrder.date
                        await user.save();
                    }
                }
            }
        } else {
            console.log('El pago no se concretó');
        }
    } else {
        console.log('No se encontraron pagos');
    }
    res.send()
})

// mpRouter.get('/feedback', function (req, res) {
// 	res.json({
// 		Payment: req.query.payment_id,
// 		Status: req.query.status,
// 		MerchantOrder: req.query.merchant_order_id
// 	});
// });



module.exports = mpRouter