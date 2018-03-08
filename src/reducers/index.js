import { combineReducers } from "redux";
import fetchMovieDataReducer from "./fetch_movie_data_reducer";

const rootReducer = combineReducers({
  data: fetchMovieDataReducer
});

export default rootReducer;
