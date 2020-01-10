import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
// import authorsReducer from './reducers/authorsReducer'; 
// import booksReducer from './reducers/booksReducer';
 
//COMBINED REDUCER CAN ALSO BE ON INDEX.JS AND INCLUDE SEPARATE REDUCERS
// const rootReducer = combineReducers({
//   books: booksReducer,
//   authors: authorsReducer
// })

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
