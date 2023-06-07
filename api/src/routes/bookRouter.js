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
const deleteBookHandler = require('../handlers/book/deleteBookHandler')
const deleteImageBookHandler = require('../handlers/book/deleteImageBookHandler')

const bookRouter = Router()

const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  // trabaja la carga de archivos
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, file.fieldname + '-' + Date.now()+ext)
  },
 // preservePath: true // Habilita la opción preservePath
})

const upload = multer({ storage }) // Ruta donde se guardarán las imágenes subidas

bookRouter.get('/', getBooksHandler)
bookRouter.post('/',upload.single('image'), createBookHandler)
bookRouter.get('/:id', getBookByIdHandler)
bookRouter.get('/page/:number', getPage)
bookRouter.get('/load', LoadBooksHandler)
//bookRouter.post('/', createBookHandler)
// bookRouter.put('/:id', updateBookHandler)
bookRouter.put('/putbook', updateBookHandler)
bookRouter.put('/delete/:id', deleteBookHandler)



module.exports = bookRouter
