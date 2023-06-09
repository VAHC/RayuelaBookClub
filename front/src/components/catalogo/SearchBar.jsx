import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    searchByNameOrAuthor,
    changePagina,
    getBooksPage,
    resetFilter,
} from "../../redux/action";
import { Paginado } from "./Paginado";

import { Link } from "react-router-dom";
import { totalItems } from "../shoppingCart/helpers";


export const SearchBar = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const [notFound, setNotFound] = useState(false);

    const pagina = useSelector((state) => state.paginaActual);

    const booksPage = useSelector((state) => state.booksPage);
    const cart = useSelector((state) => state.cart);


    const handlerChange = (e) => {
        setInput(e.target.value);
    };

    const handlerDispatch = () => {
        event.preventDefault();
        const searchDataPopulation = async () => {
            await dispatch(searchByNameOrAuthor(input));
            dispatch(getBooksPage(1));
        };
        searchDataPopulation();
        setInput("");
    };

    return (
        <div>
            {notFound && (
                <img
                    src="./images/notFound.png"
                    className="w-25 position-absolute start-50 top-50 translate-middle-x"
                    alt="bad request"
                />
            )}
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

                    <Paginado />

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
