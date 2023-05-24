import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="sidebar mb-4">
          <Sidebar />
        </Col>
        <Col xs={10} className="dashboard-content">
          <Row className="card-row justify-content-center">
            <Col xs={10} md={6} className="my-3">
              <Card className="dashboard-card shadow">
                <Card.Body>
                  <Card.Title>Ventas Mensuales</Card.Title>
                  {/* Aquí puedes agregar el contenido de la card de ventas mensuales */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={6} className="my-3">
              <Card className="dashboard-card shadow">
                <Card.Body>
                  <Card.Title>Ventas del Día</Card.Title>
                  {/* Aquí puedes agregar el contenido de la card de ventas del día */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={6} className="my-3">
              <Card className="dashboard-card shadow">
                <Card.Body>
                  <Card.Title>Trafico en la Página</Card.Title>
                  {/* Aquí puedes agregar el contenido de la card de tráfico en la página */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={6} className="my-3">
              <Card className="dashboard-card shadow">
                <Card.Body>
                  <Card.Title>Cantidad de Usuarios</Card.Title>
                  {/* Aquí puedes agregar el contenido de la card de cantidad de usuarios */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Aquí puedes agregar las demás secciones del dashboard */}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
