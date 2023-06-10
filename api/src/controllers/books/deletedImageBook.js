const { Book } = require('../../db');
const {URL_Vercel_back} = require('../../../rutas')
const cloudinary = require('cloudinary').v2;

const {
    CLOUD_NAME, CLOUD_API, CLOUD_SECRET
  } = process.env

  // Configuration 
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API,
    api_secret: CLOUD_SECRET
  });

const deletedImageBook = async (id) => {
//http://127.0.0.1:5173/images/logo.png
    const bookToDelete = await Book.findByPk(id);
    console.log(bookToDelete.imageId);
    bookToDelete.image = URL_Vercel_back+'/images/logo.png'
    await bookToDelete.save()
    const result = await cloudinary.uploader.destroy(bookToDelete.imageId);

    return (result)
}

module.exports = deletedImageBook;