import React from "react";
// import { useEffect } from "react";
import {Link} from 'react-router-dom';
import ShoppingDetail from "./ShoppingDetail";
import {Container, Row, Col, Table, Popover, OverlayTrigger} from "react-bootstrap"; 
// import { useSelector, useDispatch } from "react-redux";
// import { getShoppingByUser } from "../../redux/action";

const MyShopping = () => {
    //CODIGO CUANDO LA RUTA USER_BY_ID INCLUYA ORDERS
    // const userOrders = useSelector((state) => state.userOrders);
    // const userId = useSelector((state) => state.user.id)
    // const dispatch = useDispatch();

    // useEffect(()=> {
    //     dispatch(getShoppingByUser(userId))
    // }, [dispatch])

    //CODIGO HARDCODEADO
// const orders = []
const userOrders = [
    { 
        id : 1,
        date : '05/05/23',
        orderDetail: [{title:'Rayuela', quantity: 1, price: 100}, {title: 'El principito', quantity: 2, price: 50}],
        quantity: 3,
        price_total: '200,00',
        state: 'Completed',
        deleted: false
    }, 
    { 
        id : 2,
        date : '06/06/23',
        orderDetail: [{title:'Rayuela', quantity: 2, price: 100}, {title: 'El principito', quantity: 4, price: 50}],
        quantity: 6,
        price_total: '400,00',
        state: 'Pending', 
        deleted: false
    },
]

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
                                                    <ShoppingDetail orderDetail={order.orderDetail} />
                                                </Popover.Body>
                                            </Popover>
                                        }>
                                            <a  className="text-decoration-none" tabindex="0" href="#">Mi compra...</a>
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