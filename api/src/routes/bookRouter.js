const { Router } = require('express')

const {
  //getBookByIdHandler,
  LoadBooksHandler
} = require('../handlers/bookHandler')
const {getBookByIdHandler} = require('../handlers/getBookByIdHandler')
// const router = require(".");

const bookRouter = Router()

bookRouter.get('/:id', getBookByIdHandler)

bookRouter.get('/load', LoadBooksHandler)

// console.log(searchCountriesHandler);

module.exports = bookRouter
