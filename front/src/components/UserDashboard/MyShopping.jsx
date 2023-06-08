import React from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import ShoppingDetail from "./ShoppingDetail";
import {Container, Row, Col, Table, Popover, OverlayTrigger} from "react-bootstrap"; 
import { useSelector, useDispatch } from "react-redux";
import { getAllShopping } from "../../redux/action";

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
                                {userOrders.map((order, index) => (
                                    <tr id={order.id} key={index}>
                                        <td>{icons(order.state)}</td>
                                        <td>{order.date}</td>
                                        <td>
                                        <OverlayTrigger trigger="click" placement="right" overlay={
                                            <Popover>
                                                <Popover.Body>
                                                    <ShoppingDetail orderDetails={order.orderDetails} />
                                                </Popover.Body>
                                            </Popover>
                                        }>
                                            <a  className="text-decoration-none" tabIndex="0" href="#">Mi compra...</a>
                                            {/* <a  className="text-decoration-none" tabindex="0" href="#">TMi compra...<i className="bi bi-search"/></a> */}
                                        </OverlayTrigger>
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
        </Container>
    );

}

export default MyShopping