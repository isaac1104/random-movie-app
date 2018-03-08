import { FETCH_MOVIE_DATA } from "./types";
import axios from "axios";
import keys from "../config/keys";

export const fetchMovieData = title => async dispatch => {
  const key = keys.API_KEY;
  const request = await axios.get(`https://www.omdbapi.com/?apikey=${key}&t=${title}`);
  const { data } = request;
  dispatch({ type: FETCH_MOVIE_DATA, payload: data });
  console.log(data);
}
