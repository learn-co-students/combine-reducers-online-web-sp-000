import booksReducer from './booksReducer'
import authorsReducer from './authorsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	authors: authorsReducer,
	books: booksReducer
});

export default rootReducer;