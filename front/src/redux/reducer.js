import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE, GET_ALL_BOOKS, SORT_BY_PRICE, SORT_BY_RATING, SEARCH_BY_NAME_OR_AUTHOR } from './action';

// Initial state
const initialState = {
  loading: false,
  data: null,
  error: null,
  books: [],
  allBooks: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload
      };

    case SORT_BY_PRICE:
      let sortPriceArray = action.payload === 'Asc' ? state.books.sort((a, b) => {
        return a.price - b.price
      }) :
      state.books.sort((a, b) => {
        return b.price - a.price
      });
      return {
        ...state,
        books: [...sortPriceArray]
      }
    //el case SORT_BY_RATING esta hecho en base al precio, ya que aun no hay reseñas
    case SORT_BY_RATING:
      let sortRatingArray = action.payload === 'Asc' ? state.books.sort((a, b) => {
        return a.price - b.price
      }) :
      state.books.sort((a, b) => {
        return b.price - a.price
      });
      return {
        ...state,
        books: [...sortRatingArray]
      }
      
      case SEARCH_BY_NAME_OR_AUTHOR:
        return {
          ...state,
          books: action.payload,
        };
      
      default:
      return state;
  }
};

export default reducer;