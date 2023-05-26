import React from 'react';

export const Registro = () => {
    return (
        <div>
            <h2 className='text-center fs-1'>Registro</h2>
            <div className="d-flex justify-content-center m-2">
                <form className="row g-3 w-75 ">
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Nombre</label>
                        <input type="text" className="form-control" required />
                    </div>
                    
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Apellido</label>
                        <input type="text" className="form-control" required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Correo electrónico</label>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Ciudad</label>
                        <input type="text" className="form-control" id="validationDefault03" required />
                    </div>
                    
                    <div className="col-md-3">
                        <label htmlFor="" className="form-label">Código postal</label>
                        <input type="text" className="form-control" id="validationDefault05" required />
                    </div>
                    
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-dark" type="submit">Registrarme</button>
                    </div>
                </form>
            </div>
        </div>
    )
}