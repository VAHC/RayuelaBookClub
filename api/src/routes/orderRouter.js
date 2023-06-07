const { Router } = require('express');
const createOrderHandler = require('../handlers/order/createOrderHandler');
const getAllHistoryHandler = require('../handlers/order/getAllHistoryHandler')

// const createOrderAddressHandler = require('../handlers/order/createOrderAddressHandler')

const orderRouter = Router();

orderRouter.post('/', createOrderHandler)
orderRouter.get('/', getAllHistoryHandler)


module.exports = orderRouter