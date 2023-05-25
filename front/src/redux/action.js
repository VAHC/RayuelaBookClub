import axios from 'axios';


// Action types

export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const GET_BOOKSPAGE = 'GET_BOOKPAGE';
export const CHANGE_PAGINA = 'CHANGE_PAGINA';
export const SEARCH_BY_NAME_OR_AUTHOR = 'SEARCH_BY_NAME_OR_AUTHOR';
export const SET_DETAIL = "SET_DETAIL";
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_AUTHOR = 'FILTER_AUTHOR';
export const POST_BOOK = "POST_BOOK";
//export const GET_REVIEWS_BOOK = 'GET_REVIEWS_BOOK';



export const getAllBooks = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/books');
    const allBooks = response.data;
    dispatch({ type: GET_ALL_BOOKS, payload: allBooks })
  }
}

//importa los libros de la pagina correspondiente
export const getBooksPage = (pagNum) => {
  return { type: GET_BOOKSPAGE, payload: pagNum }
}

//se encarga de actualizar pagina actual
export function changePagina(pagNum) {
  return {
    type: CHANGE_PAGINA, payload: pagNum }
}

export const sortByPrice = (payload) => {
  return {
    type: SORT_BY_PRICE, payload }
}

export const sortByRating = (payload) => {
  return { type: SORT_BY_RATING, payload }
}

export const searchByNameOrAuthor = (name) => {
  // return async (dispatch) => {
  //   const response = await axios.get(`http://localhost:3001/books?title=${name}`);
  //   const searchArray = response.data;
  //   dispatch({ type: SEARCH_BY_NAME_OR_AUTHOR, payload: searchArray })
  // }
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/books?title=${name}`)
      return dispatch({
        type: SEARCH_BY_NAME_OR_AUTHOR,
        payload: response.data
      })
    } catch (error) {
      console.log(JSON.stringify(error))
    }
  }
}

export const setDetail = (bookObj) => {
  return { type: SET_DETAIL, payload: bookObj }
}

export const genreFiltered = (arr) => {
  return { type: FILTER_BY_GENRE, payload: arr }
}

export const filterAuthor = (value) => {
  return { type: FILTER_AUTHOR, payload: value }
}

export const postBook = (book) => {
  return async function (dispatch) {
      let response = await axios.post('http://localhost:3001/books', book)
      return response
  }
}
//A DESCOMENTAR CUANDO ESTE LA RUTA CREADA EN EL BACK
// export const getReviewsBook = (bookId) => {
//   return async (dispatch) => {
//     const response = await axios.get('http://localhost:3001');
//     const allReviews = response.data;
//     dispatch({ type: GET_REVIEWS_BOOK, payload: allReviews })
//   }
// }