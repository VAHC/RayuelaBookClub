import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table,
    Modal,
} from "react-bootstrap";
import { FormCreateBook } from "../formCreateBook/formCreateBook";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../redux/action";

const Inventario = () => {
    const [modalShow, setModalShow] = useState(false);
    const allBooks = useSelector((state) => state.allBooks);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBooks());
        //console.log("se hace el dispatch para buscar allBooks");
    }, []);

    const tableLoad = allBooks.map((book, index) => {
        return (
            <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{<img src={book.image} />}</td>
                <td>
                    {book.authors.map((author, index) => {
                        return author;
                    })}
                </td>
                <td>{book.price}</td>
                <td>{book.stock}</td>
                <td>
                    <Button variant="primary">Edit</Button>{" "}
                    <Button variant="danger">Disable</Button>
                </td>
            </tr>
        );
    });

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Inventario/Stock</h1>
                    <p>
                        Aqui podras modificar y tener registro del inventario de
                        Libros y productos de Rayuela
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                        style={{ marginBottom: "15px" }}
                    >
                        Agregar nuevo libro al Inventario
                    </Button>
                    <Modal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Formulario para agregar nuevo libro:
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormCreateBook />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => setModalShow(false)}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Titulo</th>
                                <th>Portada</th>
                                <th>Autor</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {/* Aca hay dos ejemplos hardcodeados, pero tendriamos que traernos todos los libros y renderizarlos. */}
                        <tbody>{tableLoad}</tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Inventario;
