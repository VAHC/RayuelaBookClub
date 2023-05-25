import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Menu from "./Menu";
import Inventario from "./Reseñas";
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
                    <Inventario />
                </Col>
            </Row>
        </Container>
    );
};

export default UserDashboard;
