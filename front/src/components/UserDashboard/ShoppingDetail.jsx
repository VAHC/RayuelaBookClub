import React from "react"

const ShoppingDetail = ({orderDetail}) => {

    return (
        <div className="row">
          {orderDetail &&
            orderDetail.map((book, index) => (
              <div id={book.id} key={index} className="col-12">
                <h6 className="mr-10">
                  {book.quantity} <span className="small">und{book.quantity > 1 ? "s" : ""}</span>{"   "}
                  {book.title} {"   "} ${book.price}<span className="small">c/u</span>
                </h6>
              </div>
            ))}
        </div>
      );

}

export default ShoppingDetail