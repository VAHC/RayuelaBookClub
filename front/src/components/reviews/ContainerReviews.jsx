import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Accordion } from 'react-bootstrap';
import Review from './Review';
import { getReviewsBook } from '../../redux/action';
import FormCreateReview from './FormCreateReview';

const ContainerReviews = ({ bookId, toggleModal, title }) => {

  const reviewsBook = useSelector((state) => state.reviewsBook);
  console.log(reviewsBook);
  console.log(bookId);
  console.log(title);
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
        <Modal.Title>Opiniones sobre el libro "{title}"</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!notDeletedReviews.length ? (
          <div>
            <h6>Aún no hay opiniones...</h6>
            <h5>¡Sé el primero en dejar una!</h5>
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
            <Accordion.Header>Dejá tu opinión</Accordion.Header>
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