import ActionTypes from '../constants/action_types';

export function bookReducer(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GetBooksRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GetBooksRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting books.',
      });
    }
    case ActionTypes.GetBooksFulfilled: {

      let bookList = [];
      if (action.books) {
        bookList = Object.keys(action.books).map((key) => {
          let bookObject = {};
          bookObject = action.books[key];
          bookObject.id = key;
          return bookObject;
        });
      }

      bookList.sort((a, b) => {
        return a.title > b.title
      });

      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got Books.',
        bookList,
      });
      
      return newState;
    }

    case ActionTypes.GetBooksFulfilled: {
      console.log(bookInfo);
    }

    default:
      return state;
  }
}
