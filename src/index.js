
/*      ./src/index.js      */
import { combineReducers } from 'redux';
import { createStore } from "redux";
import rootReducer from "./reducers/manageAuthorsAndBooks";
import uuid from "uuid";

const rootReducer = combineReducers({
    //through combineReducers() we tell Redux to produce a reducer which will return a state that has a key of books w/the return value of booksReducer() and the same for authors
    authors: authorsReducer, 
    books: booksReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//export default rootReducer;
//^^ should be used to keep concerns separate

function booksReducer(state = [], action) {
    let idx; 
    switch(action.type) {
        case 'ADD_BOOK': 
            return [...state, action.book]; 
    
        /* Both Object.assign() and the spread operator only create shallow copies of objects */

        case 'REMOVE_BOOK': 
            idx = state.findIndex(book => book.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idex + 1)];

        default: 
            return state; 
    }
}

function authorsReducer(state = [], action) {
    let idx; 
    switch(action.type) {
        case 'ADD_AUTHOR': 
            return [...state, action.author]; 

        case 'REMOVE_AUTHOR':
            idx = state.findIndex(author => author.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)];

        case "ADD_BOOK":
            //check and see if authorName matches with the name dispatch from the BookInput component and if it does not, add it to the authorArray 
            let existingAuthor = state.filter(author => author.authorName === action.book.authorName);
            if (existingAuthor.length > 0) {
                return state;
            } else {
                return [...state, { authorName: action.book.authorName, id: uuid() }];
                //uuid is a package that generates unique ids 
            }

        default: 
            return state; 
    }
}