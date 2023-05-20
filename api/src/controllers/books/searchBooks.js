const getAllBooks = require('./getAllBooks');


const searchBooks = async (search) => {

    const allBooks = await getAllBooks();

    if (search){

        const booksFiltered = allBooks.filter((book) => {
           
            return book.title.toLowerCase().includes(search.toLowerCase()) 
            || book.authors.toLowerCase().includes(search.toLowerCase());
        })
    
        if (booksFiltered.length === 0) {
            throw Error(`No recipes have been found matching your search: title:'${title}', author='${author}'`)
        }
        return booksFiltered;
    }
};

module.exports = searchBooks;
