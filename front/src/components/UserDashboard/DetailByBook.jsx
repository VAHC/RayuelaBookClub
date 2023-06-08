import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { getBookById } from '../../redux/action';
import { useParams } from 'react-router-dom';

const DetailByBook = ({id_book}) => {
    const book = useSelector((state) => state.bookById);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookById(id_book))
    }, [id_book])

    const qualificationObtained = (book) => {
        const reviews = book.reviews
        const notDeletedReviews = reviews.filter(review => !review.deleted)
        if (notDeletedReviews && Array.isArray(notDeletedReviews) && notDeletedReviews.length > 0) {
          let sum = 0;
          for (let i = 0; i < notDeletedReviews.length; i++) {
            sum += notDeletedReviews[i].qualification;
          }
          let average = sum / notDeletedReviews.length;
          return Math.round(average);
        }
        return 0; // Valor predeterminado si no hay reviews o no es un array válido
    };
       
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          const starIcon = i <= rating ? <i key={i} className="bi bi-star-fill" /> : <i key={i} className="bi bi-star"/>;
          stars.push(starIcon);
        }
        return stars;
    };
    
    return (
        <div>
            <div>{renderStars(qualificationObtained(book))}</div>
                <div>
                    <h6>Autor</h6>
                        {book.authors.map((author, index) => (
                            <div id={author.id} key={index}>
                                <p>{author}</p>
                            </div>
                        ))}
                </div>
                <div>
                    <h6>Género</h6>
                    {book.genders.map((genre, index) => (
                        <div id={genre.id} key={index}>
                            <p>{genre}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <p>{book.description}</p>
                </div>    
        </div>
    )
}

export default DetailByBook