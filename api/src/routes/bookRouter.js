const { Router } = require('express')
const {
  //getBookByIdHandler,
  LoadBooksHandler,
  getBooksHandler,
  getPage
} = require('../handlers/book/bookHandler')
const {getBookByIdHandler} = require('../handlers/book/getBookByIdHandler')
const createBookHandler = require('../handlers/book/createBookHandler')
const updateBookHandler = require('../handlers/book/updateBookHandler')

const bookRouter = Router()

bookRouter.get('/', getBooksHandler)
bookRouter.get('/:id', getBookByIdHandler)
bookRouter.get('/page/:number', getPage)
bookRouter.get('/load', LoadBooksHandler)
bookRouter.post('/', createBookHandler)
bookRouter.put('/:id', updateBookHandler )



module.exports = bookRouter
