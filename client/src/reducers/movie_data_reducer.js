import { REQUEST_MOVIE_DATA, RECEIVE_MOVIE_DATA, MOVIE_DATA_ERROR } from '../actions/types';

const INITIAL_STATE = {
  movieData: [],
  isFetching: false
};

function movieDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_MOVIE_DATA:
      return {
        ...state,
        isFetching: action.payload
      };
    case RECEIVE_MOVIE_DATA:
      return {
        ...state,
        isFetching: false,
        movieData: action.payload
      };
    case MOVIE_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        movieData: action.payload
      };
    default:
      return state;
  }
}

export default movieDataReducer;
