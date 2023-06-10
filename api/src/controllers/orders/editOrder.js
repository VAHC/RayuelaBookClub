const { Order } = require('../../db');

const editOrder = async (id, date, state, quantity, price_total, street_and_number, floor_and_department, city, CP, province) => {

    const orderToUpdate = await Order.findByPk(id);

    if (!orderToUpdate) {
        throw Error(`No order has been found matching the id: ${id}`)

    } else {
        orderToUpdate.date = date,
        orderToUpdate.state = state,
        orderToUpdate.quantity = quantity,
        orderToUpdate.price_total = price_total,
        orderToUpdate.street_and_number = street_and_number,
        orderToUpdate.floor_and_department = floor_and_department,
        orderToUpdate.city = city,
        orderToUpdate.CP = CP,
        orderToUpdate.province = province

        await orderToUpdate.save()
    }
}

module.exports = editOrder;