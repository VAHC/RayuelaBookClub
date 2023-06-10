
import React, {useEffect} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getUserById } from '../../redux/action';

export const MiSuscripcion = () => {
//Codigo para reemplazar cuando la ruta este ok
//   const userId = useSelector((state) => state.user.id);
//   console.log(userId);
//   const user = useSelector((state) => state.userById);
//   console.log(user);
//   const dispatch = useDispatch();

//   useEffect(()=> {
//     console.log('despacha la action');
//     dispatch(getUserById(userId))
// }, [userId])

// const user = {
//   id: 1,
//   firstName: 'Noelia',
//   lastName: '',
//   email: '',
//   password: '',
//   deleted: false,
//   state: 'new',
//   suscripted: false,
//   date_suscription: null,
//   createdDB: true,
//   reviews:[],
//   shippingInformation: {
//     street_and_number: 'San Blas 2500',
//     floor_and_department: '7C',
//     city: 'CABA',
//     CP: '1416',
//     province: 'Buenos Aires'
//   }  
// }

const user = {
  id: 1,
  firstName: 'Noelia',
  lastName: '',
  email: '',
  password: '',
  deleted: false,
  state: 'new',
  suscripted: true,
  date_suscription: '06-06-2023',
  createdDB: true,
  reviews:[],
  shippingInformation: {
    street_and_number: 'San Blas 2500',
    floor_and_department: '7C',
    city: 'CABA',
    CP: '1416',
    province: 'Buenos Aires'
  }  
}

  return (
    <div>
      <h2 className="text-center">Mi suscripción</h2>
      <div className="d-flex justify-content-center my-3">
        <div className="card mb-3 d-flex justify-content-center" style={{ width: '90%' }}>
          <div className="row g-0">
            <div className="col-md-6">
              <div style={{ maxHeight: '450px', overflow: 'hidden', width: '85%'}}> {/* Contenedor para recortar la altura */}
                <img src="./images/miSuscripcion.jpg" className="img-fluid rounded-start" alt="Imagen de libros abiertos con un señalador" />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center">
              <h5 className="card-title m-3 text-center">Hola {user.firstName}!</h5>
              {!user.suscripted ? (
                <div className="align-items-center">
                  <h5>Aún no estás suscripto...</h5>
                  <h6>¡Conocé más sobre los beneficios de la <Link to={'/suscripcion'}>suscripción</Link>!</h6>
                </div>
                ) : (
                  <div className="align-items-center">
                    <div>
                      <h5>Tu suscripción comenzó el {user.date_suscription}</h5>
                      <p>Tiene una validez de un año, pasado ese plazo deberás renovarla...</p>
                    </div>
                    <hr/>
                    <div>
                      <h5>Los datos para el envio mensual son:</h5>
                        <div>
                        <p className="card-text fw-bold ms-3">Calle y número:</p>
                          <p className="card-text ms-3">{user.shippingInformation.street_and_number}</p>
                        </div>
                        {user.shippingInformation.floor_and_department ? (
                          <div>
                            <p className="card-text fw-bold ms-3">Piso y departamento</p>
                            <p className="card-text ms-3">{user.shippingInformation.floor_and_department}</p>
                          </div>
                        ) : null}
                        <div>
                          <p className="card-text fw-bold ms-3">Ciudad:</p>
                          <p className="card-text ms-3">{user.shippingInformation.city}</p>
                        </div>
                        <div>
                          <p className="card-text fw-bold ms-3">CP:</p>
                          <p className="card-text ms-3">{user.shippingInformation.CP}</p>
                        </div>
                        <div>
                          <p className="card-text fw-bold ms-3">Provincia:</p>
                          <p className="card-text ms-3">{user.shippingInformation.province}</p>
                        </div>
                    </div>
                    <hr/>
            <div>
              <p>¿Querés cancelar tu suscripción?</p>
              <button>Cancelar Suscripción</button> 
            </div>
                  </div>
                )
            }
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>¿Querés modificar tus datos o tenés alguna duda?</p>
        <p>Escribinos por mail a:  <a href='http://mail.google.com/'><i className="bi bi-envelope p-1"></i></a>rayuela@email.com</p>
      </div>
    </div>
  )
}

export default MiSuscripcion



