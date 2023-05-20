import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import {useSelector} from "react-redux"

export const Detail = () => {
const detailData = useSelector((state) => state.detail_data)

    return (
        <Card style={{ width: "90%", height: "100%" }}>
            <Card.Body className="d-flex flex-column justify-content-evenly">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    
                    <h4 style={{ marginRight: "10px", maxWidth: "70%" }}> 
                    {/* {detailData.title} */}
                        Este es el Título del libro, puede ser Largo{" "}
                    </h4>
                    <Button
                        variant="secondary"
                        style={{
                            borderRadius: "50%",
                            width: "70px",
                            height: "70px",
                        }}
                    >
                        5/5 ★
                    </Button>
                </div>
                <Row>
                    <Col>
                        <Card.Subtitle className="mb-2 text-muted">
                            Autor
                        </Card.Subtitle>
                        {/* {detailData.author.map((author)=>{return <Card.Text>author</Card.Text>})} */}
                        <Card.Text>
                            Autor del Libro</Card.Text>
                    </Col>
                    <Col>
                        <Card.Subtitle className="mb-2 text-muted">
                            Género
                        </Card.Subtitle>
                        {/* {detailData.gender.map((gender)=>{return <Card.Text>gender</Card.Text>})} */}
                        <Card.Text>
                            Genero del Libro</Card.Text>
                    </Col>
                </Row>

                <Card.Text>
                    {/* {detailData.description} */}
                    Descripción del libro que puede tener varias líneas para
                    mostrar más información sobre el contenido.
                </Card.Text>

                <div>
                    <Row>
                        <Col>
                            <Button variant="primary">
                                Agregar al carrito
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="outline-secondary">
                                Agregar a la Wishlist
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};
