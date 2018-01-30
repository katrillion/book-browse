import ActionTypes from '../constants/action_types';
import database from './database';

export function addToLibrary(bookInfo) {
  return dispatch => {
    dispatch(addBookRequestedAction());
    let newBookRef = database.ref().child('books').push();
    newBookRef.set(bookInfo)
    .then(() => {
      dispatch(addBookFulfilledAction({ bookInfo }));
    })
    .catch((error) => {
      dispatch(addBookRejectedAction());
    });
  }
}

function addBookRequestedAction() {
  return {
    type: ActionTypes.AddBookRequested
  };
}

function addBookRejectedAction() {
  return {
    type: ActionTypes.AddBookRejected
  }
}

function addBookFulfilledAction(bookInfo) {
  return {
    type: ActionTypes.AddBookFulfilled,
    bookInfo
  };
}