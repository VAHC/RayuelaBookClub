const { Order, OrderDetail, Book } = require('../../db');

const getAllOrdersHistory = async () => {
  const orders = await Order.findAll({
    include: [
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
    return{
        id: order.id,
        date: order.date,
        quantity: order.quantity,
        price_total: order.price_total,
        state: order.state,
        orderDetails: order.orderDetails.map(e => e.quantity),
        books: order.books.map(b => {
            return{
                title: b.title,
                price: b.price
            }
        }),
    }
})

  return orderHistory;
};

module.exports = getAllOrdersHistory;





//attributes: ['id', 'date', 'quantity', 'price_total', 'state'],

// const { Order, OrderDetail, User, Book } = require('../../db');

// const getAllHistory = async () => {
//   const orders = await Order.findAll({
//     include: [
//       {
//         model: User,
//         attributes: ['id'],
//       },
//       {
//         model: OrderDetail,
//         attributes: ['id', 'quantity'],
//         include: [
//           {
//             model: Book,
//             attributes: ['title', 'quantity', 'price'],
//           },
//         ],
//       },
//     ],
    
//   });

//   const history = orders.map((order) => {
//     return{
//         id: order.id,
//         quantity: order.quantity,
//         price_total: order.price_total,
//         state: order.state,
//         users: order.users.map(el => el.id),
//         orderDetails: order.orderDetails(o => {
//             return{
//                 id: o.id,
//                 quantity: o.quantity,
//                 bookTitle: o.books.title,
//                 bookQuantity: o.books.quantity,
//                 bookPrice: o.books.price
//             }
//         })
//     }
// })
    
//   return history;
// };

// module.exports = getAllHistory 










// const { Order, OrderDetail, User, Book } = require('../../db')

// const getAllHistory = async () => {
//   const orders = await Order.findAll({
//     include: [{
//       model: Order,
//       attributes: ['id', 'quantity', 'price_total', 'state'],
//       through: {
//         attributes: [],
//       }
//     },
//     {
//       model: OrderDetail,
//       attributes: ['id'],
//       include: [
//         {
//           model: Book,
//           attributes: ['title', 'quantity', 'price'],
//         }
//       ]
//     }

//     ]
//   });

//   //if (!foundUser) throw new Error(`User not found with ID: ${id}`);

//   const history = {
//     id: data.id,
//     quantity: data.orders.map(el => el.quantity),
//     price_total: data.orders.map(el => el.price_total),
//     state: data.orders.map(el => el.state),
//     orderDetails: data.orderDetails.map(o => {
//         return{
//             id: o.id,
//             title: o.book.title,
//             quantity: o.book.quantity,
//             price: o.book.price
//         }
//     })
//   }
//   return history;

// };

// module.exports = getAllHistory ;

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
