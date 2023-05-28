import React from 'react';

const MyReview = (props) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          const starIcon = i <= rating ? <i className="bi bi-star-fill" /> : <i className="bi bi-star"/>;
          stars.push(starIcon);
        }
        return stars;
      };

    return (
        <div className="container-lg border border-2 rounded p-3 mb-3">
            <div className="d-flex justify-content-between">
                <h4>Tu reseña del libro {props.book} es...</h4>
                <h5>{props.title}</h5>
                <div>{renderStars(props.qualification)}</div>
            </div>
            <div className="comment-container border rounded mt-3 p-2 mx-auto" style={{ overflowY: 'scroll', maxHeight: '150px', width: '90%' }}>
            <p>{props.comment}</p>
            <button>Editar</button>
            <button><i class="bi bi-trash-fill"></i></button>
        </div>
        </div>
    )
};

export default MyReview