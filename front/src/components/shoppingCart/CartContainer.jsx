import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DetailTotalCart from "./DetailTotalCart";
import { totalByitem } from "./helpers";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { totalPrice, totalItems } from "./helpers";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeItems, emptyCart, fillCart } from "../../redux/action";

const CartContainer = () => {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
 
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("items"))
        // console.log(items);
        if(items) {
            dispatch(fillCart(items))
        } 
    }, [])

    const incrementQuantityHandler = (item) => {
        dispatch(addToCart(item))
        localStorage.setItem("items", JSON.stringify(cart))
    }

    const decrementQuantityHandler = (item) => {
        if(cart.length === 1 && item.quantity === 1) {
            // console.log('vacio carrito2');
            localStorage.removeItem('items')
        }
        dispatch(removeFromCart(item))
        localStorage.setItem("items", JSON.stringify(cart))
    }

    const cleanCartHandler = (e) => {
        // console.log('vacio carrito');
        dispatch(emptyCart())
        localStorage.removeItem('items')
    }

    const deleteItemHandler = (id) => {
        // console.log('borro item');
        dispatch(removeItems(id))
        localStorage.setItem("items", JSON.stringify(cart))
    }
 
    return (
        <>
            <nav className="navbar navbar-light bg-dark mb-3">
                <div style={{ display: 'flex', justifyContent: 'space-evenly', }} className="container-fluid">
                    <h3 className="text-light">Tu carrito</h3>
                    <Link to="/catalogo"><button className="btn btn-light">Seguir comprando</button></Link>
                    <button className="btn btn-light" onClick={cleanCartHandler}>Vaciar carrito</button>
                    <div>
                        <i className="bi bi-cart text-light fs-3"></i>
                        <span className="badge bg-danger ms-1 rounded-circle">{totalItems(cart)}</span>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Container>
                            <Row>
                                <Col>
                                    <Table striped bordered hover>
                                        <tbody>
                                            {!cart.length ? (
                                                <tr>
                                                    <td colSpan="3">
                                                        <div>
                                                            <h6>Tu carrito está vacío...</h6>
                                                            <h5>¡Agregá tu primer libro o suscribite!</h5>
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
                                                                        <Button variant="primary" className="btn btn-sm me-2" onClick={() =>{decrementQuantityHandler(item)}}><i className="bi bi-arrow-down-square" /></Button>
                                                                        <span className="me-2">{item.quantity}</span>
                                                                        <Button variant="primary" className="btn btn-sm me-2" onClick={() =>{incrementQuantityHandler(item)}}><i className="bi bi-arrow-up-square" /></Button>
                                                                    </div>
                                                                    <Button variant="danger" size="sm" onClick={(id) => {deleteItemHandler(item.id)}}><i className="bi bi-trash3" /></Button>
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
                        <hr />
                        {!cart.length ? (<h5>Aún no agregaste nada al carrito</h5>) : (
                            <div>
                                {cart.map((detail, index) => (
                                    <DetailTotalCart
                                        key={index}
                                        id={detail.id}
                                        title={detail.title}
                                        price={detail.price}
                                        quantity={detail.quantity}
                                        totalByItem={totalByitem(detail.quantity, detail.price)}
                                    />
                                ))}
                            </div>
                        )}
                        <hr />
                        <h5>Total: ${totalPrice(cart)}.00</h5>
                        <hr />
                        <button className="btn btn-secondary mb-2">Confirmar carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartContainer