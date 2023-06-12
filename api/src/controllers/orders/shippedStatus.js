const { Order, User } = require('../../db');
const { confirmacionEnvio } = require('../../handlers/mailing/mailing')
const { URL_Vercel_back } = require('../../../rutas')

const shippedStatus = async (id) => {

    const shippedOrder = await Order.findByPk(id)

    if (!shippedOrder) {
        throw Error(`No order has been found`)
    } else {
        shippedOrder.state = 'Despachada',
            await shippedOrder.save()
    }

    const user = await User.findByPk(shippedOrder.id_user);
    if (!user) {
        throw Error(`No user has been found matching the id: ${id_user}`);
    }
    await confirmacionEnvio(
        "Rayuela BookClub",
        `${URL_Vercel_back}/perfil`,
        user.dataValues.firstName,
        shippedOrder.dataValues.date,
        shippedOrder.dataValues.quantity,
        `$ ${shippedOrder.dataValues.price_total}`,
        shippedOrder.dataValues.street_and_number,
        shippedOrder.dataValues.floor_and_department,
        shippedOrder.dataValues.city,
        user.dataValues.email,
        'Detalle de compra')
}

module.exports = shippedStatus;