import React from 'react';
import { connect } from 'dva';
import CYComponent from '../base/index';
import './style.less';

class HomeHeader extends CYComponent {
  render() {
    const className = this.classname('home-header');
    return (
      <div className={className}>
        <div className="home-header-left">
          <i className="iconfont">&#xe890;</i>
          <span>首页</span>
        </div>
        <div className="home-header-right">
          <i className="iconfont icon">&#xe71f;</i>
          <i className="iconfont">&#xe619;</i>
        </div>
      </div>
    );
  }
}

export default connect()(HomeHeader);
