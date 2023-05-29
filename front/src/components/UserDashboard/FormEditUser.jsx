import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { } from "../../redux/action";

export const FormEditUser = ({user}) => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        email: "",
        phone: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        phone: "",
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
        alert("datos modificados");
    }

    return (
        <>
            <div className="row d-flex justify-content-center my-2">
                <div className="col-12 w-75 text-center">
                    <label className="form-label" htmlFor="email">Correo electrónico</label>
                    <input className="form-control"
                        type="email"
                        name="email"
                        placeholder={user.email}
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>
                <div className="row d-flex justify-content-center my-2">
                    <div className="col-12 w-75 text-center">
                        <label className="form-label" htmlFor="phone">Teléfono</label>
                        <input className="form-control"
                            type="number"
                            name="phone"
                            placeholder={user.phone}
                            value={userData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row d-flex justify-content-center my-2">
                    <div className="col-12 w-75 text-center">
                        <label className="form-label" htmlFor="email">Contraseña</label>
                        <input className="form-control"
                            type="password"
                            name="password"
                            placeholder="Nueva contraseña"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>
                </div>
                <button onClick={handleSubmit} className="btn btn-dark w-50 m-2">Guardar cambios</button>
            </div>
        </>
    )
}

const validation = (userData) => {
    const errors = {}
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = "Escribí un email válido"
    }
    if (!/\d/.test(userData.password)) {
        errors.password = "Tu contraseña debe contener al menos un número"
    }
    if (userData.password.length < 8 || userData.password.length > 10) {
        errors.password = "Tu contraseña debe tener entre 8 y 10 caracteres"
    }
    return errors
}