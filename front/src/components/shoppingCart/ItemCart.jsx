import React from "react";

const ItemCart = (props) => {
    return (
        <>
            <img>{props.image}</img>
            <div>
                <h5>{props.title}</h5>
                {props.authors.map(author => {
                    <h6>{author}</h6>
                })}
            </div>
            <h4>${props.price}</h4>
            <div>
                <button><i class="bi bi-arrow-down-square"/></button>
                <span>{props.quantity}</span>
                <button><i class="bi bi-arrow-up-square"/></button>
            </div>
            <button><i className="bi bi-trash3"/></button>
        </>
    )

}

export default ItemCart