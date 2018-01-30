import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookContainer from './containers/book_container';
import BookDetailContainer from './containers/book_detail_container';
import store from './store/store';
import "./stylesheets/main.scss";

const main = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={BookContainer} />
        <Route path="/detail/:bookId" component={BookDetailContainer} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(main, document.getElementById('container'));