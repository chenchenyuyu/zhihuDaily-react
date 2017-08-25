import React from 'react';
import { connect } from 'react-redux';
import CYComponent from '../base/index';
import Slider from '../../components/slider/index';
import ListItem from '../../components/list-item';
import { getContentData } from "./actions";
import API from '../../api/index';
import './style.less';
import Img from './images/chenyu.png';

const res = [
  { date: '今日新闻', stories: [{ id: 0, title: '1111', pic: Img }, { id: 1, title: '2111', pic: Img }] },
  { date: '2017-8-1', stories: [{ id: 2, title: '2222', pic: Img }, { id: 3, title: '2222', pic: Img }] },
  { date: '2017-8-2', stories: [{ id: 4, title: '3333', pic: Img }, { id: 5, title: '2222', pic: Img }] },
];

class ListDefault extends CYComponent {
  componentDidMount() {
    const { dispatch }= this.props;
    dispatch(getContentData(API.LATEST_NEWS));
  }
  render() {
    // const dataList = res;
    // const { dispatch, all_stories } = this.props;
    return (
      <div className="main-list">
        <Slider
          speed={1.2}
          delay={2.1}
          pause
          auto
          dots
          arrows={false}
        />
        {/* 列表 */}
        {
         res.map((item, index) =>
            <div className="list-box" key={index}>
              <h2>{item.date}</h2>
              <ul key={item.date}>
                {
                  item.stories.map(subItem =>
                    <ListItem key={subItem.id} item={subItem} />,
                  )}
              </ul>
            </div>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  all_stories: state.content_list.all_stories,
  top_stories: state.content_list.top_stories,
});

export default connect(
  mapStateToProps,
)(ListDefault);

