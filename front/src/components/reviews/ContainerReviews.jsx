import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Accordion } from 'react-bootstrap';
import Review from './Review';
import { getReviewsBook } from '../../redux/action';
import FormCreateReview from './FormCreateReview';


const ContainerReviews = ({ bookId, toggleModal }) => {

  const reviewsBook = useSelector((state) => state.reviewsBook);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const notDeletedReviews = reviewsBook.filter(review => !review.deleted)

  useEffect(() => {
    dispatch(getReviewsBook(bookId));
  }, [bookId]);

    const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Modal show={true} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Reseñas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!notDeletedReviews.length ? (
          <div>
            <h6>Aún no hay reseñas...</h6>
            <h5>Sé el primero en dejar una!</h5>
          </div>
        ) : (
          notDeletedReviews && notDeletedReviews.map((r) => (
            <Review
              id={r.id}
              deleted={r.deleted}
              title={r.title}
              qualification={r.qualification}
              comment={r.comment}
              userFirstName={r.userFirstName}
              key={r.id}
            />
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Cerrar
        </Button>
        <div className="d-flex justify-content-center align-items-center">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Deja tu reseña</Accordion.Header>
            <Accordion.Body>
              <FormCreateReview handleToggleForm={handleToggleForm} bookId={bookId} toggleModal={toggleModal}/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ContainerReviews