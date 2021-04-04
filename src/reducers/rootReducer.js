import authorsReducer from './reducers/authorsReducer';
import booksReducer from './reducers/booksReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;
