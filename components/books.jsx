import React, { Component } from 'react';
import AddNew from './add_new.jsx';
import Banner from './banner.jsx';
import { Route, Link, NavLink } from 'react-router-dom';

const sortOrder = {
  alphabetical: function(a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  },
  reverseAlphabetical: function(a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA > titleB) {
      return -1;
    }
    if (titleA < titleB) {
      return 1;
    }
    return 0;
  },
  releaseDate: function(a, b) {
    return Date.parse(b.releaseDate) - Date.parse(a.releaseDate);
  }
};

export default class Books extends Component {

  constructor() {
    super();
    this.state = {
      formVisible: false,
      sortedBooks: [],
      filter: undefined,
    };

    this.handleNewClick = this.handleNewClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.addFilter = this.addFilter.bind(this);
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

  addFilter(filter) {
    this.setState({ filter });
  }

  sortBooks(books, filter, sortStyle = 'alphabetical') {

    sortStyle = sortStyle.replace(/^\/|\/$/g, '');
    if (!books || books.length === 0) return null;
    let filteredBooks = [ ...books ];

    if (filter) {
      filteredBooks = filteredBooks.filter((book) => {
        return book.genre === filter;
      })
    }

    const sortedBooks = filteredBooks.sort(sortOrder[sortStyle]);
    return this.renderBooks(sortedBooks);
  }

  renderBooks(sortedBooks) {
    return sortedBooks.map(function (book) {
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
    }, this)
  }

  render() {
    const { bookList } = this.props.books;
    const { match } = this.props;

    return (
      <div className="books container">
        <nav className="mb-3">
          <button 
            onClick={(e) => this.addFilter('novel', e)}
            className={`custom-nav-link d-inline-block btn-link mr-3 ${this.state.filter === 'novel' ? 'active' : ''}`}>
            Novels
          </button>
          <button
            onClick={(e) => this.addFilter('non-fiction', e)}
            className={`custom-nav-link d-inline-block btn-link mr-1 ${this.state.filter === 'non-fiction' ? 'active' : ''}`}>
            Non-fiction
          </button>

          <div className="dropdown d-inline-block align-top">
            <button className="btn btn-link custom-nav-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/alphabetical">A - Z</Link>
              <Link className="dropdown-item" to="/reverseAlphabetical">Z - A</Link>
              <Link className="dropdown-item" to="/releaseDate">Newest First</Link>
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

          { this.sortBooks(bookList, this.state.filter, match.path) }

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