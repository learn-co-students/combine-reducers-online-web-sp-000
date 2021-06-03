import { combineReducers } from "redux";
 
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
    case "ADD_BOOK":
      let instancesOfAuthor = state.authors.filter(author.name == action.book.author)
      if (instancesOfAuthor == [nil] || instancesOfAuthor == nil){
        return state
      }
      else{
        return [...state, { authorName: action.book.author }
      }

 
    default:
      return state;
  }
}
