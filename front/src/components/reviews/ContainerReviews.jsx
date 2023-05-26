import React from 'react';
import {useSelector} from 'react-redux';
import Review from './Review';

const ContainerReviews = () => {
    const reviewsBook = useSelector(state => state.reviewsBook)

    return (
<div className="modal" tabindex="-1">
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Reseñas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div>
            {!reviewsBook.length ? 
            <div>
            <h6>Aún no hay reseñas...</h6>
            <h5>Sé el primero en dejar una!</h5>
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
            
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary">Deja tu Comentario</button>
      </div>
    </div>
  </div>
</div>
    )

};

export default ContainerReviews
