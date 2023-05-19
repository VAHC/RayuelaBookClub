const axios = require('axios')
const { Book } = require('../../db')

const LoadAllBooks = async () => {
  const GetBooks = await axios('https://pi-henry-woad.vercel.app/imagen/json-Liboros.json')
  const LoadBooks = GetBooks.data.map(libro => {
    return ({
      title: '',
      publisher: '',
      description: libro.description,
      price: libro.price,
      stock: libro.stock,
      publishedDate: '',
      image: libro.image
    })
  })
  await Book.bulkCreate(LoadBooks) // carga masiva
  console.log('carge libros')
  return (LoadBooks)
}
module.exports = { LoadAllBooks }
