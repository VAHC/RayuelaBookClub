const { Router } = require('express')
const {
  //getBookByIdHandler,
  LoadBooksHandler,
  getBooksHandler,
  getPage
} = require('../handlers/bookHandler')
const {getBookByIdHandler} = require('../handlers/getBookByIdHandler')
const createBookHandler = require('../handlers/createBookHandler')

const bookRouter = Router()

bookRouter.get('/', getBooksHandler)
bookRouter.get('/:id', getBookByIdHandler)
bookRouter.get('/page/:number', getPage)
bookRouter.get('/load', LoadBooksHandler)
bookRouter.post('/', createBookHandler)



module.exports = bookRouter
