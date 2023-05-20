import React from 'react'

export const Footer = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark nav-fill p-1">
        <div class="container-fluid">
          <span class="navbar-text p-1">
            Contactanos
            <i class="bi bi-envelope p-1"></i>
            rayuela@email.com
          </span>
          <span class="navbar-text p-1">
           Seguinos
           <a href='https://www.facebook.com/'><i class="bi bi-facebook p-1"></i></a>
           <a href='https://www.instagram.com/'><i class="bi bi-instagram p-1"></i></a>
          </span>
          <span class="navbar-text p-1">
          <i class="bi bi-info-circle p-1"></i>
            Preguntas frecuentes
          </span>
        </div>
      </nav>
    </div>
  )
}
