import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import movieDataReducer from "./movie_data_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  data: movieDataReducer
});

export default rootReducer;
