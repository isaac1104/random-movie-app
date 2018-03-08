import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import fetchMovieDataReducer from "./fetch_movie_data_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  data: fetchMovieDataReducer
});

export default rootReducer;
