import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CYComponent from '../base/index';
import './style.less';
import Img from '../list-default/images/chenyu.png';

// 模拟侧边栏的数据
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
  { name: 'cccgg' },
  { name: '11111' },
  { name: '2222' },
  { name: '333' },
  { name: '4444' },
  { name: '555' },
  { name: '666' },
  { name: '777' },
  { name: '8888' },
  { name: '999' },
  { name: '10000' },
];
class SideBar extends CYComponent {
  render() {
    // const className = this.classname('side-bar');
    // const sideList = sideRes;
    console.log('this.props.active', this.props.active);
    const { active } = this.props;
    return (
      // {`slider-dot ${(i === nowLocal ? 'slider-dot-selected' : ' ')}`
      <div className={ active ? "side-bar show-sidebar" : "side-bar"}>
        {/* 侧边栏的头部 */}
        <a>
          <div className="side-bar-header">
            <div className="user">
              <img src={Img} alt="avatar" />
              <span>chenyu</span>
              <a><i className="iconfont home">&#xe606;</i></a>
            </div>
            <div className="collection">
              <i className="iconfont">&#xe86e;</i>
              <span>我的收藏</span>
            </div>
            <div className="download">
              <i className="iconfont">&#xe613;</i>
              <span>离线下载</span>
            </div>
          </div>
        </a>
        {/* 侧边栏列表 */}
        <ul className="side-bar-list">
          {
            sideRes.map(item =>
              <a key={item.name}>
                <li>
                  <p>{item.name}</p>
                  <span className="iconfont addIcon">&#xe6df;</span>
                </li>
              </a>)
          }
          </ul>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  active: state.sidebar.active,
});

export default connect(
  mapStateToProps,
)(SideBar);

