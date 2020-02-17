import { combineReducers } from "redux";
import uuid from 'uuid';
 
const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});
 
export default rootReducer;
 
function booksReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
 
    case "REMOVE_BOOK":
      idx = state.findIndex(book => book.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "ADD_AUTHOR":
      let existingBook = state.filter(
        book => book.bookName === action.author.bookName
      );
      if (existingBook.length > 0) {
        return state;
      } else {
        return [...state, { bookName: action.author.bookName, id: uuid() }];
      }
 
    default:
      return state;
  }
}
 
function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];
 
    case "REMOVE_AUTHOR":
      idx = state.findIndex(author => author.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    default:
      return state;
  }
}
