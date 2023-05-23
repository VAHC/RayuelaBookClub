import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { postBook, getAllBooks } from '../../redux/action';
//import validation from './validation';


export const FormCreateBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector(state => state.books);

    const genresNoRepeat = books
    .flatMap(book => book.genders)
    .filter((genre, index, self) => self.findIndex(g => g === genre) === index);
    
    const sortGenres = genresNoRepeat.sort((a, b) => { 
      if(a > b) {return 1}
      if(b > a) {return -1}
    return 0
    })

    const authorsNoRepeat = books
    .flatMap(book => book.authors)
    .filter((aut, index, self) => self.findIndex(a => a === aut) === index);

    const sortAuthors = authorsNoRepeat.sort((a, b) => { 
      if(a > b) {return 1}
      if(b > a) {return -1}
    return 0
    })
    
    useEffect(() => {
        dispatch(getAllBooks());
    }, [dispatch]);

    const [input, setInput] = useState({ //estado,local para menejar los inputs
        title: '',
        publisher: '',
        description: '',
        price: '',
        stock: '',
        publishedDate: '',
        image: '',
        authors: [],
        genders: []
    });

    // const [errors, setErrors] = useState({ // estado local para manejar los errores     
    //     title: '',
    //     publisher: '',
    //     description: '',
    //     price: '',
    //     stock: '',
    //     publishedDate: '',
    //     image: '',
    //     authors: '',
    //     genders: ''
    // });

    const [formComplete, setFormComplete] = useState(false); //estodo local para manejar el boton del submit y el envio de datos
    const [success, setSuccess] = useState(false); // estado local para manejar la alerta de ok

    //handler que maneja el estado de los inputs
    const inputHandler = (e) => {
        if(e.target.name === 'authors'){
            setInput({
                ...input,
                authors: [...input.countryId, e.target.value]//traigo todo lo que esta en el array y le concateno el nuevo valor
                
            })  
        } else if (e.target.name === 'genders'){
            setInput({
                ...input,
                authors: [...input.genders, e.target.value]//traigo todo lo que esta en el array y le concateno el nuevo valor
                
            }) 
        } else {
            setInput({
                ...input,
                [e.target.name] : e.target.value
            });
        }
        // setErrors(validation({
        //     ...input,
        //     [e.target.name]: e.target.value
        // }));
    };
    
    //useEffect que escucha los estados locales input y errors para setear el estado FormComplete
    useEffect(() => {
        let values = Object.values(input);
        let notComplete = values.filter( value => value === "" || value.length === 0)
       // let error = Object.keys(errors);
       if(!notComplete.length) setFormComplete(true)
    }, [input]) 
    //     if(!notComplete.length && !error.length) setFormComplete(true)
    // }, [input, errors])

//    //handler para borrar los paises seleccionados
//         const deleteHandler = (id) => {
//             setInput({
//                 ...input,
//                 countryId: input.countryId.filter(c => c !== id)
//             })
//         }
//handler del submit ==> si fomrComplete es true despacha la action PostActivity, setea Success en true, setea input y errors al estado inicial
    const submitHandler = (e) => {
        e.preventDefault();
        if(formComplete) {
            dispatch(postBook(input));
            setSuccess(true); // al setearse en true cambia el rederizado
            setInput({
                title: '',
                publisher: '',
                description: '',
                price: '',
                stock: '',
                publishedDate: '',
                image: '',
                authors: [],
                genders: []
            });
            // setErrors({
            //     title: '',
            //     publisher: '',
            //     description: '',
            //     price: '',
            //     stock: '',
            //     publishedDate: '',
            //     image: '',
            //     authors: '',
            //     genders: '' 
            // });  
            setTimeout(function(){
                navigate('/catalogo') //una vez enviado el form me redirige a catalogo  
            }, 2000)

        } else {
            alert('missing or incorrect data');
        }
    }
    return(
        <div>
            <h4>Crea un libro</h4>
            <form onSubmit={submitHandler}>
                {success && <img  src='./images/notFound.png' alt='formulario enviado correctamente'/> }
                {!success && <div>
                    <div>
                        <label htmlFor='title'>Titulo:</label>
                        <input id='title' type='text'  value={input.title} name='title' placeholder='titulo del libro' onChange={inputHandler}/>
                        {/* {errors.name ? <p className={styles.vDanger}>{errors.name}</p> : null} */}
                    </div>
                    <div>
                        <label htmlFor='publisher'>Editorial:</label>
                        <input id='publisher' type='text'  value={input.publisher} name='publisher' placeholder='editorial del libro' onChange={inputHandler}/>
                    </div>
                    <div>
                        <label htmlFor='description'>Sinopsis:</label>
                        <input id='description' type='text'  value={input.description} name='description' placeholder='editorial del libro' onChange={inputHandler}/>
                    </div>
                    <div>
                        <label htmlFor='price'>Precio:</label>
                        <input id='price' type='text'  value={input.price} name='price' placeholder='$' onChange={inputHandler}/>
                    </div>
                    <div>
                        <label htmlFor='stock'>Stock:</label>
                        <input id='stock' type='text'  value={input.stock} name='stock' placeholder='cantidad' onChange={inputHandler}/>
                    </div> 
                    <div>
                        <label htmlFor='publishedDate'>Fecha de Publicación:</label>
                        <input id='publishedDate' type='text'  value={input.publishedDate} name='publishedDate' placeholder='mm/aaaa' onChange={inputHandler}/>
                    </div>  
                    <div>
                        <label htmlFor='image'>Imagen Libro:</label>
                        <input id='image' type='text'  value={input.image} name='image' placeholder='url' onChange={inputHandler}/>
                    </div>
                    <div>
                        <label htmlFor='genders'>Género/s literario:</label>
                        <select name='genders' id='genders' onChange={inputHandler}>
                             <option value='' readOnly hidden>elige uno o mas...</option>
                            {sortAuthors && sortAuthors.map((author, index) => {
                                 return(
                                    <option key={index} value={author}>{author}</option>
                             )})
                         }
                        </select>
                    </div> 
                    <div>
                         <label htmlFor='authors'>Autor/es:</label>
                        <select name='authors' id='authors' onChange={inputHandler}>
                             <option value='' readOnly hidden>elige uno o mas...</option>
                            {sortGenres && sortGenres.map((genre, index) => {
                                 return(
                                    <option key={index} value={genre}>{genre}</option>
                                )})
                            }
                        </select>
                    </div>      
                </div>}
                <button disabled={!formComplete} type='submit'>Crear</button>
            </form>
            <button onClick={() => navigate('/catalogo')}>Volver</button>
        </div>
    )
}
    