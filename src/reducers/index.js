import { combineReducers } from 'redux';
import booksReducer from './reducer_books';

const rootReducer = combineReducers({
	books: BooksReducer
});

export default rootReducer;
