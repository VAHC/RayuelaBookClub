const { Book } = require('../../db')

const getBookById = async (id) => {
  const foundBook = await Book.findByPk(id, {

  });

  if (!foundBook) throw new Error(`Book not found with ID: ${id}`);
  return foundBook;
};

module.exports = { getBookById };

  // const getBookById = async (id) => {
  //   const foundBook = await Book.findByPk(id, {
  //     include: {
  //       model: Gender,
  //       through: {
  //         attributes: [],
  //       },
  //     },
  //     {
  //       model: Author,
  //       through: {
  //         attributes: [],
  //       },
  //     },
  //   });

  //   if (!foundBook) throw new Error(`Book not found with ID: ${id}`);
  //   return foundBook;
  // };
