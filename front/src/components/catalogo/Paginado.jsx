// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changePagina } from "../../redux/action";
// import { Pagination } from "react-bootstrap";

// export const Paginado = () => {
//     const PagActual = useSelector((state) => state.paginaActual);
//     const cantXPag = 9;
//     const Arraylibros = useSelector((state) => state.allBooks);
//     const ArraySearch = useSelector((state) => state.searchData);
//     const Ry = ArraySearch.length > 0 ? ArraySearch : Arraylibros
//     const librosTotal = Arraylibros.length;
//     const totalPaginas = Math.ceil(
//         Ry.length / cantXPag
//     );
//     const itemsPaginadao = [];

//     const dispatch = useDispatch();

//     const pageChangerHandle = (num) => {
//         dispatch(changePagina(num));
//     };

//     const renderizadoItemsPaginado = () => {
//         for (let pagina = 1; pagina <= totalPaginas; pagina++) {
//             itemsPaginadao.push(
//                 <Pagination.Item
//                     key={pagina}
//                     active={pagina === PagActual}
//                     onClick={() => pageChangerHandle(pagina)}
//                 >
//                     {pagina}
//                 </Pagination.Item>
//             );
//         }
//         return itemsPaginadao;
//     };

//     return (
//         <div>
//             <Pagination>
//                 {PagActual > 1 && (
//                     <Pagination.First onClick={() => pageChangerHandle(1)} />
//                 )}
//                 {PagActual > 1 && (
//                     <Pagination.Prev
//                         onClick={() => pageChangerHandle(PagActual - 1)}
//                     />
//                 )}
//                 {renderizadoItemsPaginado()}
//                 {PagActual !== totalPaginas && (
//                     <Pagination.Next
//                         onClick={() => pageChangerHandle(PagActual + 1)}
//                     />
//                 )}
//                 {PagActual !== totalPaginas && (
//                     <Pagination.Last
//                         onClick={() => pageChangerHandle(totalPaginas)}
//                     />
//                 )}
//             </Pagination>
//         </div>
//     );
// };
import React from "react";
import { NavLink } from "react-router-dom";

export const Paginado = ({ booksPerPage, totalBooks, paginate, currentPage, previus, next }) => {
    
    const lastPage = Math.ceil(totalBooks / booksPerPage)
    
    const pageNumbers = [];
    for (let i = 1; i <= lastPage; i++) { 
        pageNumbers.push(i); //pusheo cada uno de los numeros de pagina
    }
    
    return (
        <nav>
            <ul>
                {pageNumbers.map((number) => (
                    <li key={number}> 
                        <NavLink to={number}  onClick={() => paginate(number)}> 
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}