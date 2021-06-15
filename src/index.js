import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import authorsReducer from './reducers/manageAuthorsAndBooks';
import booksReducer from './reducers/manageAuthorsAndBooks';
import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
})

ReactDOM.render(
  <Provider store={rootReducer}>
    <App store={rootReducer}/>
  </Provider>,
  document.getElementById('root')
);
