import { connect } from 'react-redux';
import Books from '../components/books.jsx';
import { getBooks } from '../actions/get_books';
import { addToLibrary } from '../actions/add_book';
import { removeFromLibrary } from '../actions/delete_book';

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetBooks: () => dispatch(getBooks()),
    onAddTitle: (bookInfo) => dispatch(addToLibrary(bookInfo)),
    onDeleteBooks: (bookId)  => dispatch(removeFromLibrary(bookId))
  };
}

const BookContainer = connect(mapStateToProps, mapDispatchToProps)(Books);

export default BookContainer;