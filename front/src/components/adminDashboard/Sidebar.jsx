import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav variant="pills" className="flex-column sidebar shadow">
      <Nav.Item className="sidebar-item">
        <Nav.Link  href="#inicio">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item className="sidebar-item">
        <Nav.Link href="#libros">Libros</Nav.Link>
      </Nav.Item>
      <Nav.Item className="sidebar-item">
        <Nav.Link href="#pedidos">Pedidos</Nav.Link>
      </Nav.Item>
      <Nav.Item className="sidebar-item">
        <Nav.Link href="#clientes">Clientes</Nav.Link>
      </Nav.Item>
      <Nav.Item className="sidebar-item">
        <Nav.Link href="#estadisticas">Estadísticas</Nav.Link>
      </Nav.Item>
      <Nav.Item className="sidebar-item">
        <Nav.Link href="#configuracion">Configuración</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
