import React, { Component } from 'react';
import AddNew from './add_new.jsx';
import Banner from './banner.jsx';
import BookList from './book_list.jsx'
import { Route, Link, NavLink } from 'react-router-dom';

export default class Books extends Component {

  constructor() {
    super();
    this.state = {
      formVisible: false
    };

    this.handleNewClick = this.handleNewClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  componentDidUpdate() {
    const { match, onFilter } = this.props;
    console.log(match.path); 
  }

  handleNewClick(event) {
    event.preventDefault();
    this.setState({ formVisible: true });
  }

  handleRemoveClick(key, event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onDeleteBooks(key);
  }

  componentDidMount() {
    this.props.onGetBooks();
  }

  sortBooks(books, filter, sort = 'alphabetical') {

    if (!books || books.length === 0) return null;

    let filteredBooks = books;

    if (filter === 'novel' || filter === 'non-fiction') {
      filteredBooks = books.filter((book) => {
        return `/${book.genre}` === filter;
      })
    }

    console.log(filteredBooks)

    //const sortedBooks;

    /*return sortedBooks.map(function (book) {
      return (
        <Link className="col-4 col-lg-2 grid-item" key={book.id} to={`/detail/${book.id}`}>
          <button 
            className="remove ion-close"
            id={book.id}
            onClick={(e) => this.handleRemoveClick(book.id, e)}
          />
          <figure>
            <div
              className="grid-image"
              style={{ backgroundImage: `url(${book.thumbnail})`}}
            />
            <figcaption className="details">
              <span className="fade-out" />
              <p className="title mb-1">{book.title}</p>
              <p className="author mb-1">{book.author}</p>
            </figcaption>
          </figure>
        </Link>
        );
    }, this)*/
  } 

  render() {
    const { bookList } = this.props.books;
    const { match } = this.props;

    this.sortBooks(bookList, this.props.match.path);

    return (
      <div className="books container">

        <nav className="mb-3">
          <NavLink className="custom-nav-link d-inline-block pt-2 mr-3" to="/novel">
            Novels
          </NavLink>
          <NavLink className="custom-nav-link d-inline-block pt-2 mr-1" to="/non-fiction">
            Non-fiction
          </NavLink>

          <div className="dropdown d-inline-block align-top">
            <button className="btn btn-link custom-nav-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to={`${match.url}/reverseAlphabetical`}>A - Z</Link>
              <Link className="dropdown-item" to={`${match.url}/reverseAlphabetical`}>Z - A</Link>
              <Link className="dropdown-item" to={`${match.url}/release`}>Release Date</Link>
            </div>
          </div>
        </nav>
        
        <Banner
          text="These books were made for reading"
          textWidth="narrow"
          bgColor="#FFCDE2"
        />

        { this.state.formVisible && <AddNew onAddTitle={this.props.onAddTitle} /> }

        <div className="row mt-5">
          

          <Route path={`${match.url}/:sortOrder`} component={BookList} />

          <button
            className="add-new-btn col-4 col-lg-2"
            onClick={this.handleNewClick}
          >
            <div className="content">
              <p className="ion-plus-circled add" />
              <p>Add New Title</p>
            </div>
          </button>
        </div>
      </div>
    );
  }

}