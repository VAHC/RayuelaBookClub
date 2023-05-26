const { Review } = require('../../db');

const getAllReviews = async () => {

    const Reviews = await Review.findAll()
    return Reviews;
}

module.exports = getAllReviews