import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsByUser, deleteReview } from './../../../redux/action';
import FormEditReviews from "./FormEditReviews";
import {
    Container,
    Row,
    Col,
    Button,
    Table,
} from "react-bootstrap";
import PropagateLoader from "react-spinners/PropagateLoader";

const MyReviewsContainer = () => {
    const userReviews = useSelector((state) => state.userReviews);
    const user = useSelector((state) => state.user);
    const userId = user ? user.id : null;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showModal, setShowModal] = useState(false); //estdo local para mostrar o no el modal
    const [selectedReview, setSelectedReview] = useState(null);
    const dispatch = useDispatch();
    const notDeletedReviews = userReviews.filter((review) => !review.deleted)
    const sortReviews = notDeletedReviews.sort((a, b) => b.id - a.id)
    //Estado para el spinner
    const [loading, setLoading] = useState(true);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starIcon = i <= rating ? <i key={i} className="bi bi-star-fill" /> : <i key={i} className="bi bi-star" />;
            stars.push(starIcon);
        }
        return stars;
    };

    useEffect(() => {
        setTimeout(() => {
            dispatch(getReviewsByUser(userId))
                .then(() => setLoading(false))
                .catch(() => setLoading(false));
        }, 1000)
    }, [dispatch, userId])

    const toggleModal = () => { //funcion que setea showModal al booleano contrario en el que esta
        setShowModal(prevShowModal => !prevShowModal);
    };

    const handleEditReview = (review) => {
        setSelectedReview(review);
        dispatch(getReviewsByUser(userId));
        toggleModal();
    };

    const handlerDelete = (reviewId) => {
        setShowDeleteModal(true)
        dispatch(deleteReview(reviewId))
        dispatch(getReviewsByUser(userId))
        setTimeout(() => {
            setShowDeleteModal(false)
        }, 2000);
    }

    return (
        <Container className="min-vh-100">
            {loading ? (
                <div className="text-center d-flex flex-column align-items-center" style={{ marginTop: '100px' }}>
                    <PropagateLoader size={25} />
                </div>
            ) : !notDeletedReviews.length ? (
                <div>
                    <Row>
                        <Col>
                            <h2 className="text-center">Mis Opiniones</h2>
                        </Col>
                    </Row>
                    <h6>Aún no dejaste una opinión...</h6>
                    <h5>¡Elegí un libro y dejá una!</h5>
                </div>
            ) : (userId &&
                <Row>
                    <Row>
                        <Col>
                            <h2 className="text-center">Mis opiniones</h2>
                        </Col>
                    </Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Libro</th>
                                    <th>Título</th>
                                    <th>Calificación</th>
                                    <th>Comentario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortReviews && sortReviews.map((r, index) => (
                                    <tr id={r.id} key={index}>
                                        <td>{r.book}</td>
                                        <td>{r.title}</td>
                                        <td>{renderStars(r.qualification)}</td>
                                        <td>{r.comment}</td>
                                        <td className="d-flex justify-content-center align-items-center">
                                            <Button variant="primary" className="btn btn-sm me-2" onClick={() => handleEditReview(r)}>Editar</Button>
                                            <Button variant="danger" size="sm" onClick={() => handlerDelete(r.id)}><i className="bi bi-trash3" /></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            )}

            {showModal && (
                <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered " style={{ marginTop: "7%" }}>
                        <div className="modal-content bg-white border-4">
                            <FormEditReviews
                                review={selectedReview}
                                toggleModal={toggleModal}
                            />
                        </div>
                    </div>
                </div>
            )}
            {showDeleteModal && (
                <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-centered" style={{ marginTop: "7%" }}>
                        <div className="modal-content bg-white border-4">
                            <div className="modal-body d-flex justify-content-center align-items-center">
                                <img className="w-75 p-3 h-50 d-inline-block" src='.\images\deleteReview.png' alt='reseña borrada' /> {/* Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default MyReviewsContainer;