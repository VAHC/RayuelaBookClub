const getAllBooks = require('./getAllBooks');


const searchBooks = async (title, author) => {

    const allBooks = await getAllBooks();

    if (title || author) {

        const booksFiltered = allBooks.filter((book) => {
            const bookTitle = book.title.toLowerCase();
            const bookAuthor = book.author.toLowerCase();

            return (title && book.title.includes(title.toLowerCase())) ||
                (author && book.author.includes(author.toLowerCase()));
        });

        if (booksFiltered.length === 0) {
            throw Error(`No recipes have been found matching your search: title:'${title}', author='${author}'`)
        }
        return booksFiltered;
    };
}


module.exports = searchBooks;
