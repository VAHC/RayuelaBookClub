import React, { useEffect } from "react";
import {useState} from "react";
import DetailTotalCart from "./DetailTotalCart"
import { totalByitem } from "./helpers";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

const CartContainer = () => {
   const [cart, setCart] = useState([
        {id: 1,
        title: 'Rayuela',
        authors: ['Julio Cortazar'],
        price: 10,
        quantity: 1
    },
    {   id: 2,
        title: 'Rayuela',
        authors: ['Julio Cortazar', 'Ernesto Sabato'],
        price: 20,
        quantity: 1
    },
    {   id: 3,
        title: 'Rayuela',
        authors: ['Julio Cortazar'],
        price: 30,
        quantity: 1
    },
    {   id: 4,
        title: 'Rayuela',
        authors: ['Julio Cortazar', 'Ernesto Sabato'],
        price: 40,
        quantity: 1
    }])

    const totalPrice = (cart) => {
        const total = cart.reduce((acumulador, book) => {
            return acumulador + totalByitem(book.quantity, book.price);
          }, 0);
        return total
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <Container>
                        <Row>
                            <Col>
                                <h3>Tu Carrito</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table striped bordered hover>
                                    <tbody>
                                        {!cart.length ? (
                                            <tr>
                                                <td colSpan="3">
                                                    <div>
                                                        <h6>Tu carrito está vacío...</h6>
                                                        <h5>Agrega tu primer libro o suscríbete!</h5>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            cart.map((item, index) => (
                                                <tr id={item.id} key={index}>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <span>{item.title}</span>
                                                                <br />
                                                                <span>{item.authors}</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="d-flex align-items-center">
                                                                    <Button variant="primary" className="btn btn-sm me-2"><i className="bi bi-arrow-down-square" /></Button>
                                                                    <span className="me-2">{item.quantity}</span>
                                                                    <Button variant="primary" className="btn btn-sm me-2"><i className="bi bi-arrow-up-square" /></Button>
                                                                </div>
                                                                <Button variant="danger" size="sm"><i className="bi bi-trash3" /></Button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>    
                </div>
                <div className="col-4">
                    <h4>Tu compra</h4>
                    <hr/>
                    {!cart.length ? (<h5>Aún no agregaste nada al carrito</h5>) : (
                        <div>
                            {cart.map((detail, index) => (
                                <DetailTotalCart 
                                    key={index}
                                    id={detail.id}
                                    title={detail.title}
                                    quantity={detail.quantity}
                                    totalByItem={totalByitem(detail.quantity, detail.price)}
                                />
                            ))}
                        </div>
                    )}
                    <hr/>
                    <h5>Total: ${totalPrice(cart)}.00</h5>
                    <hr/>
                    <button className="btn btn-secondary mb-2">Confirmar carrito</button>
                </div>
            </div>
        </div>
    )
}

export default CartContainer





{/* <h3>Tu carrito</h3>
                {!cart.length ? (
                    <div>
                        <h4>Tu carrito esta vacio</h4>
                        <h5>Agrega tu primer libro o suscribite</h5>
                    </div>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <ItemCart
                                key={index}
                                id={item.id}
                                // image={item.image}
                                title={item.title}
                                authors={item.authors}
                                quantity={item.quantity}
                                price={item.price}
                            />
                        ))}
                    </div>
                )}
                </div>  */}