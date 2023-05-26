const { Review, User } = require('../../db');

const getAllReviews = async () => {

    const reviews = await Review.findAll(
        {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }
            ]
        })

    const mappedReviews = reviews.map(r => {
        return {
          id: r.id,
          title: r.title,
          qualification: r.qualification,
          comment: r.comment,
          id_user: r.id_user,
          user: r.user.name
        }
      })


    return mappedReviews;
}

module.exports = getAllReviews