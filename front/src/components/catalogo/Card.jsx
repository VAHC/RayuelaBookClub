import React from "react";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch } from "react-redux";
import { setDetail } from "../../redux/action";

const bookCard = ({book}) => {

  const dispatch = useDispatch()
const handleClick = ()=> {dispatch(setDetail(book))}

  const renderTooltip = () => (
    <Tooltip>
      <span role="img" aria-label="star">
        ⭐⭐⭐⭐⭐
      </span>
      <div
        style={{
          fontSize: "20px",
          color: "white",
          marginBottom: "10px",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "5px",
        }}
      >
        {book.title}
      </div>
      <div
        style={{
          fontSize: "20px",
          color: "white",
          marginBottom: "10px",
        }}
      >
        $ {book.price} .-
      </div>
    </Tooltip>
  );

  return (
    <Card style={{ width: "11rem" }} onClick={handleClick}>
      <Card.Img variant="top" src={book.image} />
      <OverlayTrigger placement="top" overlay={renderTooltip()}>
        <Card.ImgOverlay
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              visibility: "hidden",
              background: "rgba(0, 0, 0, 0.5)",
              padding: "5px",
            }}
          >
            {book.title}
          </div>
        </Card.ImgOverlay>
      </OverlayTrigger>
    </Card>
  );
};

export default bookCard;

