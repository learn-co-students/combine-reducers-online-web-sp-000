// export const addAuthor = author => {
//   return {
//     type: 'ADD_AUTHOR',
//     author
//   };
// };

// export const removeAuthor = id => {
//   return {
//     type: 'REMOVE_AUTHOR',
//     id
//   };
// };

// export const addBook = book => {
//   return {
//     type: 'ADD_BOOK',
//     book
//   };
// };

// export const removeBook = id => {
//   return {
//     type: 'REMOVE_BOOK',
//     id
//   };
// };

// Through combineReducer, we're telling Redux to produce a reducer which will return a state that has both a key of books with a value equal to the return value of the booksReducer() and a key of authors with a value equal to the return value of the authorsReducer()
// booksReducer() and the authorsReducer() you will see that each returns a default state of an empty array.
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
 
import uuid from "uuid";
// We're using a useful package, uuid, to handle unique ID generation
// With this refactor, since we are creating an author ID from within the reducer instead of in AuthorInput.js, we need to import it here as well.
 
function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];
 
    case "REMOVE_AUTHOR":
      idx = state.findIndex(book => book.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    case "ADD_BOOK":
      // In the new "ADD_BOOK" case, we're checking to see if an authorName matches with the name dispatches from the BookInput component.
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state; //If the name already exists, state is returned unchanged
      } else {
        //  If the name is not present, it is added to the author array.
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }
 
    default:
      return state;
  }
}