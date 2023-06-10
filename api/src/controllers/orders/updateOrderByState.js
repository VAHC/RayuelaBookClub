const { Order } = require('../../db');

const updateOrderByState = async (id, state) => {

    const orderToUpdate = await Order.findByPk(id);

    if (!orderToUpdate) {
        throw Error(`No order has been found matching the id: ${id}`)

    } else {
        orderToUpdate.state = state

        await orderToUpdate.save()
    }
}

module.exports = updateOrderByState;