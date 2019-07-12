import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import booksReducer from './reducers/BooksReducer'
import authorsReducer from './reducers/AuthorsReducer'


const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
})

// passed in the rootReducer that I created in my combineReducers method in manageAuthorsAndBooks.js
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
