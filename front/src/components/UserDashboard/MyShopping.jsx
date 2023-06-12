import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import DetailByBook from "./DetailByBook";
import {Container, Row, Col, Table} from "react-bootstrap"; 
import { useSelector, useDispatch } from "react-redux";
import { getAllShopping } from "../../redux/action";
import './customStyles.css';

const MyShopping = () => {
   //CODIGO CUANDO LA RUTA USER_BY_ID INCLUYA ORDERS
    const orders = useSelector((state) => state.allOrders);
    const user = useSelector((state) => state.user)
    const userId = user ? user.id : null;
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(()=> {
        dispatch(getAllShopping())
    }, [])

    const userOrders = orders.filter(order => order.id_user === userId)

    const notSuscription = userOrders.filter(order =>
        order.orderDetails.some(detail => detail.id_book !== 58)
      );
 
    const sortOrders = notSuscription.sort((a, b) => b.id - a.id)

const icons = (state) => {
    if(state === "Created") return <i className="bi bi-pencil-square icon-size text-primary"/>
    if(state === "Pending") return <i className="bi bi-clock icon-size text-primary"/>
    if(state === "Cancelled") return <i className="bi bi-x-circle icon-size text-danger"/>
    if(state === "Completed") return <i className="bi bi-check-circle icon-size text-success"/>
};

const modalDetailHandler = (bookId) => {
    setShowModal(!showModal)
    setSelectedBook(bookId);
}

    return (
        <Container className="min-vh-100">
            <Row>
                <Col>
                    <h2 className="text-center">Mis compras</h2>
                </Col>
            </Row>
            {!userId && <div className="text-center d-flex flex-column align-items-center" style={{ marginTop: '50px' }}> 
                <h5>Debes ingresar para ver detalles de tus compras</h5>
            </div>}
            {userId && !userOrders.length ? (
                <div>
                    <h6>Aún no realizaste ninguna compra...</h6>
                    <h5>¡Dirigite a la <Link to={'/catalogo'} className="text-decoration-none">tienda</Link> y realizá una!</h5>
                </div>
            ) : ( userId &&
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
                                {sortOrders && sortOrders.map((order, index) => (
                                    <tr id={order.id} key={index}>
                                        <td>{icons(order.state)}</td>
                                        <td>{order.date}</td>
                                        <td>
                                        {order.orderDetails && order.orderDetails.map((book, index) => (
                                            <div id={book.id_book} key={index} className="col-12">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex ">
                                                    <p className="card-text fw-bold ms-3">{book.quantityDetail}</p>
                                                    <p className="card-text ms-3">und{book.quantityDetail > 1 ? "s" : ""}</p>
                                                </div>
                                                    <p  className="card-text fw-bold ms-3" >{book.titleBook}</p>
                                                <div className="d-flex ">
                                                    <p className="card-text fw-bold ms-3">${book.priceBook}</p>
                                                    <p className="card-text ms-3">c/u</p>
                                                </div>
                                            <button  className="btn btn-link border-0 bg-transparent" onClick={() => modalDetailHandler(book.id_book)}><i className="bi bi-file-richtext display-6 text-success"></i></button>
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
            )}
            <div className="d-flex">
                <p>¿Tenés alguna duda sobre tus compras? Escribinos por mail a: <a href='http://mail.google.com/'><i className="bi bi-envelope p-1"></i></a>rayuela@email.com</p>
            </div>
            {showModal && selectedBook && (
                <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <DetailByBook id_book={selectedBook} modalDetailHandler={modalDetailHandler}/>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    )
}

export default MyShopping