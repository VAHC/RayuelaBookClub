// const { getBookById } = require('../controllers/books/getBookById')
const { LoadAllBooks } = require('../controllers/books/LoadBooks')
const searchBooks = require('../controllers/books/searchBooks')
const getAllBooks = require('../controllers/books/getAllBooks')

// const getBookByIdHandler = (req, res) => {
//   try {
//     res.status(200).send('funciona')
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// }

const LoadBooksHandler = async (req, res) => {
  try {
    const response = await LoadAllBooks()
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getBooksHandler = async (req, res) => {

  const { title, author } = req.query;

  try {
    const search = title || author;

    const results = search
    ? await searchBooks(search)
    : await getAllBooks();
    res.status(200).json(results)
  } catch (error) {
    res.status(400).json({error: error.message})    
  }
}

module.exports = { getBookByIdHandler, LoadBooksHandler, getBooksHandler }
