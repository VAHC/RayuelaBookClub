import React from "react";

//Componentes
import { Detail } from "./detail";
import { SearchBar } from "./SearchBar";
import { Orders } from "./orders";
import { Filters } from "./filters";
import { Posters } from "./Posters";

//Estilos
import Container from "./Styles/catalogo";

// En este componente se renderizan todos los demas.
export const Catalogo = () => {
    return (
        <Container>

            {/* ¿NavBar? */}

            <div>
                <SearchBar />
            </div>
            <div>
                <Filters />
            </div>
            <div>
                <Orders />
            </div>
            <div>
                <Posters />
            </div>
            <div>
                <Detail />
            </div>
            
        </Container>
    );
};
