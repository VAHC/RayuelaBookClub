// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import Review from './Review';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getReviewsBook } from '../../redux/action';

const ContainerReviews = ({ bookId, toggleModal }) => {
  const reviewsBook = useSelector((state) => state.reviewsBook);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsBook(bookId));
  }, [bookId]);

  return (
    <Modal show={true} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Reseñas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!reviewsBook.length ? (
          <div>
            <h6>Aún no hay reseñas...</h6>
            <h5>Sé el primero en dejar una!</h5>
          </div>
        ) : (
          reviewsBook.map((r) => (
            <Review
              id={r.id}
              title={r.title}
              qualification={r.qualification}
              comment={r.comment}
              user={r.user}
              key={r.id}
            />
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Cerrar
        </Button>
        <Button variant="primary">Deja tu reseña</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContainerReviews