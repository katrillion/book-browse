import { connect } from 'react-redux';
import BookDetail from '../components/book_detail.jsx';
import { withRouter } from 'react-router-dom';
import { getBooks } from '../actions/get_books';

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetBooks: () => dispatch(getBooks())
  };
}


const BookDetailContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(BookDetail));

export default BookDetailContainer;