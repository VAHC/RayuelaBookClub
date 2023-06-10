import React from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import DetailByBook from "./DetailByBook";
import {Container, Row, Col, Table, Popover, OverlayTrigger} from "react-bootstrap"; 
import { useSelector, useDispatch } from "react-redux";
import { getAllShopping } from "../../redux/action";
import './customStyles.css';

const MyShopping = () => {
//     //CODIGO CUANDO LA RUTA USER_BY_ID INCLUYA ORDERS
    const orders = useSelector((state) => state.allOrders);
    const userId = useSelector((state) => state.user.id)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllShopping())
    }, [])

    const userOrders = orders.filter(order => order.id_user === userId)
    console.log(userOrders);

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
                    <h2>Mis compras</h2>
                </Col>
            </Row>

            {!userOrders.length ? (
                <div>
                    <h6>Aún no realizaste ninguna compra...</h6>
                    <h5>¡Dirigite a la <Link to={'/catalogo'} className="text-decoration-none">tienda</Link> y realiza una!</h5>
                </div>
            ) : (
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Fecha</th>
                                    <th>Detalle de la compra</th>
                                    <th>Total de items</th>
                                    <th>Precio total</th>
                                    <th>Estado de la compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userOrders && userOrders.map((order, index) => (
                                    <tr id={order.id} key={index}>
                                        <td>{icons(order.state)}</td>
                                        <td>{order.date}</td>
                                        <td>
                                        {order.orderDetails && order.orderDetails.map((book, index) => (
                                            <div id={book.id_book} key={index} className="col-12">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <h6 className="mr-10">{book.quantityDetail}</h6>
                                                    <span className="small">und{book.quantityDetail > 1 ? "s" : ""}</span>
                                                </div>
                                                <OverlayTrigger trigger="click" placement="right" overlay={
                                                    <Popover className="custom-popover">
                                                        <Popover.Body>
                                                            <DetailByBook id_book={book.id_book}/>
                                                        </Popover.Body>
                                                    </Popover>
                                                }>
                                                    <a  className="text-decoration-none" tabIndex="0" href="#">{book.titleBook}</a>
                                                </OverlayTrigger> 
                                             
                                                <div className="d-flex align-items-center">
                                                    <h6>${book.priceBook}</h6>
                                                    <span className="small">c/u</span>
                                                </div>
                                            </div>
                                            {(order.orderDetails.length > 1) ? <hr/> : null}
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
            )}
            <div className="d-flex">
                <p>¿Tenés alguna duda sobre tus compras?</p>
                <p>Escribinos por mail a:  <a href='http://mail.google.com/'><i className="bi bi-envelope p-1"></i></a>rayuela@email.com</p>
            </div>
        </Container>
    );

}

export default MyShopping