import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ContainerReviews from "../reviews/ContainerReviews";
import { useState } from 'react';
import { addToCart } from "../../redux/action";

export const Detail = () => {

  const detailData = useSelector((state) => state.detail_data);
  const dispatch = useDispatch();

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

  //console.log(detailData);
  const bookId = detailData ? detailData.id : null;

  //codigo para modal
  const [showModal, setShowModal] = useState(false); //estdo local para mostrar o no el modal

  const toggleModal = () => { //funcion que setea showModal al booleano contrario en el que esta
    setShowModal(prevShowModal => !prevShowModal);
  };

  const addToCartHandler = () => {
    dispatch(addToCart(detailData));
  }

  if (!detailData) {
    return (
      <Card style={{ width: "100%", height: "100%"}}>
        <Card.Body className="d-flex flex-column justify-content-evenly">
     <h1>Seleccioná un libro para ver más detalles.</h1>
        </Card.Body>
    </Card>
    )}
    else{
    return (
      <Card style={{ width: "90%", height: "100%" }}>
        <Card.Body className="d-flex flex-column justify-content-evenly">
          <Row>
          <Col>
            <h4>{detailData.title}</h4>
            <Button variant="secondary" onClick={toggleModal} className="custom-button">
              <p className="mb-1">Reseñas</p>
              <div>{renderStars(qualificationObtained(detailData))}</div>
            </Button>
            
          </Col>
          <Col>
            <img  src={detailData.image} alt="Cover" style={{ width: "70%", height: "auto" }} />
          </Col>
          </Row>
          <Row>
            <Col>
              <Card.Subtitle className="text-muted">
                Autor
              </Card.Subtitle>
              {detailData.authors && detailData.authors.map((author, index) => {
                return <Card.Text key={index}><strong>{author}</strong></Card.Text>;
              })}
            </Col>
            <Col>
              <Card.Subtitle className="text-muted">
                Género
              </Card.Subtitle>
              {detailData.genders && detailData.genders.map((gender, index) => {
                return <Card.Text key={index}><strong>{gender}</strong></Card.Text>;
              })}
            </Col>
          </Row>

          <Card.Text style={{ overflow: "auto", height: "200px" }}>
            {detailData.description}
          </Card.Text>

          <div>
            <Row className="d-flex justify-content-center">
              <Col className="text-center">
                <Button variant="dark" onClick={() => { addToCartHandler(detailData) }}>Agregar al carrito</Button>
              </Col>
              {/* <Col>
                    <Button variant="outline-secondary">
                      Agregar a la Wishlist
                    </Button>
                  </Col> */}
            </Row>
          </div>
        </Card.Body>
        {showModal && (
          <div className="modal" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <ContainerReviews
                  toggleModal={toggleModal}
                  bookId={bookId} 
                />
              </div>
            </div>
          </div>
        )}
      </Card>
    );
  }
};

