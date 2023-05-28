const { User, Book, Cart } = require('../../db.js');

const createCart = async (id_user, books_cart, amount, date, total, createdDb) => {
    
    const user = await User.findByPk(id_user);
    if (!user) {
      return { success: false, message: 'Usuario no encontrado' };
    }
    
    const book = await Book.findByPk(books_cart);
    if (!book) {
      return { success: false, message: 'Libro no encontrado' };
    }

    let cart = await Cart.findOne({ where: { id_user } });
    if (!cart) {
      cart = await Cart.create({ id_user });
    }
     
    await cart.addBook(book, { through: { amount, date, total, createdDb } });

    return { success: true, message: 'Libro agregado al carrito' };
}
module.exports = createCart;

app.post('/carrito', (req, res) => {
    const { id_usuario, id_libro, cantidad } = req.body;
    // Realiza la lógica para agregar el libro al carrito en la base de datos
    // y devuelve la respuesta al cliente
  });

  
  const createBook = async (title, publisher, description, price, stock, publishedDate, image, createdDb, genders, authors) => {
  
      const newBook = await Book.create({
          title, 
          publisher, 
          description, 
          price, 
          stock,
          publishedDate, 
          image, 
          createdDb
      });
  
      const authorsDb = await Author.findAll({
          where: {name: authors}
      })
  
      newBook.addAuthor(authorsDb);
  
      const gendersDb = await Gender.findAll({
          where: {name: genders}
      })
  
      newBook.addGender(gendersDb);
  
      return newBook;
  
  }
  
  module.exports = createBook;