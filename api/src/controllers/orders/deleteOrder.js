const { Order } = require('../../db');

const deleteOrder = async (id) => {

    const orderToDelete = await Order.findByPk(id);

    if (!orderToDelete) {
        throw Error(`No order has been found matching the id: ${id}`)

    } else {
        orderToDelete.deleted = true;
        await orderToDelete.save()
    }
}

module.exports = deleteOrder;