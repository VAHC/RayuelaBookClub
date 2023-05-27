import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {postReview} from '../../redux/action';
// import validation from './validation';

const FormCreateReview = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [number, setNumber] = useState(0) // estado que sirve para controlar las estrellas
    const [hoverStar, setHoverStar] = useState(undefined)

    const [input, setInput] = useState({ //estado,local para menejar los inputs
        title: '',
        qualification: '',
        comment: '',
    });

    const [errors, setErrors] = useState({ //estado,local para menejar los errores
        title: '',
        qualification: '',
        comment: '',
    });
    
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
            qualification: number,
            [e.target.name] : e.target.value
        });
    }
        // setErrors(validation({
        //     ...input,
        //     [e.target.name]: e.target.value
        // }));
    // };
            //useEffect que escucha los estados locales input y errors para setear el estado FormComplete
    useEffect(() => {
        let values = Object.values(input);
        let notComplete = values.filter( value => value === "")
        //let error = Object.keys(errors);
        if(!notComplete.length) setFormComplete(true)
    }, [input]) 
            //     if(!notComplete.length && !error.length) setFormComplete(true)
            // }, [input, errors])
        
            // //handler del submit ==> si fomrComplete es true despacha la action PostActivity, setea Success en true, setea input y errors al estado inicial
    const submitHandler = (e) => {
        e.preventDefault();
        if(formComplete) {
            dispatch(postReview(input));
            setSuccess(true); // al setearse en true cambia el rederizado
            setInput({
                title: '',
                qualification: '',
                comment: '',
            });
            // setErrors({
            //     title: '',
            //     qualification: '',
            //     comment: '',
            // });  
            setTimeout(function(){
                navigate('/reseña') //una vez enviado el form me redirige a catalogo  
            }, 2000)    
        } else {
            alert('missing or incorrect data');
            }
        }

    return (
                <>
                    <h4 className='text-center fs-3'>Deja tu reseña</h4>
                    <form onSubmit={submitHandler}>
                        {success && <img className="w-50 p-3 h-50 d-inline-block" src='./images/libroCreado.jpg' alt='formulario enviado correctamente' />}
                        {!success && <div>
                            <div className="row g-3 align-items-center">
                            <div>
                                <h6>{handlerText()}</h6>
                                {Array(5).fill().map((_, index) => {
                                    return number >= index + 1 || hoverStar >= index + 1 
                                    ?
                                   <i class="bi bi-star-fill" onMouseOver={() => setHoverStar(index + 1)} onMouseLeave={() => {setHoverStar(undefined)}}/> 
                                :
                                  <i class="bi bi-star" onClick={()=> {setNumber(index + 1), inputHandler()}} onMouseOver={() => setHoverStar(index + 1)} onMouseLeave={() => {setHoverStar(undefined)}}/>
                                })}
                            </div>
                                <div className="col-auto">
                                    <label className="col-form-label ms-3" htmlFor='title'>Título:</label>
                                </div>
                                <div className="col-auto">
                                    <input className="form-control" id='title' type='text' value={input.title} name='title' placeholder='Dale un titulo a tu reseña' onChange={inputHandler} />
                                    {/* {errors.title ? <p>{errors.title}</p> : null} */}
                                </div>
                            </div>
        
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label className="col-form-label ms-3" htmlFor='comment'>Reseña:</label>
                                </div>
                                <div className="col-auto">
                                    <input className="form-control" id='comment' type='textarea' value={input.comment} name='comment' placeholder='Reseña...' onChange={inputHandler} />
                                    <p>{errors.comment}</p>
                                </div>
                            </div>
                        </div>}
                        <div className="d-flex flex-row justify-content-evenly">
                            <button className="btn btn-dark m-3" disabled={!formComplete} type='submit'>Enviar</button>
                            {/* <button className="btn btn-dark m-3" onClick={() => navigate('/catalogo')}>Volver</button> */}
                        </div>
                    </form>
                </>
            )
};

export default FormCreateReview


    