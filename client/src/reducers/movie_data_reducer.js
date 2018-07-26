import { REQUEST_MOVIE_DATA, RECEIVE_MOVIE_DATA, MOVIE_DATA_ERROR } from '../actions/types';

const INITIAL_STATE = {
  movieData: [],
  isFetching: false,
  error: false
};

function movieDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_MOVIE_DATA:
      return {
        ...state,
        isFetching: action.payload,
        error: false
      };
    case RECEIVE_MOVIE_DATA:
      return {
        ...state,
        movieData: action.payload,
        isFetching: false,
        error: false
      };
    case MOVIE_DATA_ERROR:
      return {
        ...state,
        movieData: action.payload,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}

export default movieDataReducer;
