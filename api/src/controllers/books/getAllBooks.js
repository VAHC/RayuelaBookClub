const { Book, Gender, Author } = require('../../db.js');

const getAllBooks = async () => {
    const databaseBooks = await Book.findAll({
        // include: [
        //     {
        //     model: Gender,
        //     attributes: ['name'],
        //     through: {
        //         attributes: [],
        //     }
        // },
        // {
        //     model: Author,
        //     attributes: ['name'],
        //     through: {
        //         attributes: [],
        //     }
        // }
        // ]
    })

    const sortedBooks = databaseBooks.sort((a,b) => a.title.localeCompare(b.title))
    
    return sortedBooks;
};

module.exports = getAllBooks;