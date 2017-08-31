import 'core-js/fn/object/assign';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import '../src/common/app.less';
import { connect } from 'react-redux';
import ListDefault from 'components/list-default/index';
// import { pageUrl } from './utils/url';
import SidePage from "./pages/sidePage/index";
import DetailPage from './pages/detailPage/index';

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
          <Switch>
              <Switch>
                <Route exact path='/' component={SidePage(ListDefault)} />
                <Route path='/detail/:id' component={DetailPage} />
                <Redirect to='/' />
              </Switch>
          </Switch>
        </Router>
      </div>
    )

  }

}



export default connect()(App);
