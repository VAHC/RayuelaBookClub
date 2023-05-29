import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getReviewsByUser } from './../../../redux/action';
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
                            <td>
                                    <Button variant="primary">Editar</Button>{" "}
                                    <Button variant="danger"><i class="bi bi-trash3"/></Button>
                            </td>
                        </tr>

                    )
                
            })
            )
        }
                        </tbody>
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