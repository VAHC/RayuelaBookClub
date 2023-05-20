import React, { useEffect }  from "react";

//Componentes
import { Detail } from "./Detail";
import { SearchBar } from "./SearchBar";
import { Orders } from "./Orders";
import { Filters } from "./Filters";
import { Posters } from "./Posters";

//Estilos
import {
    Container,
    Sidebar,
    OrdersSection,
    CatalogoSection,
    SearchBarDiv,
    DetailSection,
    PosterSection,
    Wrap
} from "./Styles/catalogo";

import {getAllBooks } from "../../redux/action";
import {useDispatch } from "react-redux";

// En este componente se renderizan todos los demas.
export const Catalogo = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllBooks());
        console.log("se hace el dispatch para buscar allBooks");
    }, [])

    return (
        <Wrap>
            {/* ¿NavBar? */}

            <SearchBarDiv>
                <SearchBar />
            </SearchBarDiv>

            <Container>
                <Sidebar>
                    <Filters />
                </Sidebar>

                <CatalogoSection>

                    <OrdersSection>
                        <Orders />
                    </OrdersSection>

                    <PosterSection>
                        <Posters />
                    </PosterSection>

                </CatalogoSection>

                <DetailSection>
                    <Detail />
                </DetailSection>
            </Container>
        </Wrap>
    );
};
