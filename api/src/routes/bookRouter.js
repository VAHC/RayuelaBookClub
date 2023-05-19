const { Router } = require('express')

const {
  getBookByIdHandler,
  LoadBooksHandler
} = require('../handlers/bookHandler')
// const router = require(".");

const bookRouter = Router()

bookRouter.get('/', getBookByIdHandler)

bookRouter.get('/load', LoadBooksHandler)

// console.log(searchCountriesHandler);

module.exports = bookRouter
