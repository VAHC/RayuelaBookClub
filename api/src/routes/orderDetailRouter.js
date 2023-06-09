const { Router } = require('express');

const createOrderDetailHandler = require('../handlers/orderDetail/createOrderDetailHandler');
const deleteOrderDetailHandler = require('../handlers/orderDetail/deleteOrderDetailHandler')
const editOrderDetailHandler = require('../handlers/orderDetail/editOrderDetailHandler')

const orderDetailRouter = Router();

orderDetailRouter.post('/', createOrderDetailHandler)
orderDetailRouter.put('/delete/:id', deleteOrderDetailHandler)
orderDetailRouter.put('/:id', editOrderDetailHandler)

module.exports = orderDetailRouter