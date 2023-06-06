const { Router } = require('express');

const createOrderHandler = require('../handlers/order/createOrderHandler');
const createOrderAddressHandler = require('../handlers/order/createOrderAddressHandler')
const getAllOrderHandler = require('../handlers/order/getAllOrderHandler')

const orderRouter = Router();

orderRouter.post('/', createOrderHandler)
orderRouter.post('/', createOrderAddressHandler)



module.exports = orderRouter