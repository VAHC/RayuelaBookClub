import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Menu from "./Menu";
import MyReviewsContainer from "./myReviews/MyReviewsContainer";
// import PanelControl from "./PanelControl";

const UserDashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="sidebar mb-4">
                    {/* <PanelControl /> */}
                    <Menu />
                </Col>
                <Col xs={10} className="dashboard-content">
                    <MyReviewsContainer />
                </Col>
            </Row>
        </Container>
    );
};

export default UserDashboard;
