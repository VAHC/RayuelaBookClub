import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Detail = () => {
    const detailData = useSelector((state) => state.detail_data);

    if (!detailData){return(
        <Card style={{ width: "90%", height: "100%" }}>
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
    }
};
