const { getBookById } = require('../controllers/books/getBookById')
const { LoadAllBooks } = require('../controllers/books/LoadBooks')

const getBookByIdHandler = (req, res) => {
  try {
    res.status(200).send('funciona')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const LoadBooksHandler = async (req, res) => {
  try {
    const response = await LoadAllBooks()
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getBookByIdHandler, LoadBooksHandler }
