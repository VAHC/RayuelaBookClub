import React from 'react';
import {useSelector} from 'react-redux';
import Review from './Review';

const ContainerReviews = () => {
    const reviewsBook = useSelector(state => state.reviewsBook)

    return (
        <div>
            {!reviewsBook.length ? 
            <div>
            <h3>Aún no hay reseñas...</h3>
            <h2>Sé el primero en dejar una!</h2>
            </div> 
            : reviewsBook.map(review => {
                <Review 
                    id = {review.id}
                    key = {review.id}
                    book = {review.book.title}
                    title = {review.title}
                    qualification = {review.qualification}
                    comment = {review.comment}
                    user = {review.user.name}
                />
            })
            }
        </div>
    )

};

export default ContainerReviews