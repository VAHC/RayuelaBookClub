import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";

const Usuarios = () => {

    const usuarios = async () => {
        
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="sidebar mb-4">
                    <Menu />
                </Col>
                <Col xs={10} className="dashboard-content">
                    Esto sería la parte de usuarios
                </Col>
            </Row>
        </Container>
    );
};

export default Usuarios;