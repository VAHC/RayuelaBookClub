import React from "react";
import {Link} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Table,
} from "react-bootstrap";


const MyShopping = () => {
const orders = [
    { 
        id : 1,
        date : '05/05/23, 14:30',
        orderDetail: [{title:'Rayuela', quantity: 1, price: 100}, {title: 'El principito', quantity: 2, price: 50}],
        quantity: 3,
        price_total: '200,00',
        state: 'Completed',
        deleted: false
    }, 
    { 
        id : 2,
        date : '06/06/23, 18:50',
        orderDetail: [{title:'Rayuela', quantity: 2, price: 100}, {title: 'El principito', quantity: 4, price: 50}],
        quantity: 6,
        price_total: '400,00',
        state: 'Pending', 
        deleted: false
    },
]

    return (
        <Container className="min-vh-100">
            <Row>
                <Col>
                    <h1>Mis compras</h1>
                </Col>
            </Row>

            {!orders.length ? (
                <div>
                    <h6>Aún no realizaste ninguna compra...</h6>
                    <h5>¡Dirigite a la <Link to={'/catalogo'} >tienda</Link> y realiza una!</h5>
                </div>
            ) : (
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Fecha y hora de compra</th>
                                    <th>Detalle de la compra</th>
                                    <th>Total de libros comprados</th>
                                    <th>Precio total</th>
                                    <th>Estado de la compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr id={order.id} key={index}>
                                        <td>{order.date}</td>
                                        {/* ver de ponerlo el un btn ver mas o algo similar */}
                                        {/* sera un map de orderDetail, por ahi directo en esta table, por ahi algo que se habra al hacer hover */}
                                        <td>Detalle</td>
                                        <td>{order.quantity} und</td>
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