import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks, modifyBook, createAuthor, createGenre } from "../../redux/action";
import axios from 'axios';
import { URL_Railway,URL_Vercel } from '../../../ruta';
import swal from 'sweetalert';

const EditBookForm = ({ book }) => {

    const books = useSelector((state) => state.books);

    const dispatch = useDispatch();

    const genresNoRepeat = books
        .flatMap((book) => book.genders)
        .filter(
            (genre, index, self) => self.findIndex((g) => g === genre) === index
        );

    const sortGenres = genresNoRepeat.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    });

    const authorsNoRepeat = books
        .flatMap((book) => book.authors)
        .filter(
            (aut, index, self) => self.findIndex((a) => a === aut) === index
        );

    const sortAuthors = authorsNoRepeat.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    });

    useEffect(() => {
        dispatch(getAllBooks());
    }, [dispatch]);

    const [formComplete, setFormComplete] = useState(false); //estodo local para manejar el boton del submit y el envio de datos
    const [success, setSuccess] = useState(false); // estado local para manejar la alerta de ok
    const [BorrarImage, setBorrarImage] = useState(false);

    const [input, setInput] = useState({
        id: book.id,
        title: book.title,
        publisher: book.publisher,
        description: book.description,
        price: book.price,
        stock: book.stock,
        publishedDate: book.publishedDate,
        image: book.image,
        genders: book.genders,
        authors: book.authors,
    });

    const [showCustomGenderInput, setShowCustomGenderInput] = useState(false);
    const [customGender, setCustomGender] = useState('')
    const [showCustomAuthorInput, setShowCustomAuthorInput] = useState(false);
    const [customAuthor, setCustomAuthor] = useState('')

    useEffect(() => {
        let values = Object.values(input);
        let notComplete = values.filter(
            (value) => value === "" || value.length === 0
        );
        if (!notComplete.length) setFormComplete(true);
    }, [input]);

    useEffect(() => {
        if (showCustomAuthorInput) {
            setInput((prevInput) => ({
                ...prevInput,
                authors: [customAuthor]
            }));
        }
    }, [customAuthor, showCustomAuthorInput]);

    useEffect(() => {
        if (showCustomGenderInput) {
            setInput((prevInput) => ({
                ...prevInput,
                genders: [customGender]
            }));
        }
    }, [customGender, showCustomGenderInput]);

    const genderHandler = (e) => {
        setShowCustomGenderInput(true)
        setCustomGender(e.target.value)
    };

    const authorHandler = (e) => {
        setShowCustomAuthorInput(true)
        setCustomAuthor(e.target.value)
    };

    // const handleInputChange = (e) => {
    //     if (e.target.name === "authors") {
    //         setInput({
    //             ...input,
    //             authors: [ e.target.value], //traigo todo lo que esta en el array y le concateno el nuevo valor
    //         });
    //     } else if (e.target.name === "genders") {
    //         setInput({
    //             ...input,
    //             genders: [ e.target.value], //traigo todo lo que esta en el array y le concateno el nuevo valor
    //         });
    //     } else {
    //         setInput({
    //             ...input,
    //             [e.target.name]: e.target.value,
    //         });
    //     }
    // };

    const handleInputChange = (e) => {
        if (e.target.name === "authors") {
            if (e.target.value === "Otro") {
                setShowCustomAuthorInput(true);
                setInput({
                    ...input,
                    authors: [customAuthor]
                })
            } else {
                setInput({
                    ...input,
                    authors: [...input.authors, e.target.value], //traigo todo lo que esta en el array y le concateno el nuevo valor
                });
            }
        } else if (e.target.name === "genders") {
            if (e.target.value === "Otro") {
                setShowCustomGenderInput(true);
                setInput({
                    ...input,
                    genders: [customGender]
                })
            } else {
                setInput({
                    ...input,
                    genders: [...input.genders, e.target.value], //traigo todo lo que esta en el array y le concateno el nuevo valor
                });
            }
            // }else if (e.target.name === "image") {
            //     setFile(e.target.files[0])
            //     setInput({
            //         ...input,
            //         image: true, //
            //         // image: file
            //     });
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            });
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (formComplete) {
    //         dispatch(modifyBook(input))
    //             .then((response) => {
    //                 if (response.status === 200) {
    //                     setSuccess(true)
    //                 } else swal({
    //                     title: "Algo salió mal",
    //                     icon: "error",
    //                     timer: "2500"
    //                 })
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //                 swal({
    //                     title: "Algo salió mal",
    //                     icon: "error",
    //                     timer: "2500"
    //                 })
    //             })
    //     } else {
    //         swal({
    //             title: "Algo salió mal",
    //             icon: "error",
    //             timer: "2500"
    //         })
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formComplete) {
            if (showCustomGenderInput) {
                await dispatch(createGenre({ name: customGender }))
                dispatch(getAllBooks())
            }
            if (showCustomAuthorInput) {
                await dispatch(createAuthor({ name: customAuthor }))
                dispatch(getAllBooks())
            }
            dispatch(modifyBook(input))
                .then((response) => {
                    if (response.status !== 400) {
                        setSuccess(true) // al setearse en true cambia el rederizado
                    } else swal({
                        title: "Algo salió mal",
                        icon: "error",
                        timer: "2500"
                    })
                })
                .catch((error) => {
                    console.log(error)
                    swal({
                        title: "Algo salió mal",
                        icon: "error",
                        timer: "2500"
                    })
                })
        }
    };

    console.log(input)

    const BorrarImagen = async (event, id) => {
        event.preventDefault();
        try {
            const response = await axios.delete(`${URL_Railway}/books/deleteImg/${id}`);
            if (response.data.result === 'ok') {
                //console.log('rentr');
                setBorrarImage(true)
            } else {
                //console.log('eroror');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="row d-flex justify-content-center m-2">
            {success && <div className="d-flex justify-content-center">
                <img src="./images/editBookSuccess.png" className="w-50" alt="success" />
            </div>}
            {!success && <form className="w-100" onSubmit={handleSubmit}>
                <div className="row my-1">
                    <div className="col-3 text-start">
                        <label className="form-label">Título:</label>
                    </div>
                    <div className="col-9">
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            value={input.title}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row my-1">
                    <div className="col-3 text-start">
                        <label className="form-label">Editorial:</label>
                    </div>
                    <div className="col-9">
                        <input
                            className="form-control"
                            type="text"
                            name="publisher"
                            value={input.publisher}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-3 text-start">
                        <label className="form-label">Género:</label>
                    </div>
                    <div className="col-9">
                        <input
                            className="form-control"
                            type="text"
                            name="genders"
                            value={input.genders}
                            onChange={handleInputChange}
                        />
                    </div>
                </div> */}

                {/* <div className="row">
                    <div className="col-3 text-start">
                        <label className="form-label">Autor:</label>
                    </div>
                    <div className="col-9">
                        <input
                            className="form-control"
                            type="text"
                            name="authors"
                            value={input.authors}
                            onChange={handleInputChange}
                        />
                    </div>
                </div> */}


                                <div className="row my-1">
                                    <div className="col-3 text-start">
                                        <label
                                            className="form-label"
                                            htmlFor="authors">
                                            Autor/es:
                                        </label>
                                    </div>
                                    <div className="col-9">
                                        <select
                                            className="form-select col-auto"
                                            name="authors"
                                            id="authors"
                                            onChange={handleInputChange}
                                        >
                                            <option value="" readOnly hidden>
                                                {input.authors}
                                            </option>
                                            {sortAuthors &&
                                                sortAuthors.map((author, index) => {
                                                    return (
                                                        <option
                                                            key={index}
                                                            value={author}
                                                        >
                                                            {author}
                                                        </option>
                                                    );
                                                })}
                                            <option>Otro</option>
                                        </select>
                                        {showCustomAuthorInput && (
                                            <div className="container">
                                                <div className="row g-3 align-items-center">
                                                    <div className="col-4">
                                                        <label className="col-form-label ms-3" htmlFor="customAuthor">
                                                            Otro:
                                                        </label>
                                                    </div>
                                                    <div className="col-8 my-2">
                                                        <input className="form-control mt-3" id="customAuthor" type="text" value={input.customAuthor} name="customAuthor" placeholder="Ingresá un autor nuevo" onChange={authorHandler} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="row my-1">
                                    <div className="col-3 text-start">
                                        <label
                                            className="form-label"
                                            htmlFor="genders">
                                            Género/s literario/s:
                                        </label>
                                    </div>
                                    <div className="col-9">
                                        <select
                                            className="form-select col-auto"
                                            name="genders"
                                            id="genders"
                                            onChange={handleInputChange}
                                        >
                                            <option value="" readOnly hidden>
                                                {input.genders}
                                            </option>
                                            {sortGenres &&
                                                sortGenres.map((genre, index) => {
                                                    return (
                                                        <option
                                                            key={index}
                                                            value={genre}
                                                        >
                                                            {genre}
                                                        </option>
                                                    );
                                                })}
                                            <option>Otro</option>
                                        </select>
                                        {showCustomGenderInput && (
                                            <div className="container">
                                                <div className="row g-3 align-items-center">
                                                    <div className="col-4">
                                                        <label className="col-form-label ms-3" htmlFor="customGender">
                                                            Otro:
                                                        </label>
                                                    </div>
                                                    <div className="col-8 my-2">
                                                        <input className="form-control mt-3" id="customGender" type="text" value={input.customGender} name="customGender" placeholder="Ingresá un género nuevo" onChange={genderHandler} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                <div className="row my-1">
                    <div className="col-3 text-start">
                        <label className="form-label">Sinopsis:</label>
                    </div>
                    <div className="col-9">
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            value={input.description}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3 text-start">
                        <label className="form-label">Precio:</label>
                    </div>
                    <div className="col-9">
                        <input
                            className="form-control"
                            type="number"
                            name="price"
                            value={input.price}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row my-1">
                    <div className="col-3 text-start">
                        <label className="form-label">Stock:</label>
                    </div>
                    <div className="col-9">
                        <input
                            className="form-control"
                            type="number"
                            name="stock"
                            value={input.stock}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row my-1">
                    <div className="col-3 text-start">
                        <label className="form-label">Fecha de publicación:</label>
                    </div>
                    <div className="col-9">
                        <input
                            className="form-control"
                            type="text"
                            name="publishedDate"
                            value={input.publishedDate}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row my-1">
                    <div className="col-3 text-start">
                        <label className="form-label">Portada:</label>
                    </div>
                    <div className="col-9">
                        {BorrarImage ?
                            <div>
                                <img src={URL_Vercel + '/images/logo.png'} width="120" height='auto' alt={input.title} />
                                <input
                                    style={{ width: "100%" }}
                                    className="form-control"
                                    id="image"
                                    type='file'
                                    accept='image/jpeg'
                                    name="image"
                                    onChange={handleInputChange}
                                />
                            </div>
                            : <img src={input.image} width="100" height='auto' alt={input.title} />}
                        {/*si el estado es false muestro la imagen, sino el logo, por el tema refresco */}
                        {URL_Vercel + '/images/logo.png' === input.image ?
                            <p>El mensaje está visible</p>
                            : <div className="btn btn-danger btn-sm m-2" onClick={(event) => BorrarImagen(event, input.id)} > Borrar imagen</div>}
                    </div>
                </div>
                <div className="row d-flex justify-content-center m-2">
                    <button className="btn btn-dark w-25" disabled={!formComplete} type="submit">
                        Enviar
                    </button>
                </div>
            </form>}
        </div>
    );
};

export default EditBookForm;
