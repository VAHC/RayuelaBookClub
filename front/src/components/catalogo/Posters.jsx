import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksPage, getAllBooks } from "../../redux/action";

import Card from "./Card";

export const Posters = () => {
    //Pagina actual
    const pagina = useSelector((state) => state.paginaActual);
    //console.log(pagina);
    //libros de la pagina array
    const booksPage = useSelector((state) => state.booksPage);
    //console.log(booksPage);
    //flag para no cargar todos los libros con cada render
    const [allBooksLoaded, setAllBooksLoaded] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const booksGet = async () => {
            if (!allBooksLoaded) {
                await dispatch(getAllBooks());
                setAllBooksLoaded(true);
            }
            dispatch(getBooksPage(pagina));
        };
        booksGet();
    }, [pagina]);

    const booksMap = booksPage.map((book, index) => {
        return (
            <Card
            book={book}
            key={index}
            />
        );
    });

    return (booksMap);
};
