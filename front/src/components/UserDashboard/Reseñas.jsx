import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table,
    Accordion,
} from "react-bootstrap";

const Inventario = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Mi perfil</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Titulo</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {/* Aca hay dos ejemplos hardcodeados, pero tendriamos que traernos todos los libros y renderizarlos. */}
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Product 1</td>
                                <td>miniPortada</td>
                                <td>Description for product 1</td>
                                <td>$20.00</td>
                                <td>7</td>
                                <td>
                                    <Button variant="primary">Edit</Button>{" "}
                                    <Button variant="danger">Disable</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Product 2</td>
                                <td>miniPortada</td>
                                <td>Description for product 2</td>
                                <td>$25.00</td>
                                <td>4</td>
                                <td>
                                    <Button variant="primary">Edit</Button>{" "}
                                    <Button variant="danger">Disable</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Inventario;
