import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className="container p-3 w-100">
        <div className="row justify-content-center">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./images/01.png" className="d-block w-100 img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block bg-light bg-opacity-25 text-dark rounded">
                    <h5 className='fs-3'>Bienvenidos a Rayuela</h5>
                    <p className='fs-5'>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="./images/02.png" className="d-block w-100 img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block bg-light bg-opacity-25 text-dark rounded">
                    <h5 className='fs-3'>¿Qué es Rayuela?</h5>
                    <p className='fs-5'>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="./images/03.png" className="d-block w-100 img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block bg-light bg-opacity-25 text-dark rounded">
                    <h5 className='fs-3'>Third slide label</h5>
                    <p className='fs-5'>Some representative placeholder content for the first slide.</p>
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
        </div>
      </div>
      <div className='container p-3'>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title fs-4 fw-bold text-secondary">Club de lectores</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div className="position-relative">
                  <img src="./images/05.jpg" className="d-block w-100" alt="..." />
                  <Link to="/suscripcion"><button className="btn btn-dark btn-lg position-absolute bottom-0 start-50 translate-middle m-2">Suscribite</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title fs-4 fw-bold text-secondary">Tienda</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div className="position-relative">
                  <img src="./images/04.jpg" className="d-block w-100" alt="..." />
                  <Link to="/catalogo"><button className="btn btn-dark btn-lg position-absolute bottom-0 start-50 translate-middle m-2">Catálogo</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}