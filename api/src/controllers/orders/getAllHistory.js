const { Order, OrderDetail, Book, User } = require('../../db');

const getAllOrdersHistory = async () => {
  const orders = await Order.findAll({
    include: [
      {
        model: User,
        attributes:['id']
      },
      {
        model: OrderDetail,
        attributes: ['quantity'],
        include: [
          {
            model: Book,
            attributes: ['title', 'price'],
          },
        ],
      },
    ],
  });


  const orderHistory = orders.map((order) => {
    
    const originalDate = order.date

    const parsedDate = new Date(originalDate);
    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = parsedDate.getFullYear().toString();

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = parsedDate.toISOString().split('T')[1].slice(0, 5);

    const transformedDate = `${formattedDate}, ${formattedTime}`;
    
    return{
        id_user: order.id_user,
        id: order.id,
        date: transformedDate,
        quantity: order.quantity,
        price_total: order.price_total,
        state: order.state,
        orderDetails: order.orderDetails.map(e => ({
          quantityDetail: e.quantity,
          titleBook: e.book.title,
          priceBook: e.book.price
        })),
    }
})

  return orderHistory;
};

module.exports = getAllOrdersHistory;


// Orders = [
//     {
//         id: 1,
//         date: '05/05/2023',
//         orderDetail: [{title: 'Rayuela', quantity: 1, price: 100}, {title: 'El principito', quantity: 2, price: 50}],
//         quantity: 3,
//         price_total: 200.00,
//         state: 'Completed',
//     },
//     {
//         id: 2,
//         date: '06/06/2023',
//         orderDetail: [{title: 'Mafalda', quantity: 2, price: 10}, {title: 'El guasón', quantity: 4, price: 4}],
//         quantity: 6,
//         price_total: 400.00,
//         state: 'Pending',
//     }
// ]








































// const { Order, OrderDetail, User, Book } = require('../../db');

// const getAllOrderHistory = async (id) => {
//   const orders = await Order.findAll({
//     where: {
//       id: id,
//     },
//     include: [
//       {
//         model: User,
//         attributes: ['id'],
//       },
//       {
//         model: OrderDetail,
//         include: [
//           {
//             model: Book,
//             attributes: ['title'],
//           },
//         ],
//       },
//     ],
//     attributes: ['id', 'state', 'date'],
//   });

//   const mappedOrders = orders.map((o) => {
//     const orderDetails = o.OrderDetails;

//     const bookDetails = orderDetails.map((od) => ({
//       id_book: od.Book.id_book,
//       quantity: od.quantity,
//     }));

//     const quantityTotal = orderDetails.reduce((acc, od) => acc + od.quantity, 0);
//     const priceTotal = orderDetails.reduce((acc, od) => acc + od.quantity * od.Book.price, 0);

//     return {
//       id_user: o.User.id_user,
//       id_order: o.id_order,
//       bookTitles: orderDetails.map((od) => od.Book.title),
//       quantityTotal: quantityTotal,
//       priceTotal: priceTotal,
//       state: o.state,
//       bookDetails: bookDetails,
//       date: o.date,
//     };
//   });

//   return mappedOrders;
// };

// module.exports = getAllOrderHistory;
