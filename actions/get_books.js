import ActionTypes from '../constants/action_types';
import database from './database';

export function getBooks() {
  return dispatch => {
    dispatch(getBooksRequestedAction());
    return database.ref('/books/').once('value', snap => {
      const books = snap.val();
      dispatch(getBooksFulfilledAction(books))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getBooksRejectedAction());
    });
  }
}

function getBooksRequestedAction() {
  return {
    type: ActionTypes.GetBooksRequested
  };
}

function getBooksRejectedAction() {
  return {
    type: ActionTypes.GetBooksRejected
  }
}

function getBooksFulfilledAction(books) {
  return {
    type: ActionTypes.GetBooksFulfilled,
    books
  };
}