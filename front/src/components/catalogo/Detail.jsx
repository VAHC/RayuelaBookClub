import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ContainerReviews from "../reviews/ContainerReviews";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export const Detail = () => {
  const detailData = useSelector((state) => state.detail_data);
  //console.log(detailData);
  const bookId = detailData ? detailData.id : null;
  //console.log('detail' + bookId)
  
  //codigo para modal
  const [showModal, setShowModal] = useState(false); //estdo local para mostrar o no el modal

  const toggleModal = () => { //funcion que setea showModal al booleano contrario en el que esta
    setShowModal(prevShowModal => !prevShowModal);
  };
  const navigate = useNavigate()

  if (!detailData) {
    return (
      <Card style={{ width: "100%", height: "100%"}}>
        <Card.Body className="d-flex flex-column justify-content-evenly">
     <h1>Selecciona un libro para ver más detalles.</h1>
        </Card.Body>
    </Card>
    )}
    else{
        return (
            <Card style={{ width: "90%", height: "100%" }}>
                <Card.Body className="d-flex flex-column justify-content-evenly">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <h4 style={{ marginRight: "10px", maxWidth: "70%" }}>
                            {detailData.title}
                        </h4>
                        <Button 
                            variant="secondary"
                            style={{
                                borderRadius: "50%",
                                width: "70px",
                                height: "70px",
                            }}
                            onClick={toggleModal}
                            //onClick={() => navigate(`/reseñas/${bookId}`)}
                        >
                            5/5 ★
                        </Button>
                    </div>
                    <Row>
                        <Col>
                            <Card.Subtitle className="text-muted">
                                Autor
                            </Card.Subtitle>
                            {detailData.authors.map((author, index) => {
                                return <Card.Text key={index} >{author}</Card.Text>;
                            })}
                        </Col>
                        <Col>
                            <Card.Subtitle className="text-muted">
                                Género
                            </Card.Subtitle>
                            {detailData.genders.map((gender) => {
                                return <Card.Text>{gender}</Card.Text>;
                            })}
                        </Col>
                    </Row>

              <Card.Text style={{ overflow: "auto", height: "200px" }}>
                {detailData.description}
              </Card.Text>

              <div>
                <Row>
                  <Col>
                    <Button variant="primary">Agregar al carrito</Button>
                  </Col>
                  <Col>
                    <Button variant="outline-secondary">
                      Agregar a la Wishlist
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card.Body>
            {showModal && (
              <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <ContainerReviews 
                      toggleModal={toggleModal}
                      bookId={bookId} // Corrección: pasando bookId como propiedad
                    />
                  </div>
                </div>
              </div>
            )}
          </Card>
    );
  }
};


