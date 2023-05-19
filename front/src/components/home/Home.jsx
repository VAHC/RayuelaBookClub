import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/01.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/02.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/03.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
      <img src="./images/04.jpg" className="d-block w-100" alt="..." />
      <Link to="/suscripcion"><button>Suscripcion</button></Link>
      </div>
      <div>
      <img src="./images/05.jpg" className="d-block w-100" alt="..." />
      <Link to="/catalogo"><button>Catalogo</button></Link>
      </div>
    </div>
  )
}