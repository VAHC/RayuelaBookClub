const { Router } = require('express');
const mercadopago = require('mercadopago');
const { URL_Vercel_back } = require('../../rutas')


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
        back_urls: {
            success: URL_Vercel_back+'/catalogo',
            failure: '',
            pending: ''
        },
        auto_return: 'approved',
        binary_mode: true, // pagos con tarjetas
    }
    await mercadopago.preferences.create(preference)
        .then((response) => res.status(200).send({ response }))
        .catch((error) => res.status(400).send({ error: error.message }))
});

module.exports = mpRouter