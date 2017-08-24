import 'core-js/fn/object/assign';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import { connect } from 'react-redux';
// import thunk from 'redux-thunk';
// import {createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import IndexPage from './pages/indexPage/index';
// import ListDefault from '../../../components/list-default/index';
import { pageUrl } from './utils/url';

// const store = createStore(reducer, applyMiddleware(thunk));
window.axios = axios;
// Render the main component into the dom

const pages = [
  {
    link: pageUrl('daily/indexPage/'),
    page: IndexPage,
  },
];
console.log('pages', pages);
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
        <Switch>
            {
              pages.map(
                (page, key) => (
                  <Route
                    key={`daily-${key}`}
                    path={page.link}
                    component={page.page}
                  />
              ))
            }
        </Switch>
        </Router>
      </div>
    )

  }

}



export default App;
