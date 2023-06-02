import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import PanelControl from "./PanelControl";

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="sidebar mb-4">
                    <Menu/>
                </Col>
                <Col xs={10} className="dashboard-content">
                    <PanelControl/>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
