import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/action";

export const FormAddress = ({user}) => {

    const dispatch = useDispatch();
    
    //Estado local para los inputs del form
    const [inputs, setInputs] = useState({
        calle: "",
        piso: "",
        ciudad: "",
        CP: 0,
        provincia: ""
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
        //dispatch(createUser({
        //     ...inputs,
        //     userId: user.id
        // }))
    }

    return (
        <>
            <h6 className="text-center my-2 fw-bold">¿Dónde querés recibir tu compra?</h6>
            <div className="d-flex justify-content-center mx-4">
                <form className="row g-2 md-2 w-100" onSubmit={handleSubmit}>
                    <div className="col-md-8">
                        <label htmlFor="calle" className="form-label">Calle y número: *</label>
                        <input type="text" className="form-control" name="calle" value={inputs.calle} onChange={handleInputChange} required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="piso" className="form-label">Piso y depto:</label>
                        <input type="text" className="form-control" name="piso" value={inputs.piso} onChange={handleInputChange} required />
                    </div>

                    <div className="col-md-8">
                        <label htmlFor="ciudad" className="form-label">Ciudad: *</label>
                        <input type="text" className="form-control" name="ciudad" value={inputs.ciudad} onChange={handleInputChange} required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="CP" className="form-label">Código postal: *</label>
                        <input type="number" maxLength="4" className="form-control" name="CP" value={inputs.CP} onChange={handleInputChange} required />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="provincia" className="form-label">Provincia *</label>
                        <input type="text" className="form-control" name="provincia" value={inputs.provincia} onChange={handleInputChange} />
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
    if (!inputs.calle || !inputs.ciudad || !inputs.CP || !inputs.provincia) {
        error = "Debés completar los campos obligatorios marcados con * "
    }
    return error
}