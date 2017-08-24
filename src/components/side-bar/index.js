import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import CYComponent from '../base/index';
import './style.less';
import Img from '../list-default/images/chenyu.png';

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
class SideBar extends CYComponent {
  render() {
    const className = this.classname('side-bar');
    // const sideList = sideRes;
    return (
      <div className={className}>
        {/* 侧边栏的头部 */}
        <Link to="/theme">
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
            sideRes.map(item =>
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

