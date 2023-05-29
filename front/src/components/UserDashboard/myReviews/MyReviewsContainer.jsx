import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getReviewsByUser } from './../../../redux/action';
import FormEditReviews from "./FormEditReviews";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table,
    Accordion,
} from "react-bootstrap";

const MyReviewsContainer = () => {
    const userReviews = useSelector((state) => state.userReviews);
    //const userId = useSelector((state) => state.user.id);
    //user hardcodeado para trabajar
    const userId = 1;
    const dispatch = useDispatch();

    const notDeletedReviews = userReviews.filter((review) => !review.deleted)
    console.log(notDeletedReviews);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          const starIcon = i <= rating ? <i className="bi bi-star-fill" /> : <i className="bi bi-star"/>;
          stars.push(starIcon);
        }
        return stars;
      };

    useEffect(() => {
        dispatch(getReviewsByUser(userId))
    }, [userId]);

      //codigo para modal
  const [showModal, setShowModal] = useState(false); //estdo local para mostrar o no el modal
  const [selectedReview, setSelectedReview] = useState(null);

  const toggleModal = () => { //funcion que setea showModal al booleano contrario en el que esta
    setShowModal(prevShowModal => !prevShowModal);
  };

  const handleEditReview = (review) => {
    setSelectedReview(review);
    toggleModal();
  };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Mis reseñas</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Libro</th>
                                <th>Titulo</th>
                                <th>Calificación</th>
                                <th>Comentario</th>
                            </tr>
                        </thead>
                        <tbody>                           
            {!notDeletedReviews.length  ? (
                <div>
                <h6>Aún no dejaste una reseña...</h6>
                <h5>Elegi un libro y deja una!</h5>
                </div>
            ) : (
                notDeletedReviews.map((r) => { 
                    return (
                        <tr id={r.id} key={r.id}> 
                            <td>{r.book}</td>
                            <td>{r.title}</td>
                            <td>{renderStars(r.qualification)}</td>
                            <td>{r.comment}</td>
                            <td className="d-flex justify-content-center align-items-center">
                                    <Button variant="primary" className="btn btn-sm me-2" onClick={() => handleEditReview(r)}>Editar</Button>
                                    <Button variant="danger" size="sm"><i class="bi bi-trash3"/></Button>
                            </td>
                        </tr>

                    )
                
            })
            )
        }
                        </tbody>
                        {showModal && (
                            <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                           <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered " style={{ marginTop: "7%" }}>
                            <div className="modal-content bg-white border-4">
                            
                    <FormEditReviews 
                      review={selectedReview}
                      toggleModal={toggleModal}
                      handleEditReview={handleEditReview}
                    />

                            
                  </div>
                </div>
              </div>
            )}
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default MyReviewsContainer;


// import MyReview from './MyReview';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getReviewsByUser } from '../../../redux/action';

// const MyReviewsContainer = () => {
//     const userReviews = useSelector((state) => state.userReviews);
//     //const userId = useSelector((state) => state.user.id);
//     //user hardcodeado para trabajar
//     const userId = 1;
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getReviewsByUser(userId))
//     }, [userId]);

//     return (
//         <div>
//             {!userReviews.length  ? (
//                 <div>
//                 <h6>Aún no dejaste una reseña...</h6>
//                 <h5>Elegi un libro y deja una!</h5>
//                 </div>
//             ) : (
//             userReviews.map((r) => {
//                 <MyReview
//                 id={r.id}
//                 book={r.book}
//                 title={r.title}
//                 qualification={r.qualification}
//                 comment={r.comment}
//                 key={r.id}
//                 />
//             })
//             )
//         }
//         </div>
//     )
// };

// export default MyReviewsContainer