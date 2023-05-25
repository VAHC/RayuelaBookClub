import React from 'react';
import { Link } from 'react-router-dom';

export const Registro = () => {
    return (
        <div>
            <h2 className='text-center fs-1'>Registro</h2>
            <div className="d-flex justify-content-center m-2">
                <form className="row g-2 md-2 w-75 ">
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Nombre</label>
                        <input type="text" className="form-control" required />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Apellido</label>
                        <input type="text" className="form-control" required />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Correo electrónico</label>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Confirmar correo electrónico</label>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Teléfono (opcional)</label>
                        <input type="tel" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" required />
                    </div>

                    <div className="col-12 d-flex justify-content-center m-4">
                        <button className="btn btn-dark" type="submit">Registrarme</button>
                    </div>

                    <div className="row text-center m-3 mb-5">
                        <p className="card-text">
                            ¿Ya tenés cuenta? <Link to="/ingresar">Ingresá</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}