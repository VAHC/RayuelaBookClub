import React from "react";
import {useState} from "react";
import ItemCart from "./ItemCart";
import DetailTotalCart from "./DetailTotalCart"

const CartContainer = () => {
    const [cart, setCart] = useState([])

    const totalPrice = (cart) => {
        const total = cart.reduce((acumulador, book) => {
            return acumulador + (book.quantity * book.price);
          }, 0);
        return total
    }


    return (
        <>
            <div>
                <h3>Tu carrito</h3>
                {!cart.length ? (
                    <div>
                        <h4>Tu carrito esta vacio</h4>
                        <h5>Agrega tu primer libro o suscribite</h5>
                    </div>
                ) : (
                    <div>
                        {cart.map((item, index) => {
                            <ItemCart
                                key={index}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                authors={item.authors}
                                quantity={item.quantity}
                                price={item.price}

                            />
                        })}
                    </div>
                )}
            </div>
            <div>
                <h3>Tu compra</h3>
                <hr/>
                {!cart.length ? (<h5>Aún no agregaste nada al carrito</h5>) : (
                    <div>
                        {cart.map((detail, index) => {
                            <DetailTotalCart 
                            key={index}
                            id={item.id}
                            title={detail.title}
                            quantity={detail.quantity}
                            totalByItem={totalByitem(detail.quantity, detail.price)}
                            />
                        })}
                    </div>
                )}
                <hr/>
                <h4>Total: {totalPrice(cart)}</h4>
                <hr/>
                <button>Confirmar carrito</button>
            </div>
        </>
    )
}

export default CartContainer