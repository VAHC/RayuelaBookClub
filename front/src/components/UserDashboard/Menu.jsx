import React from 'react';
import { Nav } from 'react-bootstrap';

const Menu = ({setCompoActivo}) => {

  const onClickHandler = (nombreCompo)=> {return setCompoActivo(nombreCompo)}

  return (
    <Nav variant="pills" className="flex-column sidebar shadow">
      <Nav.Item className="sidebar-item">
        <Nav.Link  onClick={()=> onClickHandler("profile")} href="#perfil">Perfil</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>onClickHandler("reviews")} className="sidebar-item">
        <Nav.Link href="#opinion">Mis opiniones</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>onClickHandler("suscripcion")} className="sidebar-item">
        <Nav.Link href="#suscripcion">Mi suscripción</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>onClickHandler("shopping")} className="sidebar-item">
        <Nav.Link href="#shopping">Mis compras</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;