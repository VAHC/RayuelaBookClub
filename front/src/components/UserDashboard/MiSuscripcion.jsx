import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const MiSuscripcion = () => {
  const user = useSelector((state) => state.user)
  console.log(user);
  return (
    <div>
      <h2 className="text-center">Mi suscripción</h2>
      <div className="d-flex justify-content-center my-3">
        <div className="card mb-3 w-75 d-flex justify-content-center">
          <div className="row g-0 ">
            <div className="col-md-6">
              <img src="./images/miSuscripcion.jpg" className="img-fluid rounded-start max-heigth mw-50" alt="Imagen de libros abiertos con un señalador" />
            </div>
            <div className="col-md-6">
            <h4>si no estoy suscripto</h4>
      <h6>Aún no estás suscripto...</h6>
      <h5>¡Conocé más sobre los beneficios de la <Link to={'/suscripcion'}>suscripcion</Link>!</h5>
      <h4>si estoy suscripto</h4>
      <h6>fecha de la suscripción</h6>
      <h5>Datos de envio</h5>
      <h6> street_and_number - floor_and_department - city - CP - province</h6>
      <p>¿querés cancelar tu suscripcion?</p>
      <button>Cancelar Suscripcion</button> 
            </div>
          </div>
        </div>
      </div>
      <p>¿Querés modificar tus datos o tenés alguna duda?</p>
      <p>Escribinos por mail a:  <a href='http://mail.google.com/'><i className="bi bi-envelope p-1"></i></a>rayuela@email.com</p>
    </div>
  )
}




