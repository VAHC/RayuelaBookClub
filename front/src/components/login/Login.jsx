import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../../redux/action";

export const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    //LOGIN COMÚN
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            // Envío solicitud de inicio de sesión al backend
            const response = await fetch('http://localhost:3001/books/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            })
            const data = await response.json();
    
            // Manejo de la respuesta del backend
            if (!data.message) {
                dispatch(login(data))
                navigate("/")
            } else {
                // Login fallido
                alert(data.message);
                setUserData({
                    ...userData,
                    password: ""
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    //LOGIN CON GOOGLE
    const handleClick = async () => {
        window.location.href = 'http://localhost:3001/books/auth/authSocial';
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const user = urlParams.get('user');
        
        if (user) {
          const userData = JSON.parse(decodeURIComponent(user));
          console.log('Usuario autenticado:', userData);
          // Aquí puedes hacer lo que necesites con los datos del usuario autenticado
        }
      }, []);

    return (
        <>
            <h2 className='text-center fs-1 mb-3'>Ingresar</h2>
            <div className="d-flex justify-content-center m-2">
                <div className="card w-25 mb-5">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} >
                            <div className="mb-3 text-center">
                                <label className="form-label" htmlFor="email">Correo electrónico</label>
                                <input className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="ejemplo@email.com"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <p className="text-danger">{errors.email}</p>}
                            </div>

                            <div className="mb-3 text-center">
                                <label className="form-label" htmlFor="password">
                                    Contraseña
                                </label>
                                <input className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder=""
                                    value={userData.password}
                                    onChange={handleInputChange}
                                />
                                {errors.password && <p className="text-danger">{errors.password}</p>}
                            </div>

                            <div className="text-center mb-3">
                                <button className={Object.keys(errors).length === 0 ? "btn btn-dark w-50" : "btn btn-dark w-50 disabled"} type="submit" value="Save">Ingresar</button>
                            </div>
                        </form>

                        <div className="row d-flex justify-content-center">
                            <div className='col-auto text-center'>
                                <button onClick={handleClick} className="btn btn-outline-dark"><i className="bi bi-google fs-3 mx-2"></i>Ingresar con G-mail</button>
                            </div>
                        </div>

                        <div className="row text-center mt-2">
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