import 'core-js/fn/object/assign';
import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
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

const pages = [
  {
    link: pageUrl('daily/indexPage/'),
    page: IndexPage,
  }

];
console.log('pages',pages);
render(
<div>
  <Switch>
    {
      pages.map((page, key) => (
        <Route
          key={`daily-pages-${key}`}
          path={page.link}
          component={page.page}
        />
      ))
    }
  </Switch>
</div>
  ,document.getElementById('app'));
