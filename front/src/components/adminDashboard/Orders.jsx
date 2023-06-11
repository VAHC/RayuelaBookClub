import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllShopping, getAllUsers, editOrder } from "../../redux/action";
import "../UserDashboard/customStyles.css";

const Orders = () => {
    useEffect(() => {
        dispatch(getAllShopping());
        dispatch(getAllUsers());
    }, []);

    const orders = useSelector((state) => state.allOrders);
    const users = useSelector((state) => state.allUsers);

    const nombreUsuario = (id) => {
        const objeto = users.find((user) => user.id === id);
        const nombreObj = objeto.firstName;
        return nombreObj;
    };

    const dispatch = useDispatch();

    const sortOrders = orders.sort((a, b) => b.id - a.id);

    const icons = (state) => {
        if (state === "Created")
            return <i className="bi bi-pencil-square display-6 text-primary" />;
        if (state === "Pending")
            return <i className="bi bi-clock display-6 text-primary" />;
        if (state === "Cancelled")
            return <i className="bi bi-x-circle display-6 text-danger" />;
        if (state === "Completed")
            return <i className="bi bi-check-circle display-6 text-success" />;
    };

    const updateOrder = async (event, order) => {
      const newEstado = event.target.value
        const newOrder = { id: order.id , state: newEstado };
        await editOrder(newOrder, dispatch);
        dispatch(getAllShopping());
    };

    return (
        <Container className="min-vh-100">
            <Row>
                <Col>
                    <h2 className="text-center">Gestion de compras</h2>
                    <p>
                        En este panel podrás ver el listado completo de compras
                        y editar el estado de las ordenes.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Usuario</th>
                                <th>Detalle de la compra</th>
                                <th>Total de items</th>
                                <th>Precio total</th>
                                <th>Estado de la compra</th>
                                <th>Edición</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortOrders &&
                                sortOrders.map((order, index) => (
                                    <tr id={order.id} key={index}>
                                        <td>{icons(order.state)}</td>
                                        <td>{order.date}</td>
                                        <th>
                                            Name:{" "}
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
                                                                    <p className="card-text ms-3">
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
                                                onChange={(e) => updateOrder(e, order)}
                                            >
                                                <option value="Created">
                                                    Created
                                                </option>
                                                <option value="Pending">
                                                    Pending
                                                </option>
                                                <option value="Cancelled">
                                                    Cancelled
                                                </option>
                                                <option value="Completed">
                                                    Completed
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
