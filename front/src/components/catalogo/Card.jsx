import React from "react";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const bookCard = ({ image, price, title }) => {
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
        {title}
      </div>
      <div
        style={{
          fontSize: "20px",
          color: "white",
          marginBottom: "10px",
        }}
      >
        $ {price} .-
      </div>
    </Tooltip>
  );

  return (
    <Card style={{ width: "11rem" }}>
      <Card.Img variant="top" src={image} />
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
            {title}
          </div>
        </Card.ImgOverlay>
      </OverlayTrigger>
    </Card>
  );
};

export default bookCard;

