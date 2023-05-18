const { Router } = require('express')

const {
  getBookByIdHandler
} = require('../handlers/bookHandler')
// const router = require(".");

const bookRouter = Router()

console.log('dadad')

bookRouter.get('/', getBookByIdHandler)
// console.log(searchCountriesHandler);

module.exports = bookRouter
