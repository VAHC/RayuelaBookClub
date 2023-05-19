import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
//Estilos
// import {
//     InfoContainer,
//     InfoTag,
//     ValorTag,
//     Titulo,
//     Button,
//     TitleDiv,
//     ReseñasDiv
// } from "./Styles/detail";

export const Detail = () => {
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
                        <Card.Text>Autor del Libro</Card.Text>
                    </Col>
                    <Col>
                        <Card.Subtitle className="mb-2 text-muted">
                            Género
                        </Card.Subtitle>
                        <Card.Text>Genero del Libro</Card.Text>
                    </Col>
                </Row>
                <Card.Text>
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

//Return de prueba con estilos
//  <InfoContainer>
//     <TitleDiv>
//         <Titulo>
//             Este es el titulo del libro. Uno muy muy largo que sobrepasa
//             lo imaginado.
//         </Titulo>
//         <ReseñasDiv>
//             <Button>5/5</Button>
//             <ValorTag>Reseñas</ValorTag>
//         </ReseñasDiv>
//     </TitleDiv>

//     <InfoTag>Autor</InfoTag>
//     <ValorTag>Shorgi Mukay</ValorTag>

//     <InfoTag>Genero</InfoTag>
//     <ValorTag>Aventura</ValorTag>

//     <InfoTag>Editorial</InfoTag>
//     <ValorTag>Editorial Hardcode</ValorTag>

//     <InfoTag>Resumen</InfoTag>
//     <ValorTag>Esto es un resumen</ValorTag>
// </InfoContainer>
