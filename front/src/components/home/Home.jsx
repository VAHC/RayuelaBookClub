import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/suscripcion"><button>Suscripcion</button></Link>
      <Link to="/catalogo"><button>Catalogo</button></Link>
    </div>
  )
}