import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksPage, getAllBooks } from "../../redux/action";
import Card from "./Card";

//este es el codigo que saca del catalogo la suscripcion, userOrders habria que reemplazarlo por el array que tiene todos los libros, y usar notSuscription para renderizar
// const notSuscription = userOrders.filter(order => order.id !== 58)
  

export const Posters = () => {
    //Pagina actual
    const pagina = useSelector((state) => state.paginaActual);
    //libros de la pagina array
    const booksPage = useSelector((state) => state.booksPage);

    //array de libros filtrados
    const filteredbooks = useSelector((state) => state.books);

    //flag para saber si esta activo algun filtro
    const filterFlag = useSelector((state) => state.filterFlag);

    //flag para no cargar todos los libros con cada render
    const [allBooksLoaded, setAllBooksLoaded] = useState(false);

    const searchData = useSelector((state) => state.searchData);

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

    const renderConditional = () => {
        let renderElements = undefined;

        if (filterFlag) {
            searchData.length > 0
                ? (renderElements = searchData.map((book, index) => {
                      // if(book.deleted === true) return null;
                      return <Card book={book} key={index} />;
                  }))
                : (renderElements = filteredbooks.map((book, index) => {
                      // if(book.deleted === true) return null;
                      return <Card book={book} key={index} />;
                  }));
        } else {
            renderElements = booksPage.map((book, index) => {
                // if(book.deleted === true) return null;
                return <Card book={book} key={index} />;
            });
        }

        return renderElements;
    };

    return renderConditional();
};
