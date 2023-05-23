import styled from "styled-components";


export const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
width: 100vw;
height: 100vh;
`

export const Container = styled.div`
display: flex;
flex-direction: row;
height: 100%;
background-color: whitesmoke;
`

export const SearchBarDiv = styled.div`
  /* Estilos del NavBar */
  width: 100%;
`;

export const Sidebar = styled.div`
  /* Estilos de la columna de los filtros */
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 16.66667%; /* 1/6 del viewport */
  height: 100%;
  background-color: grey;
 
`;

export const PosterSection = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items:center;
overflow: auto;
width: 100%;
height: auto;
`
export const CatalogoSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    width: 50%; 
    height: 100%;
    /* background-color: red; */

`;

export const DetailSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
  height: 100%;
  width: 33.33333%; /* 2/6 del viewport */
  /* background-color: coral; */
`;