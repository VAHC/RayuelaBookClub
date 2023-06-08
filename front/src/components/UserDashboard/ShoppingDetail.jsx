import React from "react"

const ShoppingDetail = ({orderDetails}) => {

    return (
        <div className="row">
          <p>Mi compra...</p>
          {orderDetails &&
            orderDetails.map((book, index) => (
              <div id={book.id_book} key={index} className="col-12">
                <h6 className="mr-10">
                  {book.quantityDetail} <span className="small">und{book.quantityDetail > 1 ? "s" : ""}</span>{"   "}
                  {book.titleBook} {"   "} ${book.priceBook}<span className="small">c/u</span>
                </h6>
              </div>
            ))}
        </div>
      );

}

export default ShoppingDetail