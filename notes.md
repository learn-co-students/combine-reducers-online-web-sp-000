# Redux: combineReducers()

**combineReducers()**
delegates different pieces of state to separate reducer functions.

**Objectives of Lab**
1. Keep track of all the books we've read: title, author, description.
2. Keep track of the authors who wrote these books.

**Application State Structure**
this app will need a state object that stores two types of information:

1. All the books, in an array
2. All authors, also in an array

Each of these types of information - all our books, and the authors -
should be represented on your store's state object.

Think of your store's state structure as a database.

We will represent this as a belongs to/has many relationship, in that:
a book belongs to an author and an author has many books.

This means each @Author would have its own @id,
and each @Book would have an @authorId as a foreign key.

Example: see manageAuthorsAndBooks.js

**Dispatching Actions**
The combineReducer() function returns one large reducer.

```js

function reducer(state = {authors: [], books: []}, action) {
    let idx

    switch (action.type) {
    case "ADD_AUTHOR":
        return [...state, action.author]
    case 'REMOVE_AUTHOR':
        ...
    }
}

```
Because of this, you can dispatch actions the same as always:

```js

// will hit your switch statement in the reducer and add a new author
store.dispatch({ type: 'ADD_BOOK', { title: 'Snow Crash', author: 'Neal Stephenson' } });

/** NOTE:
if you want to have more than one reducer respond to the same action, you can.

For example, in your application, when a user inputs information about a book,
the user also inputs the author's name.

That makes it handy if, when a user submits a book with an author,
that author is also added to your author array.

The action dispatched above doesn't have to change.
**/

```

Your @booksReducer can stay the same for now.

However, in @authorsReducer, you can also include a switch case for "ADD_BOOK":

```js

import uuid from "uuid";

function authorsReducer(state = [], action) {
    let idx;

    switch (action.type) {
    case "ADD_AUTHOR":
        return [...state, action.author];

    case "REMOVE_AUTHOR":
        idx = state.findIndex(book => book.id === action.id);
        return [...state.slice(0, idx), ...state.slice(idx + 1)];

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

```

For learning purposes, your two reducers are in the same file,
but it is common to separate each reducer into its own file.

You could then either import each reducer into a new file,
something like reducers/rootReducer.js, where combineReducer is called.

Or, alternatively, you could include combineReducer in your src/index.js file.

For example:

```js

// index.js

import authorsReducer from './reducers/authorsReducer';
import booksReducer from './reducers/booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

...

```

In React/Redux apps where you're using and storing many resources in our store,
keeping reducers separated helps us organize code and separate concerns.

Actions can cause multiple reducers to modify their own state,
but you can still keep all modifications to a particular resource within its own separate file.
