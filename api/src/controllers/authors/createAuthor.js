const { Author } = require('../../db');

const createAuthor = async (name) => {

    const newAuthor = await Author.findOrCreate({
        where: { name },
    })
 
    return newAuthor;

}

module.exports = createAuthor;