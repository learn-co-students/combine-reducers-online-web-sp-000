import { combineReducers } from "redux";
import booksReducer from './booksReducer';
import authorsReducer from './authorsReducer';

//can create another file rootReducer and import authorsReducer and booksReducer
//through combineReducers Redux produces a reducer which will return a state that has both a key of books and authors with return values of each reducers state  
const rootReducer = combineReducers({
    authors: authorsReducer,
    books: booksReducer
  });
  
  export default rootReducer;
  