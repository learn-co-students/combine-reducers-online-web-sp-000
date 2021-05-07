import { combineReducers } from "redux";

//can create another file rootReducer and import authorsReducer and booksReducer
//through combineReducers Redux produces a reducer which will return a state that has both a key of books and authors with return values of each reducers state  
const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;

//can create this file separately in ./reducers
function booksReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];

      case "REMOVE_BOOK":
        idx = state.findIndex(book => book.id === action.id)
        return [...state.slice(0, idx), ...state.slice(idx + 1)];

        default: 
        return state;
  }
}

//can create this file separately in ./reducers
function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      idx = state.findIndex(author => author.id === action.id)
        return [...state.slice(0, idx), ...state.slice(idx + 1)];

      default: 
        return state;
  }
}




export default function bookApp(
  //top-level keys 
  state = {
    authors: [],
    books: []
  },
  action
) {
  let idx;
  //reducers
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        //... spread operator 
        authors: [...state.authors],
        books: [...state.books, action.book]
      };

    case "REMOVE_BOOK":
      idx = state.books.findIndex(book => book.id === action.id);
      return {
        ...state,
        authors: [...state.authors],
        books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
      };

    case "ADD_AUTHOR":
      return {
        //here in ...state we are referencing old state.books not a new instance 
        //this is not immutable (meaning the state can be changed)
        ...state,
        authors: [...state.authors, action.author]
      };

    case "REMOVE_AUTHOR":
      idx = state.authors.findIndex(author => author.id === action.id);
      return {
        ...state,
        books: [...state.books],
        authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]
      };

    default:
      return state;
  }
}

// when we couple resources it is not ideal for separation of concerns because we are placing each resource in the same reducer 