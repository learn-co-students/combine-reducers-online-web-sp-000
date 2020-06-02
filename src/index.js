import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';


//const store = createStore(manageAuthorsAndBooks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);
ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);

// For learning purposes, our two reducers are in the same file, but it is common to separate each reducer into its own file. You could then either import each reducer into a new file, something like reducers/rootReducer.js, where combineReducer is called. Or, alternatively, you could include combineReducer in your src/index.js file. For example:
// import authorsReducer from './reducers/authorsReducer';
// import booksReducer from './reducers/booksReducer';
//
// const rootReducer = combineReducers({
//   books: booksReducer,
//   authors: authorsReducer
// })

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//
// ...
