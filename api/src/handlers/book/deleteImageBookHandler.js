const deletedImageBook = require('../../controllers/books/deletedImageBook')

const deleteImageBookHandler = async (req, res) => {
    //http://localhost:3001/books/deleteImg/1
    const { id } = req.params

    try {
        const deletedImage = await deletedImageBook(id)
           res.status(200).json(deletedImage.title)
        }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = deleteImageBookHandler;