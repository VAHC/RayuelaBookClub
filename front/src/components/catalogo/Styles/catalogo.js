import styled from "styled-components";


export const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-content: flex-start;
width: 95vw;
height: 90vh;
`

export const Container = styled.div`
display: flex;
flex-direction: row;
height: 100%;
background-color: whitesmoke;
`

export const SearchBarDiv = styled.div`
  /* Estilos del NavBar */
  height: 10vh; 
  width: 100%;
  background-color: blue;
`;

export const Sidebar = styled.div`
  /* Estilos de la columna de los filtros */
  
  flex: 1;
  width: 16.66667%; /* 1/6 del viewport */
  height: 100%;
  background-color: yellow;
 
`;

export const OrdersSection = styled.div`
/* Estilos del div de orderselection */
height: 15%;
background-color: green;
  
  
`;
export const PosterSection = styled.div`
`
export const CatalogoSection = styled.div`
  /* Estilos del div de posters */
    display: flex;
    flex-direction: column;
    flex: 3;
    width: 50%; 
    height: 100%;
    background-color: red;
  /* Otros estilos del div de posters */
`;

export const DetailSection = styled.div`
  /* Estilos del div de detalle */

  height: 100%;
  width: 33.33333%; /* 2/6 del viewport */
  background-color: coral;
  /* Otros estilos del div de detalle */
`;