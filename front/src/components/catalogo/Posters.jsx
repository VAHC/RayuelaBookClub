import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksPage, getAllBooks } from "../../redux/action";
import { Filters } from "./Filters";

import Card from "./Card";

export const Posters = () => {
    //Pagina actual
    const pagina = useSelector((state) => state.paginaActual);
    console.log(pagina);
    //libros de la pagina array
    const booksPage = useSelector((state) => state.booksPage);
    //flag para no cargar todos los libros con cada render
    const [allBooksLoaded, setAllBooksLoaded] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')

    const extractedArray = booksPage.flatMap(obj => obj.gender);
    console.log(extractedArray)

    

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

    const booksMap = booksPage.map((book) => {
        return (
            <Card
            book={book}
            />
        );
    });

    return(
      <div>
        {booksMap}
        {/* <Filters setCurrentPage={setCurrentPage} generos={extractedArray} setOrder={setOrder}/> */}
      </div>
      
      )
     
        
};
