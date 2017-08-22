import 'core-js/fn/object/assign';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { render } from 'react-dom';
// import thunk from 'redux-thunk';
// import {createStore, applyMiddleware } from 'redux';
import axios from 'axios';
// import { Provider } from 'react-redux';
import IndexPage from './pages/indexPage';
import { pageUrl } from './utils/url';

// const store = createStore(reducer, applyMiddleware(thunk));
window.axios = axios;
// Render the main component into the dom
class App extends React.Component {

  render() {
    const pages = [
      {
        link: pageUrl('daily/indexPage/'),
        page: IndexPage,
      }

    ];
// console.log('pages', IndexPage);
    const children = [];
    pages.forEach((page) => {
      children.push(
        <Route
          key={children.length}
          path={page.link}
          component={page.page}
        />,
      );
    });
    console.log('children', children);
    return (
      <div>
        <Switch>
          <Router>
            {children}
          </Router>
        </Switch>
      </div>
    )

  }

}



export default connect()(App);
