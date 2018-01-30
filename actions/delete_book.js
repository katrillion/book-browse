import ActionTypes from '../constants/action_types';
import database from './database';
import { getBooks } from './get_books';

export function removeFromLibrary(bookId) {
  return dispatch => {
    dispatch(deleteBookRequestedAction());
    database.ref().child(`books/${bookId}`).remove()
    .then(() => {
      dispatch(deleteBookFulfilledAction({ bookId }));
      dispatch(getBooks());
    })
    .catch((error) => {
      dispatch(deleteBookRejectedAction());
    });
  }
}

function deleteBookRequestedAction() {
  return {
    type: ActionTypes.DeleteBookRequested
  };
}

function deleteBookRejectedAction() {
  return {
    type: ActionTypes.DeleteBookRejected
  }
}

function deleteBookFulfilledAction(bookId) {
  return {
    type: ActionTypes.DeleteBookFulfilled,
    bookId
  };
}