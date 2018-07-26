import { REQUEST_MOVIE_DATA, RECEIVE_MOVIE_DATA, MOVIE_DATA_ERROR } from "./types";
import axios from "axios";

const requestMovieData = () => ({
  type: REQUEST_MOVIE_DATA,
  payload: true
});

const receiveMovieData = data => ({
  type: RECEIVE_MOVIE_DATA,
  payload: data
});

const movieDataError = data => ({
  type: MOVIE_DATA_ERROR,
  payload: data
});

export const fetchMovieData = title => async dispatch => {
  dispatch(requestMovieData());
  const request = await axios.get('/api/movie_data', {
    params: {
      title
    }
  });
  const { data } = request;
  if (data.Error) {
    dispatch(movieDataError(data));
  } else {
    dispatch(receiveMovieData(data));
  }
};
