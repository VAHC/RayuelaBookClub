import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table,
    Tabs,
    Tab,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../../redux/action";

const Users = () => {
    const allUsers = useSelector((state) => state.allUsers);

    // const [filterText, setFilterText] = useState("");
    // const [filterGenre, setFilterGenre] = useState("");
    // const [filterAuthor, setFilterAuthor] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
        //console.log("se hace el dispatch para buscar allBooks");
    }, [dispatch]);

    // const handleGenreFilterChange = (e) => {
    //     const genreValue = e.target.value;
    //     setFilterGenre(genreValue);
    // };

    // const handleAuthorFilterChange = (e) => {
    //     const authorValue = e.target.value;
    //     setFilterAuthor(authorValue);
    // };

    // const handleFilterChange = (e) => {
    //     const inputValue = e.target.value;
    //     setFilterText(inputValue);

    //     const filteredBooks = allBooks.filter((book) => {
    //         const titleMatch = book.title
    //             .toLowerCase()
    //             .includes(inputValue.toLowerCase());
    //         const genreMatch = book.genders.some((genre) =>
    //             genre.toLowerCase().includes(filterGenre.toLowerCase())
    //         );
    //         const authorMatch = book.authors.some((author) =>
    //             author.toLowerCase().includes(filterAuthor.toLowerCase())
    //         );

    //         return titleMatch && genreMatch && authorMatch;
    //     });

    //     setFilteredBooks(filteredBooks);
    // };

    // const filteredBooks = filterText
    //     ? allBooks.filter((book) =>
    //           book.title.toLowerCase().includes(filterText.toLowerCase())
    //       )
    //     : allBooks;

    // const filteredBooksByGenre = filterGenre
    //     ? filteredBooks.filter((book) =>
    //           book.genders.some((genre) =>
    //               genre.toLowerCase().includes(filterGenre.toLowerCase())
    //           )
    //       )
    //     : filteredBooks;

    // const filteredBooksByAuthor = filterAuthor
    //     ? filteredBooksByGenre.filter((book) =>
    //           book.authors.some((author) =>
    //               author.toLowerCase().includes(filterAuthor.toLowerCase())
    //           )
    //       )
    //     : filteredBooksByGenre;

    const ableButtonHandler = async (user) => {
        console.log("Estoy modificando el deleted de este User: " + user.id);
        await deleteUser(user, dispatch);
        dispatch(getAllUsers());
    };

    const usersMap = allUsers.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.profile}</td>
                <td>{user.firstName + user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{String(user.suscribed)}</td>
                <td>{String(user.state)}</td>
                <td>
                    {" "}
                    <Button
                        onClick={() => ableButtonHandler(user)}
                        variant={user.deleted === true ? "success" : "danger"}
                    >
                        {user.deleted ? "Habilitar" : "deshabilitar"}
                    </Button>
                </td>
            </tr>
        );
    });

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Gestion de Usuarios</h1>
                    <p>
                        En este panel podras ver un listado completo de todos los usuarios, editar su profile,
                        y habilitar o deshabilitarlos.
                    </p>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <Tabs className="mb-3" fill>
                        <Tab eventKey="titulo" title="Filtrar por Título">
                            <Form.Group
                                style={{ marginBottom: "15px" }}
                                controlId="filterInput"
                            >
                                <Form.Control
                                    type="text"
                                    value={filterText}
                                    onChange={handleFilterChange}
                                    placeholder="Escriba aqui para filtrar..."
                                    autoFocus
                                />
                            </Form.Group>
                        </Tab>
                        <Tab eventKey="genero" title="Filtrar por Género">
                            <Form.Group
                                style={{ marginBottom: "15px" }}
                                controlId="genreFilterInput"
                            >
                                <Form.Control
                                    type="text"
                                    value={filterGenre}
                                    onChange={handleGenreFilterChange}
                                    placeholder="Escriba aqui para filtrar..."
                                    autoFocus
                                />
                            </Form.Group>
                        </Tab>
                        <Tab eventKey="autor" title="Filtrar por Autor">
                            <Form.Group controlId="authorFilterInput">
                                <Form.Control
                                    style={{ marginBottom: "15px" }}
                                    type="text"
                                    value={filterAuthor}
                                    onChange={handleAuthorFilterChange}
                                    placeholder="Escriba aqui para filtrar..."
                                    autoFocus
                                />
                            </Form.Group>
                        </Tab>
                    </Tabs>
                </Col>
            </Row> */}
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Profile</th>
                                <th>Nombre</th>
                                <th>Mail</th>
                                <th>Telefono</th>
                                <th>Suscripcion</th>
                                <th>Estado</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{usersMap}</tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Users;
