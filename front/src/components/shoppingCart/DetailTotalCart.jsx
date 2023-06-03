import React from "react";

const DetailTotalCart = (props) => {
    const totalByitem = (quantity, price) => {
       return quantity * price
    } 
    return (
        <>
            <h6>{props.title}</h6>
            <span>{props.quantity} und</span>
            <h5>${totalByitem(props.quantity, props.price)}</h5>
        </>
    )

}

export default DetailTotalCart