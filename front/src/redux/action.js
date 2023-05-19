import axios from 'axios';


// Action types
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SORT_BY_RATING = 'SORT_BY_RATING';

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