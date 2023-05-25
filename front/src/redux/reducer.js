import { 
  GET_ALL_BOOKS, 
  SORT_BY_PRICE, 
  SORT_BY_RATING, 
  GET_BOOKSPAGE, 
  CHANGE_PAGINA, 
  SEARCH_BY_NAME_OR_AUTHOR,
  SET_DETAIL, 
  FILTER_BY_GENRE, 
  FILTER_AUTHOR,
  POST_BOOK,
 // GET_REVIEWS_BOOK,
} from './action';


// Initial state
const initialState = {
  //detail_data es en donde se guarda la data para renderizar en detail, tanto del searchbar como al clickear una portada. 
  detail_data: undefined,
  //slice del Allbooks con la pagina pedida
  booksPage: [],
  //Representa el numero de pagina que se renderiza en Posters.
  paginaActual: 1,
  //books sirve para renderizar los filtrados
  books: [],
  //array original de todos los libros
  allBooks: [],
  //array que trae todas la reseñas de un libro
  reviewsBook: [],
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload
      };

    case CHANGE_PAGINA:
      return {
        ...state,
        paginaActual: action.payload
      };

    case GET_BOOKSPAGE:
      const pageSize = 9;
      const pageNumber = action.payload
      const indiceInicio = (pageNumber - 1) * pageSize;
      const indiceFinal = indiceInicio + pageSize;

      // console.log("pageNumber " + pageNumber)
      // console.log("indiceInicio " + indiceInicio)
      // console.log("indiceFinal " + indiceFinal)
      // console.log()

      return {
        ...state,
        booksPage: state.allBooks.slice(indiceInicio, indiceFinal)
      };

    case SORT_BY_PRICE:
      let sortPriceArray = action.payload === 'Asc' ? state.booksPage.sort((a, b) => {
        return a.price - b.price
      }) :
        state.booksPage.sort((a, b) => {
          return b.price - a.price
        });
      return {
        ...state,
        booksPage: [...sortPriceArray]
      }

    //el case SORT_BY_RATING esta hecho en base al precio, ya que aun no hay reseñas
    case SORT_BY_RATING:
      let sortRatingArray = action.payload === 'Asc' ? state.booksPage.sort((a, b) => {
        return a.price - b.price
      }) :
        state.booksPage.sort((a, b) => {
          return b.price - a.price
        });
      return {
        ...state,
        booksPage: [...sortRatingArray]
      }

    case SEARCH_BY_NAME_OR_AUTHOR:
      return {
        ...state,
        booksPage: action.payload,
         allBooks: action.payload,
      };

    case SET_DETAIL:
      return {
        ...state,
        detail_data: action.payload,
      };

    case FILTER_BY_GENRE:
      {
   // const booksAux = state.allBooks
      // const filterGenre = booksAux.filter(b => b.genders.some(g => g === action.payload))
      // return {
      //   ...state,
      //   allBooks: filterGenre
      // }
      
      let allAux = [...state.books]
      const Filtered = action.payload === 'All' ?
        allAux : allAux.filter(r => {
        //state.allBooks : allAux.filter(r => {
        if (r.genders.length > 0) {
          if (r.genders.find(g => g === action.payload)) return r
        }
      })
     // console.log(Filtered);
    return {
      ...state,
      allBooks: Filtered,
      booksPage: Filtered
    }
      }
   
    case FILTER_AUTHOR:{
      let allAuthors = state.books
      const authorsFiltered = action.payload === 'All' ?
        allAuthors : allAuthors.filter(r => {
        // state.allBooks : allAuthors.filter(r => {
          if (r.authors.length > 0) {
            if (r.authors.find(g => g === action.payload)) return r
          }
        })
      return {
        ...state,
        allBooks: authorsFiltered,
         booksPage: authorsFiltered
      }
    }
    
    case POST_BOOK:
      return { ...state }

    //a descomentar una vez que la action este descomentada
    // case GET_REVIEWS_BOOK:
    //   return {
    //     ...state, 
    //     reviewsBook: action.payload
    //   }

    default:
      return state;
  }
}

export default reducer;