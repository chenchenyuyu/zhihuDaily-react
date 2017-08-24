import React from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
import CYComponent from '../base/index';
import './style.less';
import Img from '../../chenyu.png';

class SideBar extends CYComponent {
  render() {
    const className = this.classname('side-bar');
    const sideList = this.props.sideList;
    return (
      <div className={className}>
        {/* 侧边栏的头部 */}
        <Link>
          <div className="side-bar-header">
            <div className="user">
              <img src={Img} alt="avatar" />
              <span>chenyu</span>
              <Link to="/"><i className="iconfont home">&#xe606;</i></Link>
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
        </Link>
        {/* 侧边栏列表 */}
        <ul className="side-bar-list">
          {
            sideList.map(item =>
              <Link key={item.name}>
                <li>
                  <p>{item.name}</p>
                  <span className="iconfont addIcon">&#xe6df;</span>
                </li>
              </Link>)
          }
        </ul>

      </div>
    );
  }
}

export default SideBar;

