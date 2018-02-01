import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BookContainer from '../../containers/book_container';
import Books from '../books.jsx';

const initialState = {
  books: {
    bookList: [{
      author: 'A Author',
      description: 'Test description',
      genre: 'novel',
      releaseDate: '1999-01-01',
      thumbnail: 'https://test-image.jpg',
      title: 'Test Title Old',
      id: '123'
    },
    {
      author: 'B Author',
      description: 'Test description',
      genre: 'novel',
      releaseDate: '2009-01-01',
      thumbnail: 'https://test-image.jpg',
      title: 'Test Title New',
      id: '123'
    }]
  }
};

describe('BookContainer', () => {
  const mockStore = configureStore()
  let store, container

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<BookContainer store={store} /> )  
  })

  it('should render the container', () => {
    expect(container.length).to.equal(1)
  });

  it('matches with initialState', () => {
    expect(container.prop('books')).to.equal(initialState.books)
  });
});

describe('Books Component', () => {
  let wrapper;
  const mockGetBooks = jest.fn();

  it('should call the mock get books function', () => {
    wrapper = shallow(<Books onGetBooks={mockGetBooks} books={initialState.books} match={{ path: '/' }} />)
    expect(mockGetBooks.mock.calls.length).to.equal(1)
  });

  it('should render the Books Component', () => {
    wrapper = shallow(<Books onGetBooks={mockGetBooks} books={initialState.books} match={{ path: '/' }} />)
    expect(wrapper).to.have.length(1)
  });

  it('should render a grid item for each book', () => {
    wrapper = shallow(<Books onGetBooks={mockGetBooks} books={initialState.books} match={{ path: '/releaseDate' }} />)
    expect(wrapper.find('.grid-item')).to.have.length(2)
  });

});
