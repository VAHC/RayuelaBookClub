import React from 'react';
import { Link } from 'react-router-dom';
//import { useState } from 'react';

export const Login = () => {

    return (
        <>
            <h2 className='text-center fs-1 mb-3'>Ingresar</h2>
            <div className="d-flex justify-content-center m-2">
                <div className="card w-25 mb-5">
                    <div className="card-body">
                        <div className="mb-3 text-center">
                            <label className="form-label" htmlFor="email">Correo electrónico</label>
                            <input className="form-control"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="ejemplo@email.com"
                            />
                        </div>

                        <div className="mb-3 text-center">
                            <label className="form-label" htmlFor="password">
                                Contraseña
                            </label>
                            <input className="form-control"
                                id="password"
                                type="password"
                                name="password"
                                placeholder=""
                            />
                        </div>

                        <div className="text-center mb-3">
                            <button className="btn btn-dark w-50">Ingresar</button>
                        </div>

                        <div className="row text-center mb-3">
                            <div className="col-3">
                                <i className="bi bi-google fs-3"></i>
                            </div>
                            <div className="col-9">
                                <button className="btn btn-outline-dark">Ingresar con G-mail</button>
                            </div>
                        </div>

                        <div className="row text-center">
                            <p className="card-text">
                                ¿No tenés cuenta? <Link to="/registro">Registrate</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}