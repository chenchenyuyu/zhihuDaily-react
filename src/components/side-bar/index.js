import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CYComponent from '../base/index';
import { toggleSidebar } from '../../redux/actions/index';
import './style.less';
import Img from '../list-default/images/chenyu.png';

// 模拟侧边栏的数据
const sideRes = [
  { name: 'aaa', id: 0},
  { name: 'bbb', id: 1},
  { name: 'ccc', id: 2},
  { name: 'ddd', id: 3},
  { name: 'bb', id: 4},
  { name: 'cc', id: 5},
  { name: 'aa', id: 6},
  { name: 'fdfbb', id:7},
  { name: 'ccdff', id:8},
  { name: 'aaddf', id:9},
  { name: 'bbbdd', id:10},
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
  constructor(props) {
    super(props);
    this.autoBind('toggleSidebar');
  }
  toggleSidebar() {
    const { dispatch } = this.props;
    dispatch(toggleSidebar());
  }

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
              <Link to='/'><i className="iconfont home">&#xe606;</i></Link>
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
              <Link key={item.name} to={`/theme/${item.id}`}>
                <li onClick={this.toggleSidebar}>
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
const mapStateToProps = (state, ownProps) => ({
  active: state.sidebar.active,
});

export default connect(
  mapStateToProps,
)(SideBar);

