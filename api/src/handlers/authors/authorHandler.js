const getAllAuthors = require('../../controllers/authors/getAllAuthors')
const createAuthor = require('../../controllers/authors/createAuthor')

const getAuthorsHandler = async (req,res) => {
    try {
        const authors = await getAllAuthors()
        res.status(200).json(authors)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postAuthorHandler = async (req,res) => {
    const { name } = req.body

    try {
        const newAuthor = await createAuthor(name);
        res.status(200).send('The author has been created')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    getAuthorsHandler,
    postAuthorHandler
}