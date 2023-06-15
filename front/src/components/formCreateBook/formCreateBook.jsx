import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postBook, getAllBooks, createGenre, createAuthor } from "../../redux/action";
import validation from "./validation";
import swal from 'sweetalert';

export const FormCreateBook = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);

    const [file, setFile] = useState(null)
    const [formComplete, setFormComplete] = useState(false); //estodo local para manejar el boton del submit y el envio de datos
    const [success, setSuccess] = useState(false); // estado local para manejar la alerta de ok
    const [showCustomGenderInput, setShowCustomGenderInput] = useState(false);
    const [customGender, setCustomGender] = useState('')
    const [showCustomAuthorInput, setShowCustomAuthorInput] = useState(false);
    const [customAuthor, setCustomAuthor] = useState('')

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

    const [input, setInput] = useState({
        //estado,local para menejar los inputs
        title: "",
        publisher: "",
        description: "",
        price: 0,
        stock: 0,
        publishedDate: "",
        authors: [],
        genders: [],
        image: false,
    });

    const [errors, setErrors] = useState({
        // estado local para manejar los errores
        title: "",
        publisher: "",
        description: "",
        price: "",
        stock: "",
        publishedDate: "",
        authors: "",
        genders: "",
        image: false,
    });

    const genderHandler = (e) => {
        setShowCustomGenderInput(true)
        setCustomGender(e.target.value)
    };

    const authorHandler = (e) => {
        setShowCustomAuthorInput(true)
        setCustomAuthor(e.target.value)
    };

    //handler que maneja el estado de los inputs
    const inputHandler = (e) => {
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
            }else if (e.target.name === "image") {
                setFile(e.target.files[0])
                setInput({
                    ...input,
                    image: true, //
                    // image: file
                });
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            });
        }

        setErrors(
            validation({
                ...input,
                [e.target.name]: e.target.value,
            }, file));
    };

    //useEffect que escucha los estados locales input y errors para setear el estado FormComplete
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

    const submitHandler = async (e) => {
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
            const data = new FormData()
            data.append('title', input.title)
            data.append('publisher', input.publisher)
            data.append('description', input.description)
            data.append('price', input.price)
            data.append('stock', input.stock)
            data.append('publishedDate', input.publishedDate)
            data.append('authors', input.authors)
            data.append('genders', input.genders)
            data.append('image', file)

            dispatch(postBook(data))
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

    return (
        <>
            {success && (
                <div className="d-flex justify-content-center">
                    <img
                        className="w-50 p-3 h-50"
                        src="./images/libroCreado.jpg"
                        alt="formulario enviado correctamente"
                    />
                </div>
            )}
            {!success && (
                <div className="container w-75">
                    <div className="row align-items-center">
                        <form
                            onSubmit={submitHandler}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div className="container">
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label
                                            className="col-form-label ms-3"
                                            htmlFor="title"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Título:
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            style={{ width: "100%" }}
                                            className="form-control"
                                            id="title"
                                            type="text"
                                            value={input.title}
                                            name="title"
                                            placeholder="Título del libro"
                                            onChange={inputHandler}
                                        />
                                        {errors.title ? <p className="text-danger">{errors.title}</p> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label
                                            className="col-form-label ms-3"
                                            htmlFor="publisher"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Editorial:
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            style={{ width: "100%" }}
                                            className="form-control"
                                            id="publisher"
                                            type="text"
                                            value={input.publisher}
                                            name="publisher"
                                            placeholder="Editorial del libro"
                                            onChange={inputHandler}
                                        />
                                        {errors.publisher ? <p className="text-danger">{errors.publisher}</p> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label
                                            className="col-form-label ms-3"
                                            htmlFor="authors"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Autor/es:
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <select
                                            className="form-select col-auto"
                                            name="authors"
                                            id="authors"
                                            onChange={inputHandler}
                                        >
                                            <option value="" readOnly hidden>
                                                Elegí uno o más...
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
                                        {errors.authors ? <p className="text-danger">{errors.authors}</p> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label
                                            className="col-form-label ms-3"
                                            htmlFor="genders"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Género/s literario/s:
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <select
                                            className="form-select"
                                            name="genders"
                                            id="genders"
                                            onChange={inputHandler}
                                        >
                                            <option value="" readOnly hidden>
                                                Elegí uno o más...
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
                                        {errors.genders ? <p className="text-danger">{errors.genders}</p> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label
                                            className="col-form-label ms-3"
                                            htmlFor="description"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Sinopsis:
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            style={{ width: "100%" }}
                                            className="form-control"
                                            id="description"
                                            type="textarea"
                                            value={input.description}
                                            name="description"
                                            placeholder="Sinopsis del libro"
                                            onChange={inputHandler}
                                        />
                                        {errors.description ? <p className="text-danger">{errors.description}</p> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label
                                            className="col-form-label ms-3"
                                            htmlFor="price"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Precio:
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            style={{ width: "100%" }}
                                            className="form-control"
                                            id="price"
                                            type="number"
                                            value={input.price}
                                            name="price"
                                            placeholder="$"
                                            onChange={inputHandler}
                                        />
                                        {errors.price ? <p className="text-danger">{errors.price}</p> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label
                                            className="col-form-label ms-3"
                                            htmlFor="stock"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Stock:
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            style={{ width: "100%" }}
                                            className="form-control"
                                            id="stock"
                                            type="number"
                                            value={input.stock}
                                            name="stock"
                                            placeholder="Cantidad"
                                            onChange={inputHandler}
                                        />
                                        {errors.stock ? <p className="text-danger">{errors.stock}</p> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                        <label
                                            className="col-form-label ms-3"
                                            htmlFor="publishedDate"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Fecha de publicación:
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <input
                                            style={{ width: "100%" }}
                                            className="form-control"
                                            id="publishedDate"
                                            type="month"
                                            value={input.publishedDate}
                                            name="publishedDate"
                                            placeholder="mm/aaaa"
                                            onChange={inputHandler}
                                        />
                                        {errors.publishedDate ? <p className="text-danger">{errors.publishedDate}</p> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row g-3 align-items-center">
                                    <div className="col-4">
                                        <label
                                            className="col-form-label ms-3"
                                            htmlFor="image"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Portada:
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            style={{ width: "100%" }}
                                            className="form-control"
                                            id="image"
                                            type='file'
                                            accept='image/jpeg'
                                            name="image"
                                            onChange={inputHandler}
                                        />
                                        {/* <p>{errors.image}</p> */}
                                        {errors.image ? <p className="text-danger">{errors.image}</p> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row justify-content-evenly">
                                <button
                                    className="btn btn-dark m-3"
                                    disabled={!formComplete}
                                    type="submit"
                                >
                                    Crear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
