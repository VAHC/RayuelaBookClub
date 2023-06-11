import React from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import DetailByBook from "../UserDashboard/DetailByBook";
import {Container, Row, Col, Table, Popover, OverlayTrigger} from "react-bootstrap"; 
import { useSelector, useDispatch } from "react-redux";
import { getAllShopping } from "../../redux/action";
import '../UserDashboard/customStyles.css';

const Orders = () => {

    const orders = useSelector((state) => state.allOrders);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllShopping())
    }, [])

    const sortOrders = orders.sort((a, b) => b.id - a.id)

const icons = (state) => {
    if(state === "Created") return <i className="bi bi-pencil-square display-6 text-primary"/>
    if(state === "Pending") return <i className="bi bi-clock display-6 text-primary"/>
    if(state === "Cancelled") return <i className="bi bi-x-circle display-6 text-danger"/>
    if(state === "Completed") return <i className="bi bi-check-circle display-6 text-success"/>
};

    return (
        <Container className="min-vh-100">
            <Row>
                <Col>
                    <h2 className="text-center">Gestion de compras</h2>
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
                                </tr>
                            </thead>
                            <tbody>
                                {sortOrders && sortOrders.map((order, index) => (
                                    <tr id={order.id} key={index}>
                                        <td>{icons(order.state)}</td>
                                        <td>{order.date}</td>
                                        <th>Usuario</th>
                                        <td>
                                        {order.orderDetails && order.orderDetails.map((book, index) => (
                                            <div id={book.id_book} key={index} className="col-12">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex ">
                                                    <p className="card-text fw-bold ms-3">{book.quantityDetail}</p>
                                                    <p className="card-text ms-3">und{book.quantityDetail > 1 ? "s" : ""}</p>
                                                </div>
                                                {/* <OverlayTrigger trigger="click" placement="right" overlay={
                                                    <Popover className="custom-popover">
                                                        <Popover.Body>
                                                            <DetailByBook id_book={book.id_book}/>
                                                        </Popover.Body>
                                                    </Popover>
                                                }> */}
                                                    <p  className="text-reset text-decoration-none fw-bold" tabIndex="0" href="#">{book.titleBook}</p>
                                                {/* </OverlayTrigger>  */}
                                             
                                                <div className="d-flex ">
                                                <p className="card-text fw-bold ms-3">${book.priceBook}</p>
                                                <p className="card-text ms-3">c/u</p>
                                                </div>
                                            </div>
                                            {index !== order.orderDetails.length - 1 && <hr/>}
                                        </div>
                                        ))}
                                        </td>
                                        <td>{order.quantity} und{order.quantity > 1 ? 's' : ''}</td>
                                        <td>${order.price_total}</td>
                                        <td>{order.state}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
        </Container>
    )
}

export default Orders;