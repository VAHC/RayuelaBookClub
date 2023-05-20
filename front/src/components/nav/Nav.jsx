import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <p className="navbar-brand ms-auto mb-2 mb-lg-0 fs-4 d-flex align-items-center">
            <img src="./images/logo.png" alt="Logo" width="80" height="80" className="d-inline-block" />
            Rayuela
          </p>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link fs-4 nav-link active" aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link fs-4">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to="/suscripcion" className="nav-link fs-4">Suscribirme</Link>
              </li>
              <li className="nav-item">
                <Link to="/catalogo" className="nav-link fs-4">Tienda</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link fs-4">Ingresar</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
