
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;

 function booksReducer(
  state = {
    books: []
  },
  action
) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return {
        books: [state, action.book]
      };

    case "REMOVE_BOOK":
      idx = state.books.findIndex(book => book.id === action.id);
      return {
        books: [...state.slice(0, idx), ...state.slice(idx + 1)]
      };




    default:
      return state;
  }
}


function authorsReducer(
 state = {
   authors: []
 },
 action
) {
 let idx;
 switch (action.type) {
   case "ADD_AUTHOR":
     return {
       authors: [...state, action.author]
     };

   case "REMOVE_AUTHOR":
     idx = state.authors.findIndex(author => author.id === action.id);
     return {
       authors: [...state.slice(0, idx), ...state.slice(idx + 1)]
     };

     case "ADD_BOOK":
  let existingAuthor = state.filter(
    author => author.authorName === action.book.authorName
  );
  if (existingAuthor.length > 0) {
    return state;
  } else {
    return [...state, { authorName: action.book.authorName, id: uuid() }];
  }



   default:
     return state;
 }
}
