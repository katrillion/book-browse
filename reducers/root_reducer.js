import { combineReducers } from 'redux';
import { bookReducer } from './book_reducer';

const rootReducer = combineReducers({
  books: bookReducer
});

export default rootReducer;