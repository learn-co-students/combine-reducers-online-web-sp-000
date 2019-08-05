import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

export default rootReducer

function booksReducer(state = [], action){
  switch (action.type) {
    case "ADD_BOOK":
      return [...state.books, action.book];

    case "REMOVE_BOOK":
      return state.books.filter(book => book.id !== action.id);

    default:
      return state;
  }
}

function authorsReducer(state = [], action){
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      return state.authors.filter(author => author.id !== action.id);
      
    default:
      return state;
  }
}