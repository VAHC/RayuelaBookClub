// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getBooksPage, getAllBooks } from "../../redux/action";
// import Card from "./Card";

// export const Posters = () => {
//     //Pagina actual
//     const pagina = useSelector((state) => state.paginaActual);
//     //libros de la pagina array
//     const booksPage = useSelector((state) => state.booksPage);

//     //array de libros filtrados
//     const filteredbooks = useSelector((state) => state.books);

//     //flag para saber si esta activo algun filtro
//     const filterFlag = useSelector((state) => state.filterFlag);

//     //flag para no cargar todos los libros con cada render
//     const [allBooksLoaded, setAllBooksLoaded] = useState(false);

//     const searchData = useSelector((state) => state.searchData);
   

//     const dispatch = useDispatch();

//     useEffect(() => {
//         const booksGet = async () => {
//             if (!allBooksLoaded) {
//                 await dispatch(getAllBooks());
//                 setAllBooksLoaded(true);
//             }
            
//             dispatch(getBooksPage(pagina));
//         };
//         booksGet();
//     }, [pagina]);

//     const renderConditional = () => {
//         let renderElements = undefined;

//         if (filterFlag) {
//             searchData.length > 0
//                 ? (renderElements = searchData
//                     .filter((book) => book.id !== 58)
//                     .map((book, index) => {
//                       // if(book.deleted === true) return null;
//                       return <Card book={book} key={index} />;
//                   }))
//                 : (renderElements = filteredbooks
//                     .filter((book) => book.id !== 58)
//                     .map((book, index) => {
//                       // if(book.deleted === true) return null;
//                       return <Card book={book} key={index} />;
//                   }));
//         } else {
//             renderElements = booksPage
//                 .filter((book) => book.id !== 58)
//                 .map((book, index) => {
//                 // if(book.deleted === true) return null;
//                 return <Card book={book} key={index} />;
//             });
//         }
//         return renderElements;
//     };

//     return renderConditional();
// };
import React from "react";
import  BookCard  from "./Card";

export const Posters = ({currentBooks}) => {
console.log(currentBooks);
    return (
        <div>
            {currentBooks && currentBooks.map((book, index) => ( //uso currentBooks para que renderize solo los books de esa pagina
            <BookCard
              id={book.id}
              title={book.title}
              price={book.price}
              image={book.image}
              description={book.description}
              authors={book.authors}
              genders={book.genders}
              deleted={book.deleted} 
              reviews={book.reviews}
              key={index}
            />
          ))}
        </div>
  )
}
