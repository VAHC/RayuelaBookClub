//al cambiar el estado a complete altero el stock de los elementos.
//mail al estar la compra hecha.

//cambiar los nombres de los estados.
// agregar otro genero


import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
    getAllShopping,
    getAllUsers,
    editOrder,
    filterOrderState,
} from "../../redux/action";
import "../UserDashboard/customStyles.css";

const Orders = () => {
    // useEffect(() => {
    //     if (filtersValue.user_id > 0) dispatch();
    // }, [filtersValue.user_id]);

    const orders = useSelector((state) => state.filteredOrders);
    const users = useSelector((state) => state.filteredUsers);
    let filteredUsers;
    const [filtersValue, setFiltersValues] = useState({
        state: "All",
        // user_id: 0,
    });
    // const [mappingArray, setMappingArray]=useState(filter)

    useEffect(() => {
        dispatch(getAllShopping());
        dispatch(getAllUsers());
    }, []);

    useEffect(() => {
        if (filtersValue.state) dispatch(filterOrderState(filtersValue.state));
    }, [filtersValue.state]);

    const nombreUsuario = (id) => {
        const objeto = users.find((user) => user.id === id);
        const nombreObj = objeto.firstName;
        return nombreObj;
    };

    const dispatch = useDispatch();

    const sortFilteredOrders = orders.sort((a, b) => b.id - a.id);

    const icons = (state) => {
        if (state === "Creada")
            return <i className="bi bi-pencil-square display-6 text-primary" />;
        if (state === "Pendiente")
            return <i className="bi bi-clock display-6 text-primary" />;
        if (state === "Cancelada")
            return <i className="bi bi-x-circle display-6 text-danger" />;
        if (state === "Pagada")
            return <i className="bi bi-check-circle display-6 text-success" />;
        if (state === "Despachada") {
            return (
                <>
                    <i className="bi bi-check-circle display-6 text-success" />
                    <i className="bi bi-check-circle display-6 text-success" />
                </>
            );
        }
    };

    const updateOrder = async (event, order) => {
        const newEstado = event.target.value;
        const newOrder = { id: order.id, state: newEstado };
        await editOrder(newOrder, dispatch);
        dispatch(getAllShopping());
    };

    const filterHandler = (event) => {
        if (event.target.name === "state") {
            setFiltersValues({
                ...filtersValue,
                state: event.target.value,
            });
        }
    };

    return (
        <Container className="min-vh-100">
            <Row>
                <Col>
                    {/* <h2 className="text-center">Gestion de compras</h2> */}
                    <h1>Gestión de Compras</h1>
                    <p>
                        En este panel podrás ver el listado completo de compras
                        y editar el estado de las órdenes.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="m-1">
                        <h6 className="mx-2">Filtrar por estado</h6>
                        <select
                            className="form-select"
                            value={filtersValue.state}
                            onChange={(e) => filterHandler(e)}
                            name={"state"}
                        >
                            <option value="All">Todas</option>
                            <option value="Creada">Creadas</option>
                            <option value="Pendiente">Pendientes</option>
                            <option value="Pagada">Pagadas</option>
                            <option value="Despachada">Despachadas</option>
                            <option value="Cancelada">Canceladas</option>
                        </select>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Detalles de usuario</th>
                                <th>Detalle de la compra</th>
                                <th>Total items</th>
                                <th>Precio total</th>
                                <th>Estado</th>
                                <th>Edición</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortFilteredOrders &&
                                sortFilteredOrders.map((order, index) => (
                                    <tr id={order.id} key={index}>
                                        <td>{icons(order.state)}</td>
                                        <td>{order.date}</td>
                                        <th>
                                            Nombre:{" "}
                                            {users.length > 0 &&
                                                nombreUsuario(order.id_user)}
                                            <br />
                                            ID: {order.id_user}
                                        </th>
                                        <td>
                                            {order.orderDetails &&
                                                order.orderDetails.map(
                                                    (book, index) => (
                                                        <div
                                                            id={book.id_book}
                                                            key={index}
                                                            className="col-12"
                                                        >
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex ">
                                                                    <p className="card-text fw-bold ms-3">
                                                                        {
                                                                            book.quantityDetail
                                                                        }
                                                                    </p>
                                                                    <p className="card-text mx-3">
                                                                        und
                                                                        {book.quantityDetail >
                                                                        1
                                                                            ? "s"
                                                                            : ""}
                                                                    </p>
                                                                </div>

                                                                <p
                                                                    className="text-reset text-decoration-none fw-bold"
                                                                    tabIndex="0"
                                                                    href="#"
                                                                >
                                                                    {
                                                                        book.titleBook
                                                                    }
                                                                </p>
                                                                {/* </OverlayTrigger>  */}

                                                                <div className="d-flex ">
                                                                    <p className="card-text fw-bold ms-3">
                                                                        $
                                                                        {
                                                                            book.priceBook
                                                                        }
                                                                    </p>
                                                                    <p className="card-text ms-3">
                                                                        c/u
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            {index !==
                                                                order
                                                                    .orderDetails
                                                                    .length -
                                                                    1 && <hr />}
                                                        </div>
                                                    )
                                                )}
                                        </td>
                                        <td>
                                            {order.quantity} und
                                            {order.quantity > 1 ? "s" : ""}
                                        </td>
                                        <td>${order.price_total}</td>
                                        <td>{order.state}</td>
                                        <th>
                                            Estado de compra:
                                            <select
                                                name="estado"
                                                onChange={(e) =>
                                                    updateOrder(e, order)
                                                }
                                            >
                                                <option value="Creada">
                                                    Creada
                                                </option>
                                                <option value="Pendiente">
                                                    Pendiente
                                                </option>
                                                <option value="Cancelada">
                                                    Cancelada
                                                </option>
                                                <option value="Pagada">
                                                    Pagada
                                                </option>
                                                <option value="Despachada">
                                                    Despachada
                                                </option>
                                            </select>
                                        </th>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Orders;
