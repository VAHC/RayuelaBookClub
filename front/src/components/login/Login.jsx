import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Login = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(userData)
        console.log(errors)
        if (Object.keys(errors).length === 0) {
            alert("Funciona")
        }
    }

    return (
        <>
            <h2 className='text-center fs-1 mb-3'>Ingresar</h2>
            <div className="d-flex justify-content-center m-2">
                <div className="card w-25 mb-5">
                    <div className="card-body">
                        <form action='' method='post' onSubmit={handleSubmit}>
                            <div className="mb-3 text-center">
                                <label className="form-label" htmlFor="POST-email">Correo electrónico</label>
                                <input className="form-control"
                                    id="POST-email"
                                    type="email"
                                    name="email"
                                    placeholder="ejemplo@email.com"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <p className="text-danger">{errors.email}</p>}
                            </div>

                            <div className="mb-3 text-center">
                                <label className="form-label" htmlFor="POST-password">
                                    Contraseña
                                </label>
                                <input className="form-control"
                                    id="POST-password"
                                    type="password"
                                    name="password"
                                    placeholder=""
                                    value={userData.password}
                                    onChange={handleInputChange}
                                />
                                {errors.password && <p className="text-danger">{errors.password}</p>}
                            </div>

                            <div className="text-center mb-3">
                                <button type="submit" value="Save" className="btn btn-dark w-50">Ingresar</button>
                            </div>
                        </form>

                        <div className="row text-center mb-3">
                            <div className="col-3">
                                <i className="bi bi-google fs-3"></i>
                            </div>
                            <div className="col-9">
                                <a href="" className="btn btn-outline-dark">Ingresar con G-mail</a>
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

const validation = (userData) => {
    const errors = {}
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = "Escribí un email válido"
    }
    if (userData.password === "") {
        errors.password = "Escribí tu contraseña"
    }
    if (userData.password.length < 8 && userData.password.length >= 1) {
        errors.password = "Contraseña no válida"
    }
    return errors
}