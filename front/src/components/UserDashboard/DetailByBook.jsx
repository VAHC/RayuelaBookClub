import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { getBookById } from '../../redux/action';
import { Card, Row, Col } from "react-bootstrap";

const DetailByBook = ({id_book}) => {
    const dispatch = useDispatch();
    console.log(id_book);
    
    useEffect(() => {
        dispatch(getBookById(id_book))
    }, [id_book])
    
    const book = useSelector((state) => state.bookById);
    console.log(book);

    const qualificationObtained = (book) => {
        const reviews = book.reviews;
        if (reviews && Array.isArray(reviews) && reviews.length > 0) {
          const notDeletedReviews = reviews.filter((review) => !review.deleted);
          if (notDeletedReviews.length > 0) {
            let sum = 0;
            for (let i = 0; i < notDeletedReviews.length; i++) {
              sum += notDeletedReviews[i].qualification;
            }
            let average = sum / notDeletedReviews.length;
            return Math.round(average);
          }
        }
        return 0; // Valor predeterminado si no hay reviews o no es un array válido
      }

       console.log(qualificationObtained(book));
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          const starIcon = i <= rating ? <i key={i} className="bi bi-star-fill" /> : <i key={i} className="bi bi-star"/>;
          stars.push(starIcon);
        }
        return stars;
    };
    
    return (
        <div>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body className="d-flex flex-column justify-content-evenly">
              <div className="row">
                <div className="col-8">
                  <h5 style={{ marginRight: "10px", maxWidth: "80%" }}>
                    {book.title}
                  </h5>
                </div>
                <div className="col-4">
                  <div>{renderStars(qualificationObtained(book))}</div>
                </div>
              </div>
              <Row className="mt-4"> {/* Agrega la clase de margen superior */}
                <Col>
                  <Card.Subtitle className="text-muted">Autor</Card.Subtitle>
                  {book.authors && book.authors.map((author, index) => (
                    <Card.Text id={author.id} key={index} className="mb-2"> {/* Agrega la clase de margen inferior */}
                      {author}
                    </Card.Text>
                  ))}
                </Col>
                <Col>
                  <Card.Subtitle className="text-muted">Género</Card.Subtitle>
                  {book.genders && book.genders.map((genre, index) => (
                    <Card.Text id={genre.id} key={index} className="mb-2"> {/* Agrega la clase de margen inferior */}
                      {genre}
                    </Card.Text>
                  ))}
                </Col>
              </Row>
              <Card.Text style={{ overflow: "auto", marginTop: "20px", height: "200px" }}> {/* Ajusta el margen superior */}
                {book.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
}

export default DetailByBook