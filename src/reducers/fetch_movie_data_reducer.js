import { FETCH_MOVIE_DATA, FETCH_DATA_ERROR } from "../actions/types";

const initialState = {
  data: [],
  error: ""
}

function fetchMovieDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: true
      }
    case FETCH_MOVIE_DATA:
      return {
        ...state,
        data: action.payload,
        error: false
      };
    default:
      return state
  }
}

export default fetchMovieDataReducer;
