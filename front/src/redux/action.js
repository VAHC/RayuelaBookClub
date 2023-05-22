import axios from 'axios';


// Action types
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const GET_BOOKSPAGE = 'GET_BOOKPAGE';
export const CHANGE_PAGINA = 'CHANGE_PAGINA';
export const SEARCH_BY_NAME_OR_AUTHOR = 'SEARCH_BY_NAME_OR_AUTHOR';
export const SET_DETAIL = "SET_DETAIL";
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_AUTHOR = 'FILTER_AUTHOR';


// Action creators
export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = (error) => ({
  type: GET_DATA_FAILURE,
  payload: error,
});

// Thunk action
export const fetchData = () => {
  return (dispatch) => {
    dispatch(getDataRequest());
    axios.get('https://pi-henry-woad.vercel.app/imagen/jsonL.json')
      .then((response) => {
        dispatch(getDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getDataFailure(error.message));
      });
  };
};

//getAllBooks trae todos los libros en un objeto, por ahi se pisa con lo de arriba, 
//pero no estoy teniendo en reducer como manejar el objeto; o almenos yo no lo entiendo
export const getAllBooks = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/books/');
    const allBooks = response.data;
    dispatch({ type: GET_ALL_BOOKS, payload: allBooks })
  }
};

//importa los libros de la pagina correspondiente
export const getBooksPage = (pagNum) => {
  return {
    type: GET_BOOKSPAGE,
    payload: pagNum,
  }
};

//se encarga de actualizar pagina actual
export function changePagina(pagNum) {
  return {
    type: CHANGE_PAGINA,
    payload: pagNum
  }

}

export const sortByPrice = (payload) => {
  return {
    type: SORT_BY_PRICE,
    payload
  }
};

export const sortByRating = (payload) => {
  return {
    type: SORT_BY_RATING,
    payload
  }
}

export const searchByNameOrAuthor = (name) => {
  return async (dispatch) => {
    //cambiar endpoint del get por la ruta del back para el search
    const response = await axios.get(`http://localhost:3001/books?name=${name}`);
    const searchArray = response.data;
    dispatch({ type: SEARCH_BY_NAME_OR_AUTHOR, payload: searchArray })
  }
};

export const setDetail = (bookObj) => {
  return {
    type: SET_DETAIL,
    payload: bookObj
  }
}

export const genreFiltered = (arr) => {
  return {
      type: FILTER_BY_GENRE,
      payload:arr
  }
}

export const filterAuthor = (value) => {
  return { type: FILTER_AUTHOR, payload: value }
}