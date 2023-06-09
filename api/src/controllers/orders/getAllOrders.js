const { Order, OrderDetail, User, Book } = require('../../db');

const getAllOrders = async () => {

    const orders = await Order.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id'],
                },
                {
                    model: OrderDetail,
                    include: [
                        {
                            model: Book,
                            attributes: ['title'],
                        }
                    ]  
                }
            ],
            attributes: ['id', 'state', 'date'],
        })

    const mappedOrders = orders.map((o) => {
        
        const orderDetails = o.OrderDetail

        const bookDetails = orderDetails.map((ord) => ({
            id_book: ord.Book.id_book,
            quantity: ord.quantity
        }))

        const quantityTotal = orderDetails.reduce((acc, ord) => acc + ord.quantity, 0)
        const priceTotal = orderDetails.reduce((acc, ord) => acc + ord.quantity * ord.Book.price, 0) 
        return {
            id_user: o.User.id,
            id_order: o.id,
            bookTitles: orderDetails.map((b) => b.Book.title),
            quantity_total: quantityTotal,
            totalPrice: priceTotal,
            state: o.state,        
            bookDetails: bookDetails,
            date: o.date,
        }
      })

    return mappedOrders;
}

module.exports = getAllOrders