const { getBookById } = require('../controllers/books/getBookById')

const getBookByIdHandler = (req, res) => {
  try {
    res.status(200).send('funciona')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getBookByIdHandler }
