const { Order } = require('../../db');

const changeStatus = async (quantity, price) => {

    const foundOrder = await Order.findOne({
        where: {
            quantity: quantity,
            price_total: price,
        },
        order: [['id', 'DESC']], // Ordenar por fecha de creación en orden descendente
        limit: 1, // Obtener solo el último registro
    });

    if (!foundOrder) {
        throw Error(`No order has been found`)
    } else {
        foundOrder.state = 'Pending',
            await foundOrder.save()
    }
}

module.exports = changeStatus;