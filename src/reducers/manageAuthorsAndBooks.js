// export default function bookApp(state = {authors: [], books: []}, action) {
//     let idx;
//
//     switch (action.type) {
//     case "ADD_BOOK":
//         return {
//             ...state,
//             books: [...state.books, action.book]
//         };
//
//     case "REMOVE_BOOK":
//         idx = state.books.findIndex(book => book.id === action.id);
//
//         return {
//             ...state,
//             books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
//         };
//
//     case "ADD_AUTHOR":
//         return {
//             ...state,
//             authors: [...state.authors, action.author]
//         };
//
//     case "REMOVE_AUTHOR":
//         idx = state.authors.findIndex(author => author.id === action.id);
//
//         return {
//             ...state,
//             authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]
//         };
//
//     default:
//         return state;
//     }
// }

/**

Your state object starts out with two top-level keys, each pointing to an array.

// NOTE`
when you update one part of state you're still using the spread operator on other parts.

For example, in the "ADD_AUTHOR" case, you add action.author to the authors array,
but you also use the spread operator to create a new book array.

This is because both Object.assign() and the spread operator only create shallow copies of objects.

If you leave out books: [...state.books] a  new reference to the old state.books array
will be used, not a new copy of the array.

By referencing the old state, you are no longer maintaining an immutable state.

// NOTE`
The official redux documentation goes into further detail on the benefits of immutability,
discusses this exact issue, and provides further examples of how to properly
use the spread operator to deeply copy nested data.

**/

import { combineReducers } from "redux";
import uuid from "uuid";

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

    /** code change **/
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

/**

Through combineReducers(),
you're telling Redux to produce a reducer which will return a state that has both:
a key of books with a value equal to the return value of the booksReducer() and
a key of authors with a value equal to the return value of the authorsReducer().

If you look at the booksReducer() and the authorsReducer()
you will see that each returns a default state of an empty array.

Since you've changed the default export of manageAuthorsAndBooks.js, in index.js,
you don't need to change anything with `createStore`
unless you wanted to update names you've already assigned.

code change:
In the new "ADD_BOOK" case,
we're checking to see if an `authorName` matches
with the name dispatches from the BookInput component.

If the name already exists, state is returned unchanged.
If the name is not present, it is added to the author array.

Use the example above to modify the `manageAuthorsAndBooks` reducer
and you can see the effect.

You have two separate forms, one for adding just authors, and one that adds books and authors.

NOTE:
We're using a useful package, `uuid`, to handle unique ID generation.

With this refactor, since you'e creating an author ID
from within the reducer instead of in AuthorInput.js,
you need to import it here as well.

**/
