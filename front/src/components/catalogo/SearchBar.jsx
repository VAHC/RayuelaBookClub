import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByNameOrAuthor, getBooksPage, getAllBooks } from "../../redux/action";
import { Paginado } from "./Paginado";
import { Link } from "react-router-dom";
import { totalItems } from "../shoppingCart/helpers";
import swal from 'sweetalert';

export const SearchBar = ({ booksPerPage, totalBooks, paginate, currentPage, previus, next }) => {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    //const pagina = useSelector((state) => state.paginaActual);
    //const booksPage = useSelector((state) => state.booksPage);
    const cart = useSelector((state) => state.cart);
    const books = useSelector((state) => state.books)

    const handlerChange = (e) => {
        setInput(e.target.value);
    };

    const handlerDispatch = () => {
        event.preventDefault();
        const searchDataPopulation = async () => {
            await dispatch(searchByNameOrAuthor(input))
                .then((response) => {
                    const deletedFilter = response.payload.filter(book => !book.deleted)
                    if (deletedFilter.length === 0) {
                        swal({
                            title: "No hay resultados",
                            icon: "warning",
                            timer: "2000"
                        })
                        dispatch(getAllBooks())
                    }
                })
                .catch((error) => {
                    console.log(error)
                    swal({
                        title: "Algo salió mal",
                        icon: "error",
                        timer: "2500"
                    })
                })
            // dispatch(getBooksPage(1));
        };
        searchDataPopulation();
        setInput("");
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                    className="container-fluid"
                >
                    <form className="d-flex " role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Libro o autor"
                            aria-label="Buscar"
                            value={input}
                            onChange={handlerChange}
                        />
                        <button
                            className="btn btn-light btn-outline-secondary"
                            onClick={handlerDispatch}
                        >
                            Buscar
                        </button>
                    </form>
                    <Paginado
                        booksPerPage={booksPerPage}
                        totalBooks={books.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        previus={previus} 
                        next ={next}
                    />
                    <Link to="/carrito">
                        <i className="bi bi-cart text-light fs-3"></i>
                        <span className="badge bg-danger ms-1 rounded-circle">
                            {totalItems(cart)}
                        </span>
                    </Link>
                </div>
            </nav>

        </div>
    );
};

