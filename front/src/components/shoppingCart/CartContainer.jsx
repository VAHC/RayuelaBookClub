import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DetailTotalCart from "./DetailTotalCart";
import { FormAddress } from "./FormAddress";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeItems, emptyCart, fillCart } from "../../redux/action";
import { totalByitem, totalItems, totalPrice } from './helpers';
import axios from "axios";
import { URL_Railway } from "../../../ruta";

const CartContainer = () => {

    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Estado local para mostrar o no el modal y funciones para setearlo y cerrarlo
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(prevShowModal => !prevShowModal)
    }

    const onClose = () => {
        toggleModal()
    }

    //Estado local para armar el objeto de la orden
    const [order, setOrder] = useState([])

    //Estado local para mostrar o no el formulario de domicilio
    const [showForm, setShowForm] = useState(false)

    //Estado local para cambiar el botón cuando se confirma la orden
    const [buttonSuccess, setButtonSuccess] = useState(false)

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("items"))
        if (items) {
            dispatch(fillCart(items))
        }
    }, [])

    const incrementQuantityHandler = (item) => {
        dispatch(addToCart(item))
    }

    const decrementQuantityHandler = (item) => {
        dispatch(removeFromCart(item));
    }

    const cleanCartHandler = () => {
        dispatch(emptyCart())
        localStorage.removeItem('items')
    }

    const deleteItemHandler = (id) => {
        dispatch(removeItems(id))
    }

    //Cuando se confirma la orden consulta si está logueado para continuar
    const handleConfirmCart = () => {
        user ?
            toggleModal()
            : navigate("/ingresar")
    }

    //Armo el array de la orden que se manda al formulario para terminar de armar el array que se despacha
    const handleConfirmOrder = () => {
        const cartOrder = cart.map(i => {
            return {
                ...i,
                id_user: user.id
            }
        })
        setButtonSuccess(true)
        setOrder(cartOrder)
        setShowForm(true)
    }

    const mpHandler = async () => {   

      const cartItems =  {
          title: 'Detalle de tu compra',
          quantity: 1,
          price: totalPrice(cart),
        };

      console.log(cartItems);

      await axios.post(URL_Railway+'/mercadopago/payment', cartItems)
      .then((res) => 
      window.location.href = res.data.response.body.init_point
      )
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
                                                                        <Button variant="primary" className="btn btn-sm me-2" onClick={() => { decrementQuantityHandler(item) }}><i className="bi bi-arrow-down-square" /></Button>
                                                                        <span className="me-2">{item.quantity}</span>
                                                                        <Button variant="primary" className="btn btn-sm me-2" onClick={() => { incrementQuantityHandler(item) }}><i className="bi bi-arrow-up-square" /></Button>
                                                                    </div>
                                                                    <Button variant="danger" size="sm" onClick={() => { deleteItemHandler(item.id) }}><i className="bi bi-trash3" /></Button>
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
                        <button onClick={handleConfirmCart} className="btn btn-dark mb-2">Confirmar carrito</button>
                    </div>
                </div>
                {showModal && <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmá tu orden</h5>
                                <button onClick={onClose} className="btn btn-dark">Volver</button>
                            </div>
                            <div>
                                <div className="m-3">
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
                                <hr />
                                <h5 className="ms-3">Total: ${totalPrice(cart)}.00</h5>
                                <hr />
                                <div className="d-flex justify-content-center">
                                    {!buttonSuccess ?
                                        <button onClick={handleConfirmOrder} className="btn btn-outline-success mb-2">Confirmar orden</button>
                                        : <button className="btn btn-outline-success mb-2 disabled">Orden confirmada</button>}
                                </div>
                            </div>
                            {showForm && <FormAddress order={order} />}
                            <div className="d-flex justify-content-center">
                            <button onClick={mpHandler} className="btn btn-success my-3 w-50">Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default CartContainer