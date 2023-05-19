import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div>
      <Link to="/"><button>Inicio</button></Link>
      <button>Nosotros</button>
      <Link to="/suscripcion"><button>Suscribirme</button></Link>
      <Link to="/catalogo"><button>Tienda</button></Link>
      <button>Ingresar</button>
    </div>
  )
}
