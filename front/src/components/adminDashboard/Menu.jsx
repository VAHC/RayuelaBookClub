import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    // <Nav variant="pills" className="flex-column sidebar shadow">
    //   {/* <Nav.Item className="sidebar-item">
    //     <Nav.Link  href="#panel">Panel de control</Nav.Link>
    //   </Nav.Item> */}
    //   <Nav.Item className="sidebar-item">
    //     <Nav.Link href="#inventario">Inventario</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item className="sidebar-item">
    //     <Nav.Link to="/usuarios">Usuarios</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item className="sidebar-item">
    //     <Nav.Link href="#clientes">Pedidos</Nav.Link>
    //   </Nav.Item>
    //   {/* <Nav.Item className="sidebar-item">
    //     <Nav.Link href="#estadisticas">Estadísticas</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item className="sidebar-item">
    //     <Nav.Link href="#configuracion">Configuración</Nav.Link>
    //   </Nav.Item> */}
    // </Nav>

    <div className="d-flex align-items-start">
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <NavLink exact className="nav-link" activeClassName="active" id="v-pills-home-tab" to="/admindashboard" role="tab" aria-controls="v-pills-home" aria-selected="true">Panel de control</NavLink>
        <NavLink exact className="nav-link" activeClassName="active" id="v-pills-profile-tab" to="/admindashboard/inventario" role="tab" aria-controls="v-pills-profile" aria-selected="false">Inventario</NavLink>
        <NavLink exact className="nav-link" activeClassName="active" id="v-pills-messages-tab" to="/admindashboard/usuarios" role="tab" aria-controls="v-pills-messages" aria-selected="false">Usuarios</NavLink>
        <NavLink exact className="nav-link" activeClassName="active" id="v-pills-settings-tab" to="/admindashboard/pedidos" role="tab" aria-controls="v-pills-settings" aria-selected="false">Pedidos</NavLink>
      </div>
      {/* <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"></div>
        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"></div>
        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"></div>
        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"></div>
      </div> */}
    </div>
  );
};

export default Menu;