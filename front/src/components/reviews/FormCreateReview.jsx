import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {postReview} from '../../redux/action';
// import validation from './validation'

const FormCreateReview = ({handleToggleForm, bookId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [number, setNumber] = useState(0); // estado que sirve para controlar las estrellas
    const [hoverStar, setHoverStar] = useState(undefined);
    // const user = useSelector((state)  => state.user) //estado que comprueba que se esta logueado

    const [input, setInput] = useState({ //estado,local para menejar los inputs
        id_book: '',
        id_user: '',
        "createdDb": '',
        deleted: '',
        title: '',
        qualification: '',
        comment: '',
    });

    // const [errors, setErrors] = useState({ //estado,local para menejar los errores
    //     // id_book: '',
    //     // id_user: '',
    //     // "createdDb": '',
    //     // deleted: '',
    //     title: '',
    //     qualification: '',
    //     comment: '',
    // });
    
    const [formComplete, setFormComplete] = useState(false); //estodo local para manejar el boton del submit y el envio de datos
    const [success, setSuccess] = useState(false); // estado local para manejar la alerta de ok

    //handler que maneja el mensaje de las star
    const handlerText = () => {
        switch(number || hoverStar) {
            case 0: 
                return 'calificar';
            case 1: 
                return 'me defraudo';
            case 2: 
                return 'no me gusto';
            case 3:
                return 'neutral';
            case 4:
                return 'me gusto';
            case 5:
                return 'me encanto';
            default:
                return 'calificar'
        }
    }
        //handler que maneja el estado de los inputs
    const inputHandler = (e) => {
        setInput({
            ...input,
            id_book: bookId,
            // id_user: user.id,
            id_user: 1,
            "createdDb": true,
            deleted: false,
            qualification: number,
            [e.target.name] : e.target.value
        });
        // setErrors(validation({
        //     ...input,
        //     [e.target.name]: e.target.value
        // }));
    };
            //useEffect que escucha los estados locales input y errors para setear el estado FormComplete
    useEffect(() => {
        let values = Object.values(input);
        let notComplete = values.filter( value => value === "")
        // let error = Object.keys(errors);
    //     if(!notComplete.length && !error.length) setFormComplete(true)
    // }, [input, errors])
        if(!notComplete.length) setFormComplete(true)
    }, [input])
        
            // //handler del submit ==> si fomrComplete es true despacha la action, setea Success en true, setea input y errors al estado inicial
    const submitHandler = (e) => {
        e.preventDefault();
        // if(!user) {
        //         alert('antes de dejar tu reseña debes loguearte')
        //     setTimeout(function(){
        //         navigate('/ingresar')//si no estoy logueado redirege al login
        //     }, 2000)
        // } else if(formComplete) {
         if(formComplete) {
            dispatch(postReview(input));
            setSuccess(true); // al setearse en true cambia el rederizado
            setInput({
                id_book: '',
                id_user: '',
                "createdDb": '',
                deleted: '',
                title: '',
                qualification: '',
                comment: '',
            });
            // setErrors({
            //     //  id_book: '',
            //     //  id_user: '',
            //     //  "createdDb": '',
            //     //  deleted: '',
            //      title: '',
            //      qualification: '',
            //      comment: '',
            // });  
            setTimeout(function(){
                handleToggleForm()//una vez enviado el form me redirige a reseñas
                setSuccess(false)
            }, 2000)    
        } else {
            alert('missing or incorrect data');
            }
        }

    return (
                <>
                    <h4 className='text-center fs-3'>Deja tu reseña</h4>
                    <form onSubmit={submitHandler}>
                        {success && <img className="w-50 p-3 h-50 d-inline-block" src='./images/createdReview.png' alt='formulario enviado correctamente' />}
                        {!success && <div>
                            <div className="row g-3 align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <p className="text-center">{handlerText()}</p>
                            <div>
                                {Array(5).fill().map((_, index) => {
                                return number >= index + 1 || hoverStar >= index + 1 
                                ? <i className="bi bi-star-fill" onClick={() => setNumber(index + 1)} onMouseOver={() => setHoverStar(index + 1)} onMouseLeave={() => {setHoverStar(undefined)}}/> 
                                : <i className="bi bi-star" onClick={() => {inputHandler}} onMouseOver={() => setHoverStar(index + 1)} onMouseLeave={() => {setHoverStar(undefined)}}/>
                                })}
                                {/* {errors.qualification ? <p className="text-danger">{errors.qualification}</p>} : null */}
                            </div>
                            </div>
                                <div className="col-auto">
                                    <label className="col-form-label ms-3" htmlFor='title'>Título:</label>
                                </div>
                                <div className="col-auto">
                                    <input className="form-control" id='title' type='text' value={input.title} name='title' placeholder='Dale un titulo a tu reseña' onChange={inputHandler} />
                                    {/* {errors.title ? <p className="text-danger">{errors.title}</p> : null} */}
                                </div>
                            </div>
        
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label className="col-form-label ms-3" htmlFor='comment'>Reseña:</label>
                                </div>
                                <div className="col-auto">
                                    <input className="form-control" id='comment' type='textarea' value={input.comment} name='comment' placeholder='Reseña...' onChange={inputHandler} />
                                    {/* {errors.comment ? <p className="text-danger">{errors.comment}</p> : null} */}
                                </div>
                            </div>
                        </div>}
                        <div className="d-flex flex-row justify-content-evenly">
                            <button className="btn btn-dark m-3" disabled={!formComplete} type='submit' onClick={handleToggleForm}>Enviar</button>
                            {/* <button className="btn btn-dark m-3" onClick={() => navigate('/catalogo')}>Volver</button> */}
                        </div>
                    </form>
                </>
            )
};

export default FormCreateReview


    