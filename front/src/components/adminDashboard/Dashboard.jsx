import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import Inventario from "./Inventario";
import Orders from "./Orders";
import Users  from "./Users";

const Dashboard = () => {
const [compoActivo, setCompoActivo]= useState("inventario")

const compoRender = ()=>{
    if(compoActivo === "inventario") return <Inventario/>;
    if(compoActivo === "usuarios")return <Users/>;
    if(compoActivo === "pedidos")return <Orders/>;
}

    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="sidebar mb-4">
                    <Menu setCompoActivo={setCompoActivo} CompoActivo={compoActivo} />
                </Col>
                <Col xs={10} className="dashboard-content">
                    {compoRender()}
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
