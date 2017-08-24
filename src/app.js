import 'core-js/fn/object/assign';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import '../src/common/app.less';
// import { connect } from 'react-redux';
// import thunk from 'redux-thunk';
// import {createStore, applyMiddleware } from 'redux';
import axios from 'axios';
// import IndexPage from './pages/indexPage/index';
import ListDefault from 'components/list-default/index';
// import { pageUrl } from './utils/url';
import SidePage from "./pages/sidePage/index";
// const store = createStore(reducer, applyMiddleware(thunk));
window.axios = axios;

// const pages = [
//   {
//     link: pageUrl('daily/indexPage/'),
//     page: IndexPage,
//   },
// ];
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={(props) => (
            <SidePage {...props}>
              <Switch>
                <Route path='/list' component={ListDefault} />
              </Switch>
            </SidePage>
          )}/>
        </Router>
      </div>
    )

  }

}



export default App;
