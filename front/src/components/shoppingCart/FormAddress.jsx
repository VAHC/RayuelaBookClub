import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../../redux/action";

export const FormAddress = ({order}) => {

    const dispatch = useDispatch();
    
    //Estado local para los inputs del form
    const [inputs, setInputs] = useState({
        street_and_number: "",
        floor_and_department: "",
        city: "",
        CP: 0,
        province: ""
    })

    const [error, setError] = useState("")

    const handleInputChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
        const validationResult = validation(inputs)
            setError(validationResult)
        }

    const handleSubmit = (event) => {
        event.preventDefault()
        order[0] = { ...order[0], ...inputs }
        console.log(order)
        dispatch(createOrder(order));
    }

    return (
        <>
            <h6 className="text-center my-2 fw-bold">¿Dónde querés recibir tu compra?</h6>
            <div className="d-flex justify-content-center mx-4">
                <form className="row g-2 md-2 w-100" onSubmit={handleSubmit}>
                    <div className="col-md-8">
                        <label htmlFor="street_and_number" className="form-label">Calle y número: *</label>
                        <input type="text" className="form-control" name="street_and_number" value={inputs.street_and_number} onChange={handleInputChange} required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="floor_and_department" className="form-label">Piso y depto:</label>
                        <input type="text" className="form-control" name="floor_and_department" value={inputs.floor_and_department} onChange={handleInputChange}/>
                    </div>

                    <div className="col-md-8">
                        <label htmlFor="city" className="form-label">Ciudad: *</label>
                        <input type="text" className="form-control" name="city" value={inputs.city} onChange={handleInputChange} required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="CP" className="form-label">Código postal: *</label>
                        <input type="number" maxLength="4" className="form-control" name="CP" value={inputs.CP} onChange={handleInputChange} required />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="province" className="form-label">Provincia: *</label>
                        <input type="text" className="form-control" name="province" value={inputs.province} onChange={handleInputChange} />
                        {error && <p className="text-center text-danger">{error}</p>}
                    </div>

                    <div className="col-12 d-flex justify-content-center m-1">
                        <button className={error === "" ? "btn btn-outline-success mt-2" : "btn btn-outline-success disabled mt-2"} type="submit">Confirmar domicilio</button>
                    </div>
                </form>
            </div>
        </>
    )
}

const validation = (inputs) => {
    let error = ""
    if (!inputs.street_and_number || !inputs.city || !inputs.CP || !inputs.province) {
        error = "Debés completar los campos obligatorios marcados con * "
    }
    return error
}