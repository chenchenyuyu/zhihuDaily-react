import React from 'react';
// import { connect } from 'react-redux';
import CYComponent from 'components/base/index';
import HomeHeader from 'components/home-header/index';
import ListDefault from 'components/list-default/index';
import Img from '../../components/list-default/images/chenyu.png';

const res = [
  { date: '今日新闻', stories: [{ id: 0, title: '1111', pic: Img }, { id: 1, title: '2111', pic: Img }] },
  { date: '2017-8-1', stories: [{ id: 2, title: '2222', pic: Img }, { id: 3, title: '2222', pic: Img }] },
  { date: '2017-8-2', stories: [{ id: 4, title: '3333', pic: Img }, { id: 5, title: '2222', pic: Img }] },
];
const sideRes = [
  { name: 'aaa' },
  { name: 'bbb' },
  { name: 'ccc' },
  { name: 'ddd' },
  { name: 'bb' },
  { name: 'cc' },
  { name: 'aa' },
  { name: 'fdfbb' },
  { name: 'ccdff' },
  { name: 'aaddf' },
  { name: 'bbbdd' },
  { name: 'cccggg' },
];
class IndexPage extends CYComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataList: res,
      sideList: sideRes,
    };
  }
  render() {
    const datalist = this.state.dataList;
    // const sideList = this.state.sideList;
    console.log('datalistFU', datalist);
    return (
      <div>
        <HomeHeader />
        <div style={{ marginTop: 40 }}>
          <ListDefault dataList={datalist} />
          {/* <SideBar sideList={sideList} /> */}
        </div>
      </div>
    );
  }

}

export default IndexPage;
