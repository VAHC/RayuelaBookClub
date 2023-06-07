const { Order, User, OrderDetail, Book } = require('../../db');

const createOrder = async (orderData) => {
    const currentDate = new Date();
    let quantityTotal = 0;
    let priceTotal = 0;

    const newOrder = await Order.create({
        date: currentDate.toISOString(),
        quantity: quantityTotal,
        price_total: priceTotal,
        street_and_number: orderData[0].street_and_number,
        floor_and_department: orderData[0].floor_and_department,
        city: orderData[0].city,
        CP: orderData[0].CP,
        province: orderData[0].province,
        id_user: orderData[0].id_user
    });

    for (const orderItem of orderData) {
        const { id_book, quantity, price, id_user } = orderItem;

        const book = await Book.findByPk(id_book);
        if (!book) {
            throw Error(`No user has been found matching the id: ${id_book}`);
        }

        const user = await User.findByPk(id_user);
        if (!user) {
            throw Error(`No user has been found matching the id: ${id_user}`);
        }

        quantityTotal += quantity;
        priceTotal += quantity * price;

        const orderDetail = await OrderDetail.create({
            quantity,
            id_orden: null,
            id_book: book.id
        });

        await orderDetail.update({ id_orden: newOrder.id });
    }

    newOrder.quantity = quantityTotal;
    newOrder.price_total = priceTotal;
    
    await newOrder.save();
};

module.exports = createOrder;