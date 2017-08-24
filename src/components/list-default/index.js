import React from 'react';
// import { connect } from 'react-redux';
import CYComponent from '../base/index';
import Slider from '../../components/slider/index';
import ListItem from '../../components/list-item';
import './style.less';

class ListDefault extends CYComponent {
  render() {
    const dataList = this.props.dataList;
    console.log('dddd', dataList);
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
          dataList.map((item, index) =>
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

export default ListDefault;

