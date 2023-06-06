import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    genreFiltered,
    getAllBooks,
    filterAuthor,
    getBooksPage,
    changePagina,
    filterFlagToggle,
    resetFilter,
    getGeneros,
    getAutores,
} from "../../redux/action";

//export function Filters({setCurrentPage, generos, setOrder}) {
export function Filters() {
    const dispatch = useDispatch();
    const pagina = useSelector((state) => state.paginaActual);
    const allBooks = useSelector((state) => state.allBooks);
    const books = useSelector((state) => state.books);
    const autores = useSelector((state) => state.autores);
    const generos = useSelector((state) => state.generos);
    const searchData = useSelector((state) => state.searchData);

    const [authorValue, setAuthorValue] = useState(null);
    const [genreValue, setGenreValue] = useState(null);

    useEffect(() => {
        dispatch(getGeneros());
        dispatch(getAutores());
    }, [allBooks, books]);

    useEffect(() => {
        setGenreValue("All");
        setAuthorValue("All");
        dispatch(genreFiltered("All"));
        dispatch(filterAuthor("All"));
        dispatch(filterFlagToggle(false));
    }, [searchData]);

    const handleFilterGenre = (e) => {
        setGenreValue(e.target.value);
        dispatch(genreFiltered(e.target.value));
        dispatch(filterFlagToggle(true));
    };

    const handleFilterAuthor = (e) => {
        setAuthorValue(e.target.value);

        dispatch(filterAuthor(e.target.value));
        dispatch(filterFlagToggle(true));
    };

    const clearFilters = async () => {
        await dispatch(resetFilter());
        dispatch(getBooksPage(pagina));
        setGenreValue("All");
        setAuthorValue("All");
        dispatch(genreFiltered("All"));
        dispatch(filterAuthor("All"));
        dispatch(filterFlagToggle(false));
    };

    return (
        <div>
            <h6 className="mx-2">Filtrar por</h6>
            <div className="m-1 mb-3">
                <select
                    className="form-select"
                    value={authorValue || "All"}
                    onChange={(e) => handleFilterAuthor(e)}
                >
                    <option value="All" readOnly hidden>
                        Autor
                    </option>
                    {autores &&
                        autores.map((autor, index) => (
                            <option key={index} value={autor}>
                                {autor}
                            </option>
                        ))}
                </select>
            </div>
            <div className="m-1">
                <select
                    className="form-select"
                    value={genreValue || "All"}
                    onChange={(e) => handleFilterGenre(e)}
                >
                    <option value="All" readOnly hidden>
                        Género
                    </option>
                    {generos &&
                        generos.map((a, index) => (
                            <option key={index} value={a}>
                                {a}
                            </option>
                        ))}
                </select>
            </div>
            <div
                style={{ marginTop: "20px" }}
                className="d-flex justify-content-center"
            >
                <button className="btn btn-dark m-2" onClick={clearFilters}>
                    Borrar 
                    <br/>
                    Filtros / Busqueda
                </button>
            </div>
        </div>
    );
}
