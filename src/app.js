import 'core-js/fn/object/assign';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import '../src/common/app.less';
import { connect } from 'react-redux';
import ListDefault from 'components/list-default/index';
// import { pageUrl } from './utils/url';
import SidePage from "./pages/sidePage/index";


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
            <SidePage>
              <Switch>
                <Route exact path='/' component={ListDefault} />
              </Switch>
            </SidePage>
        </Router>
      </div>
    )

  }

}



export default connect()(App);
