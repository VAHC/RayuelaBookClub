const { Router } = require('express')

const {
  getBookByIdHandler
} = require('../handlers/bookHandler')
// const router = require(".");

const bookRouter = Router()

bookRouter.get('/', getBookByIdHandler)
bookRouter.get('/:id', getBookByIdHandler)
// console.log(searchCountriesHandler);

module.exports = bookRouter
