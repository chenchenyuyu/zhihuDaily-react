import 'core-js/fn/object/assign';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
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
  // 注意嵌套路由当中Switch的使用
  render() {
    return (
      <div>
        <Router>
          <div>
            <SidePage>
            <Route exact path='/' component={ListDefault} />
            </SidePage>
            <Route path='/detail/:id' component={DetailPage} />
            <Redirect to='/' />
          </div>
        </Router>
      </div>
    )

  }

}



export default connect()(App);
