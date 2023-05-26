const { Router } = require('express');
const getAllReviewsHandler = require('../handlers/reviews/getAllReviewsHandler');
const createReviewHandler = require('../handlers/reviews/createReviewHandler');

const reviewsRouter = Router();

reviewsRouter.get('/', getAllReviewsHandler)
reviewsRouter.post('/', createReviewHandler)

module.exports = reviewsRouter