import { combineReducers } from "redux";
import authorsReducer from './authorReducer';
import booksReducer from './bookReducer';
 
const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});
 
export default rootReducer;

