const { Router } = require('express');
const createOrderHandler = require('../handlers/order/createOrderHandler');
const getAllHistoryHandler = require('../handlers/order/getAllHistoryHandler')
const updateOrderByStateHandler = require('../handlers/order/updateOrderByStateHandler')
const editOrderHandler = require('../handlers/order/editOrderHandler')
const deleteOrderHandler = require('../handlers/order/deleteOrderHandler');
const changeStatusHandler = require('../handlers/order/changeStatusHandler');
const shippedStatusHandler = require('../handlers/order/shippedStatusHandler');


const orderRouter = Router();

orderRouter.post('/', createOrderHandler)
orderRouter.get('/', getAllHistoryHandler)
orderRouter.put('/status', changeStatusHandler)
orderRouter.put('/shipped', shippedStatusHandler) // esta ruta cambia estado a enviado 
orderRouter.put('/', updateOrderByStateHandler)
orderRouter.put('/:id', editOrderHandler)
orderRouter.put('/delete/:id', deleteOrderHandler)


module.exports = orderRouter