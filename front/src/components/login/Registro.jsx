import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import validation from "./validationRegistro";
import { useDispatch } from 'react-redux';
import { createUser } from "../../redux/action";

export const Registro = () => {

    const dispatch = useDispatch();

    const [userInputs, setUserInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    })

    const [inputsConfirm, setInputsConfirm] = useState({
        emailC: "",
        passwordC: ""
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        emailConfirm: "",
        phone: "",
        password: "",
        passwordConfirm: ""
    })

    useEffect(() => {
        const validationErrors = validation(userInputs, inputsConfirm);
        setErrors(validationErrors)
    }, [userInputs, inputsConfirm])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUserInputs({
            ...userInputs,
            [name]: value
        })

        if (name === "emailC" || name === "passwordC") {
            setInputsConfirm({
                ...inputsConfirm,
                [name]: value
            })
        }
        setErrors(validation(userInputs, inputsConfirm, { [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createUser(userInputs))
        console.log(userInputs)
    }

    return (
        <div>
            <h2 className='text-center fs-1'>Registro</h2>
            <div className="d-flex justify-content-center m-2">
                <form className="row g-2 md-2 w-75" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="firstName" value={userInputs.firstName} onChange={handleInputChange} required />
                        {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control" name="lastName" value={userInputs.lastName} onChange={handleInputChange} required />
                        {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" name="email" value={userInputs.email} onChange={handleInputChange} required />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="emailC" className="form-label">Confirmar correo electrónico</label>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" name="emailC" value={inputsConfirm.emailC} onChange={handleInputChange} required />
                        </div>
                    </div>

                    <div className="col-md-6">
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>

                    <div className="col-md-6">
                        {errors.emailConfirm && <p className="text-danger">{errors.emailConfirm}</p>}
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="phone" className="form-label">Teléfono (opcional)</label>
                        <input type="tel" className="form-control" name="phone" value={userInputs.phone} onChange={handleInputChange} />
                        {errors.phone && <p className="text-danger">{errors.phone}</p>}
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" name="password" value={userInputs.password} onChange={handleInputChange} required />
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="passwordC" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" name="passwordC" value={inputsConfirm.passwordC} onChange={handleInputChange} required />
                        {errors.passwordConfirm && <p className="text-danger">{errors.passwordConfirm}</p>}
                    </div>

                    <div className="col-12 d-flex justify-content-center m-4">
                        <button className={Object.keys(errors).length === 0 ? "btn btn-dark" : "btn btn-dark disabled"} type="submit">Registrarme</button>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className='col-auto text-center'>
                            <a href="http://localhost:3001/books/auth/authSocial" className="btn btn-outline-dark"><i className="bi bi-google fs-3 mx-2"></i>Registrarme con G-mail</a>
                        </div>
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