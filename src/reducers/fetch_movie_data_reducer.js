import { FETCH_MOVIE_DATA } from "../actions/types";

const initialState = {
  data: []
}

function fetchMovieDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state
  }
}

export default fetchMovieDataReducer;
