import React from "react"
import {  Accordion } from 'react-bootstrap';
import DetailByBook from './DetailByBook';

const ShoppingDetail = ({orderDetails}) => {

  return (
    <div className="row">
      <p>Mi compra...</p>
      {orderDetails &&
        orderDetails.map((book, index) => (
          <div id={book.id_book} key={index} className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h6 className="mr-10">{book.quantityDetail}</h6>
                <span className="small">und{book.quantityDetail > 1 ? "s" : ""}</span>
              </div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{book.titleBook}</Accordion.Header>
                  <Accordion.Body>
                    <DetailByBook id_book={book.id_book}/>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="d-flex align-items-center">
                <h6>${book.priceBook}</h6>
                <span className="small">c/u</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default ShoppingDetail