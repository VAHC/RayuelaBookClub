import React, { useEffect } from "react";

//Componentes
import { Detail } from "./Detail";
import { SearchBar } from "./SearchBar";
import { Orders } from "./Orders";
import { Filters } from "./Filters";
import { Posters } from "./Posters";
import { Paginado } from "./Paginado";

//Estilos
import {
    Container,
    Sidebar,
    CatalogoSection,
    SearchBarDiv,
    DetailSection,
    PosterSection,
    Wrap,
} from "./Styles/catalogo";

import { getAllBooks } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react'

// En este componente se renderizan todos los demas.
export const Catalogo = () => {

    const AllBooks = useSelector((state) => state.books); //escucho la propiedad books del estado global
    const notSuscripctionBooks = AllBooks.filter(book => book.id !== 58);
    const books = notSuscripctionBooks.filter(book => !book.deleted)
    const dispatch = useDispatch();

//paginado
    const [currentPage, setCurrentPage] = useState(1); //inicializo la paginacion en 1
    const booksPerPage = 9; //indico cuantas cards renderizar por pagina
  
    const indexOfLastBooks = currentPage * booksPerPage;  //encuentro el ultimo book renderizado
    const indexOfFirstBooks = indexOfLastBooks - booksPerPage; //encuentro el primer book renderizado
    const currentBooks = books.slice(indexOfFirstBooks, indexOfLastBooks); //corto el estado global desde el 1 book al ultimo renderizado

    const previus = currentPage - 1;
    const next = currentPage + 1;

    const paginate = (pageNumber) => { //ejecuto la funcion que setea el numero de pagina
      setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getAllBooks());
        //console.log("se hace el dispatch para buscar allBooks");
    }, []);

    const detailData = useSelector((state) => state.detailData);

    return (
        <Wrap>
            <SearchBarDiv>
                <SearchBar 
                     booksPerPage={booksPerPage}
                     totalBooks={books.length}
                     paginate={paginate}
                     currentPage={currentPage}
                     previus={previus} 
                     next ={next}
                />
            </SearchBarDiv>
            <Container>
                <Sidebar>
                    <Orders  paginate={paginate}/>
                    <Filters  paginate={paginate} />
                </Sidebar>
                <CatalogoSection>
                    <PosterSection>
                        <Posters  
                        paginate={paginate}
                        currentBooks={currentBooks}
                        />
                    </PosterSection>
                </CatalogoSection>
                {detailData === undefined && (
                    <DetailSection>
                        <Detail />
                    </DetailSection>
                )}
            </Container>
        </Wrap>
    );
};
