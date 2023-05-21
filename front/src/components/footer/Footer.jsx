import React from 'react'

export const Footer = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark nav-fill p-1">
        <div className="container-fluid">
          <span className="navbar-text p-1">
            Contactanos
            <a href='http://mail.google.com/'><i className="bi bi-envelope p-1"></i></a>
            rayuela@email.com
          </span>
          <span className="navbar-text p-1">
           Seguinos
           <a href='https://www.facebook.com/'><i className="bi bi-facebook p-1"></i></a>
           <a href='https://www.instagram.com/'><i className="bi bi-instagram p-1"></i></a>
          </span>
          <span className="navbar-text p-1">
          <i className="bi bi-info-circle p-1"></i>
            Preguntas frecuentes
          </span>
        </div>
      </nav>
    </div>
  )
}
