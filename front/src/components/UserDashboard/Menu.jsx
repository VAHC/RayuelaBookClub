import React from 'react';
import { Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <Nav variant="pills" className="flex-column sidebar shadow">
      <Nav.Item className="sidebar-item">
        <Nav.Link  href="#panel">Perfil</Nav.Link>
      </Nav.Item>
      <Nav.Item className="sidebar-item">
        <Nav.Link href="#reseñas">Mis Reseñas</Nav.Link>
      </Nav.Item>
      <Nav.Item className="sidebar-item">
        <Nav.Link href="#subscripcion">Mi Subscripcion</Nav.Link>
      </Nav.Item>
      <Nav.Item className="sidebar-item">
        <Nav.Link href="#configuracion">Configuración</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;