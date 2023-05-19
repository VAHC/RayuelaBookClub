const { Router } = require('express')
const {
  getBookByIdHandler,
  LoadBooksHandler,
  getBooksHandler,
} = require('../handlers/bookHandler')

// const router = require(".");

const bookRouter = Router()

bookRouter.get('/', getBooksHandler)
bookRouter.get('/:id', getBookByIdHandler)
bookRouter.get('/load', LoadBooksHandler)

// console.log(searchCountriesHandler);

module.exports = bookRouter
