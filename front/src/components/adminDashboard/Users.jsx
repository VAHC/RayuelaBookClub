import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllUsers,
    deleteUser,
    filterProfileUser,
    filterStateUser,
} from "../../redux/action";

const Users = () => {
    const allUsers = useSelector((state) => state.allUsers);

    const filteredUsers = useSelector((state) => state.filteredUsers);
    const [filtersValue, setFiltersValues] = useState({
        profile: "",
        state: "",
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
        //console.log("se hace el dispatch para buscar allBooks");
    }, []);

    useEffect(() => {
        if (filtersValue.profile)
            dispatch(filterProfileUser(filtersValue.profile));
    }, [filtersValue.profile]);

    useEffect(() => {
        if (filtersValue.state) dispatch(filterStateUser(filtersValue.state));
    }, [filtersValue.state]);

    const ableButtonHandler = async (user) => {
        console.log("Estoy modificando el deleted de este User: " + user.id);
        await deleteUser(user, dispatch);
        dispatch(getAllUsers());
    };

    const filterHandler = (event) => {
        if (event.target.name === "profile") {
            console.log("pasa por aca");
            setFiltersValues({ ...filtersValue, profile: event.target.value, state: "All" });
        } else {
            console.log("pasa por el otro");
            setFiltersValues({ ...filtersValue, state: event.target.value, profile: "All" });
        }
    };

    const usersMap = filteredUsers.map((user, index) => {
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
                        variant={user.deleted ? "success" : "danger"}
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
                        En este panel podras ver un listado completo de todos
                        los usuarios, editar su profile, y habilitar o
                        deshabilitarlos.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {" "}
                    <h6 className="mx-2">Filtrar por Profile</h6>
                    <div className="m-1 mb-3">
                        <select
                            className="form-select"
                            value={filtersValue.profile}
                            onChange={(e) => filterHandler(e)}
                            defaultValue={"All"}
                            name={"profile"}
                        >
                            <option value="All">All</option>
                            <option value="admin">admin</option>
                            <option value="usuario">usuario</option>
                        </select>
                    </div>
                </Col>{" "}
                <Col>
                    <div className="m-1">
                        <h6 className="mx-2">Filtrar por Estado</h6>
                        <select
                            className="form-select"
                            value={filtersValue.state}
                            onChange={(e) => filterHandler(e)}
                            defaultValue={"All"}
                            name={"state"}
                        >
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="New">New</option>
                            <option value="Blocked">Blocked</option>
                        </select>
                    </div>
                </Col>
            </Row>

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
