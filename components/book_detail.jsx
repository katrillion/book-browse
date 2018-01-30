import React, { Component } from 'react';
import Banner from './banner.jsx'

export default class BookDetail extends Component {
  componentWillMount() {
    this.props.onGetBooks();
  }
  
  render() {
    const { books, match } = this.props;
    const selectedBook = books.bookList && books.bookList.find((book) => {
      return book.id === match.params.bookId
    });
    
    return (
      <div className="book-detail container">
        <Banner
          text="Cancel your plans, this book looks great"
          textWidth="wide"
          bgColor="#B9FFDF"
        />

        {selectedBook &&
          <article className="row mt-5">
            <div className="col-12 col-sm-4">
              <img src={selectedBook.thumbnail} />
            </div>
            
            <div className="col-12 col-sm-8 mt-5 mt-sm-0">
              <h3>{selectedBook.title}</h3>
              <p><strong>{selectedBook.author}</strong> {selectedBook.releaseDate}</p>
  
              <p>{selectedBook.description}</p>
            </div>
          </article>
        }
      </div>
    );
  }
}