
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserById, cancelSuscription } from '../../redux/action';

export const MiSuscripcion = () => {
//Codigo para reemplazar cuando la ruta este ok
  const userLogin = useSelector((state) => state.user);
  console.log('userLogin ' + userLogin);
  const userId = userLogin ? user.id : null;
  console.log('userId ' + userId);
  const user = userId ? useSelector((state) => state.userById) : null;
  console.log('user ' + user);
 
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(()=> {
    console.log('despacha la action');
    dispatch(getUserById(userId))
  }, [userId])

  const cancelHandler = (userId) => {
    setShowModal(true)
    dispatch(cancelSuscription(userId))
    dispatch(getUserById(userId))
    setTimeout(() => {
      setShowModal(false)
    }, 3000);
  }

// const user = {
//   id: 1,
//   firstName: 'Noelia',
//   lastName: '',
//   email: '',
//   password: '',
//   deleted: false,
//   state: 'new',
//   suscribed: false,
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

// const user = {
//   id: 1,
//   firstName: 'Noelia',
//   lastName: '',
//   email: '',
//   password: '',
//   deleted: false,
//   state: 'new',
//   suscribed: true,
//   date_suscription: '06-06-2023',
//   createdDB: true,
//   reviews:[],
//   orders:[ {
//     street_and_number: 'San Blas 2500',
//     floor_and_department: '',
//     city: 'CABA',
//     CP: '1416',
//     province: 'Buenos Aires'
//   },
//   {
//     street_and_number: 'San Blas 2500',
//     floor_and_department: '',
//     city: 'CABA',
//     CP: '1416',
//     province: 'Buenos Aires'
//   }]
// }

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
              {!userId && (<div className="text-center d-flex flex-column align-items-center" style={{ marginTop: '200px' }}>
                <h5>Debes ingresar para ver detalles de tu suscripcion</h5>
              </div>)}
              {/* <h5 className="card-title m-3 text-center">Hola {user.firstName}!</h5> */}
              {userId && !user.suscribed ? (
                <div className="text-center d-flex flex-column align-items-center" style={{ marginTop: '200px' }}>
                  <h5>Aún no estás suscripto...</h5>
                  <h6>¡Conocé más sobre los beneficios de la <Link to={'/suscripcion'}>suscripción</Link>!</h6>
                </div>
                ) : (userId && 
                  <div className="align-items-center">
                    <div>
                      <h5>Tu suscripción comenzó el {user.date_suscription}</h5>
                      <p>Tiene una validez de un año, pasado ese plazo deberás renovarla...</p>
                    </div>
                    <hr/>
                    <div>
                      <h5>Los datos para el envio mensual son:</h5>
                        <div className="d-flex">
                        <p className="card-text fw-bold ms-3">Calle y número:</p>
                          <p className="card-text ms-3">{user.orders[0].street_and_number}</p>
                        </div>
                        {user.orders[0].floor_and_department ? (
                          <div className="d-flex">
                            <p className="card-text fw-bold ms-3">Piso y departamento</p>
                            <p className="card-text ms-3">{user.orders[0].floor_and_department}</p>
                          </div>
                        ) : null}
                        <div className="d-flex">
                          <p className="card-text fw-bold ms-3">Ciudad:</p>
                          <p className="card-text ms-3">{user.orders[0].city}</p>
                        </div>
                        <div className="d-flex">
                          <p className="card-text fw-bold ms-3">CP:</p>
                          <p className="card-text ms-3">{user.orders[0].CP}</p>
                        </div>
                        <div className="d-flex">
                          <p className="card-text fw-bold ms-3">Provincia:</p>
                          <p className="card-text ms-3">{user.orders[0].province}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <div className="text-center d-flex flex-column align-items-center">
                        <p>¿Querés cancelar tu suscripción?</p>
                        <div className="d-flex align-items-center">
                          <button className="btn btn-dark w-100  mb-3" onClick={(userId)=> {cancelHandler(userId)}}>Cancelar Suscripción</button> 
                        </div>
                      </div>
                    </div>
                  </div>
                )
            }
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <p>¿Querés modificar tus datos o tenés alguna duda?</p>
        <p>Escribinos por mail a:  <a href='http://mail.google.com/'><i className="bi bi-envelope p-1"></i></a>rayuela@email.com</p>
      </div>
      {showModal && (
        <div className="modal" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered" style={{ marginTop: "7%" }}>
                <div className="modal-content bg-white border-4">
                    <div className="modal-body d-flex justify-content-center align-items-center">
                        <img className="w-50 p-3 h-50 d-inline-block" src='.\images\deleteReview.png' alt='reseña borrada' /> {/* Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen */}
                    </div>
                </div>
            </div>
        </div>
    )}
    </div>
  )
}

export default MiSuscripcion



