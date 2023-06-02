import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Menu from "./Menu";
import { Profile } from "./Profile";
import { Suscripcion } from "./suscripcion";
import MyReviewsContainer from "./myReviews/MyReviewsContainer";

const UserDashboard = () => {
    const [compoActivo, setCompoActivo] = useState("")

    const compoRender= ()=>{
        if (compoActivo === "profile") return <Profile/>
        if (compoActivo=== "reviews") return <MyReviewsContainer/>
        if (compoActivo=== "suscripcion") return <Suscripcion/> 
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="sidebar mb-4">
                    <Menu setCompoActivo={setCompoActivo} />
                </Col>
                <Col xs={10} className="dashboard-content">
                {compoRender()}
                </Col>
            </Row>
        </Container>
    );
};

export default UserDashboard;
