const createCart = require('../../controllers/cart/createCart')

const createCartHandler = async (req,res) => {

    const { id_user, books_cart, amount, date, total, createdDb} = req.body;

    try {
        if (!title || !publisher || !description || !price || !stock || !publishedDate || !image) {
            res.status(400).send('Please check that you have completed all the required fields')
        } else {
            const newBook = await createBook(title, publisher, description, price, stock, publishedDate, image, createdDb, genders, authors)
            res.status(200).send('Congratulations! Your book has been created!')}
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = createCartHandler;