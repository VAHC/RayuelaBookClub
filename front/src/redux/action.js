import axios from 'axios';
import { URL_Railway } from '../../ruta';

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
export const CREATE_USER = "CREATE_USER";
export const FILTER_FLAG = "FILTER_FLAG";
export const RESET_FILTERS = "RESET_FILTERS";
export const GET_GENEROS = "GET_GENEROS";
export const GET_AUTORES = "GET_AUTORES";
export const GET_REVIEWS_BOOK = 'GET_REVIEWS_BOOK';
export const POST_REVIEW = 'POST_REVIEW';
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const GET_REVIEWS_BY_USER = "GET_REVIEWS_BY_USER";
export const PUT_BOOK = "PUT_BOOK";
export const PUT_REVIEW = "PUT_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const DELETE_BOOK = "DELETE_BOOK";
export const UPDATE_USER = "UPDATE_USER";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_ITEMS = "REMOVE_ITEMS";
export const EMPTY_CART = "EMPTY_CART";
export const FILL_CART = "FILL_CART";
export const CREATE_ORDER = "CREATE_ORDER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_USER = "DELETE_USER";
export const FILTER_USER_STATE = "FILTER_USER_STATE";
export const FILTER_USER_PROFILE = "FILTER_USER_PROFILE";
export const GET_ALL_SHOPPING = "GET_ALL_SHOPPING";
export const GET_BOOK_BY_ID = "GET_BOOK_BY_ID";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const CANCEL_SUSCRIPTION = "CANCEL_SUSCRIPTION";
export const EDIT_ORDER = "EDIT_ORDER";
export const FILTER_ORDER_STATE = "FILTER_ORDER_STATE";
export const CREATE_GENRE = "CREATE_GENRE";
export const CREATE_AUTHOR = "CREATE_AUTHOR";

export const getAllBooks = () => {
  return async (dispatch) => {
    const response = await axios.get(`${URL_Railway}/books`);
    const allBooks = response.data;
    dispatch({ type: GET_ALL_BOOKS, payload: allBooks })
  }
}

//importa los libros de la pagina correspondiente
export const getBooksPage = (pagNum) => {
  return { type: GET_BOOKSPAGE, payload: pagNum }
}

//se encarga de actualizar pagina actual
// export function changePagina(pagNum) {
//   return {
//     type: CHANGE_PAGINA, payload: pagNum
//   }
// }

//se encarga de borrar el detalle al cambiar de página
export function changePagina() {
  return {
    type: CHANGE_PAGINA
  }
}

export const sortByPrice = (payload) => {
  return {
    type: SORT_BY_PRICE, payload
  }
}

export const sortByRating = (payload) => {
  return { type: SORT_BY_RATING, payload }
}

export const searchByNameOrAuthor = (name,) => {
  // return async (dispatch) => {
  //   const response = await axios.get(`http://localhost:3001/books?title=${name}`);
  //   const searchArray = response.data;
  //   dispatch({ type: SEARCH_BY_NAME_OR_AUTHOR, payload: searchArray })
  // }
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL_Railway}/books?title=${name}`)
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
    //console.log('entra en la action');
    let response = await axios.post(`${URL_Railway}/books`, book)
    //console.log(response.data);
    return response
  }
}

export const createUser = (user) => {
  return async function (dispatch) {
    let response = await axios.post(`${URL_Railway}/auth/registro`, user)
    return response
  }
}

export const filterFlagToggle = (boolean) => {
  return {
    type: FILTER_FLAG,
    payload: boolean
  }
}

export const resetFilter = () => {
  //console.log("entra el reset a la action de redux")
  return { type: RESET_FILTERS }
}

export const getGeneros = () => {
  return { type: GET_GENEROS }
}

export const getAutores = () => {
  return { type: GET_AUTORES }
}

//trae todas las reviews de un libro
export const getReviewsBook = (bookId) => {
  return async (dispatch) => {
    const response = await axios.get(`${URL_Railway}/books/${bookId}`);
    const allReviews = response.data;
    dispatch({ type: GET_REVIEWS_BOOK, payload: allReviews })
  }
}

export const postReview = (review) => {
  return async (dispatch) => {
    try {
      await axios.post(`${URL_Railway}/reviews`, review)
      dispatch({ type: POST_REVIEW, payload: review })
      return { status: 200, message: 'Success' };
    } catch (error) {
      throw error
    }
  }
}

export const login = (user) => {
  return { type: LOGIN_SUCCESS, payload: user }
}

export const logout = (userlogout) => {
  return async (dispatch) => {
    //const response = await axios.get(`${URL_Railway}/auth/logout`);
    //const userlogout = response.data;
    dispatch({ type: LOGOUT, payload: userlogout })
  }
}

//trae todas las reviews de un usuario
export const getReviewsByUser = (userId) => {
  return async (dispatch) => {
    const response = await axios.get(`${URL_Railway}/users/${userId}`);
    const userReviews = response.data;
    dispatch({ type: GET_REVIEWS_BY_USER, payload: userReviews })
  }
}

// export const modifyBook = (bookEdit) => {
//   //console.log(bookEdit)
//   return async function (dispatch) {
//     await axios.put(`${URL_Railway}/books/putbook`, bookEdit)
//     dispatch({ type: PUT_BOOK })
//   }
// }

export const modifyBook = (bookEdit) => {
  return async (dispatch) => {
    try {
      await axios.put(`${URL_Railway}/books/putbook`, bookEdit)
      dispatch({ type: PUT_BOOK, payload: bookEdit })
      return { status: 200, message: 'Success' };
    } catch (error) {
      throw error
    }
  }
}

export const putReview = (reviewId, review) => {
  return async function (dispatch) {
    let response = await axios.put(`${URL_Railway}/reviews/${reviewId}`, review)
    dispatch({ type: PUT_REVIEW })
    //console.log('la action toma el dispatch');
    return response
  }
}

export const deleteReview = (reviewId) => {
  return async function (dispatch) {
    let response = await axios.put(`${URL_Railway}/reviews/delete/${reviewId}`)
    dispatch({ type: DELETE_REVIEW })
    return response
  }
}

export const deleteBook = async (bookId, dispatch) => {
  //console.log("esta es la action")
  await axios.put(`${URL_Railway}/books/delete/${bookId}`)
  dispatch({ type: DELETE_BOOK })
}

export const updateUser = (user) => {
  return async (dispatch) => {
    try {
      await axios.put(`${URL_Railway}/users`, user);
      dispatch({ type: UPDATE_USER, payload: user });
      return { status: 200, message: 'Success' };
    } catch (error) {
      throw error;
    }
  }
}

export const addToCart = (book) => {
  return (dispatch, getState) => {
    dispatch({ type: ADD_TO_CART, payload: book });
    const updatedCart3 = getState().cart;
    localStorage.setItem('items', JSON.stringify(updatedCart3));
  }
}

export const removeFromCart = (book) => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART, payload: book });
    const updatedCart = getState().cart;
    localStorage.setItem('items', JSON.stringify(updatedCart));
    if (!updatedCart.length) {
      localStorage.removeItem('items');
    }
  }
}

export const removeItems = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_ITEMS, payload: id });
    const updatedCart2 = getState().cart;
    localStorage.setItem('items', JSON.stringify(updatedCart2));
    if (!updatedCart2.length) {
      localStorage.removeItem('items');
    }
  }
}

export const emptyCart = () => {
  return { type: EMPTY_CART }
}

export const fillCart = (dataCart) => {
  //console.log('toma la action');
  return {
    type: FILL_CART,
    payload: dataCart
  }
}

export const createOrder = (order) => {
  return async function (dispatch) {
    let response = await axios.post(`${URL_Railway}/order`, order)
    return response
  }
}

export const getAllUsers = () => {
  return async (dispatch) => {
    const response = await axios.get(`${URL_Railway}/users`);
    const allUsers = response.data;
    dispatch({ type: GET_ALL_USERS, payload: allUsers })
  }
}

export const deleteUser = async (user, dispatch) => {
  // !user.deleted ? { ...user, state: "Blocked", deleted: true } :
  //   const updatedUser =  { ...user, state: "Active", deleted: false };

  // console.log(updatedUser);

  await axios.put(`${URL_Railway}/users/delete/${user.id}`)
  dispatch({ type: DELETE_USER })
}

export const filterProfileUser = (filterValue) => {
  return {
    type: FILTER_USER_PROFILE,
    payload: filterValue
  }
}

export const filterStateUser = (filterValue) => {
  return {
    type: FILTER_USER_STATE,
    payload: filterValue
  }
}
export const getAllShopping = () => {
  return async (dispatch) => {
    const response = await axios.get(`${URL_Railway}/order`);
    const AllShopping = response.data;
    dispatch({ type: GET_ALL_SHOPPING, payload: AllShopping })
  }
}

export const getBookById = (bookId) => {
  return async (dispatch) => {
    const response = await axios.get(`${URL_Railway}/books/${bookId}`);
    const bookById = response.data;
    dispatch({ type: GET_BOOK_BY_ID, payload: bookById })
  }
}

//trae todos los datos de un usuario
export const getUserById = (userId) => {
  return async (dispatch) => {
    const response = await axios.get(`${URL_Railway}/users/${userId}`);
    const user = response.data;
    dispatch({ type: GET_USER_BY_ID, payload: user })
  }
}

export const cancelSuscription = (userId) => {
  return async function (dispatch) {
    //console.log('entra a la action de desuscribir');
    let response = await axios.put(`${URL_Railway}/users/suscription/${userId}`)
    dispatch({ type: CANCEL_SUSCRIPTION })
    return response
  }
}

export const editOrder = async (order, dispatch) => {

  //console.log("🚀 ~ file: action.js:360 ~ editOrder ~ order:", order)
  if (order.state === "Despachada") await axios.put(`${URL_Railway}/order/shipped`, order)
  else await axios.put(`${URL_Railway}/order`, order)

  dispatch({ type: EDIT_ORDER })
}

export const filterOrderState = (estado) => {
  return {
    type: FILTER_ORDER_STATE,
    payload: estado
  }
}

export const createGenre = (input) => {
  return async function (dispatch) {
    let response = await axios.post(`${URL_Railway}/genres`, input)
    dispatch({ type: CREATE_GENRE })
    //console.log(response);
    return response
  }
}

export const createAuthor = (input) => {
  return async function (dispatch) {
    let response = await axios.post(`${URL_Railway}/authors`, input)
    dispatch({ type: CREATE_AUTHOR })
    return response
  }
}

export const updateDetailData = (updatedDetailData) => {
  return {
    type: "UPDATE_DETAIL_DATA",
    payload: updatedDetailData,
  };
};