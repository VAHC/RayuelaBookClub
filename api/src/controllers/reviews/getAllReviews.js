const { Review, User, Book } = require('../../db');

const getAllReviews = async () => {

    const reviews = await Review.findAll(
        {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Book,
                    attributes: ['title'],
                }
            ]
        })

    const mappedReviews = reviews.map(r => {
        
        return {
          id: r.id,
          bookTitle: r.book.title,
          title: r.title,
          qualification: r.qualification,
          comment: r.comment,
          id_user: r.id_user,
          user: r.user.name,
          id_book: r.id_book,
         
        }
      })


    return mappedReviews;
}

module.exports = getAllReviews