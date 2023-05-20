import React from 'react'

export const Suscripcion = () => {
  return (
    <div>
      <h2>¿Cómo me suscribo?</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
        <div className="col">
          <div className="card h-100">
            <img src="./images/paso1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Registrarse</h5>
              <p className="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="./images/paso2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Comprar</h5>
              <p className="card-text">Esta tarjeta tiene texto de apoyo a continuación como una introducción natural a contenido adicional.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card h-100">
            <img src="./images/paso3.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Leer y disfrutar</h5>
              <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Esta tarjeta tiene un contenido aún más largo que la primera para mostrar esa acción de igual altura.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
