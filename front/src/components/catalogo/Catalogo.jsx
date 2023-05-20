import React from 'react'

//Componentes
import { Detail } from "./Detail";
import { SearchBar } from "./SearchBar";
import { Orders } from "./Orders";
import { Filters } from "./Filters";
import { Posters } from "./Posters";

// Estilos
import {
  Container,
  Sidebar,
  OrdersSection,
  CatalogoSection,
  SearchBarDiv,
  DetailSection,
  PosterSection,
  Wrap
} from './Styles/catalogo'

// En este componente se renderizan todos los demas.
export const Catalogo = () => {
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
  )
}
