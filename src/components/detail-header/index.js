import React from 'react';
import { connect } from 'react-redux';
import CYComponent from '../base/index';
import './style.less';

class DetailHeader extends CYComponent {

  render() {
    const className = this.classname('detail-header');
    return (
      <div className={className}>
        <div className="detail-header-left">
          <div className="header-icon"><i className="iconfont">&#xe8b5;</i></div>
        </div>
        <div className="detail-header-right">
          <div className="header-icon"><i className="iconfont">&#xe86f;</i></div>
          <div className="header-icon"><i className="iconfont">&#xe86e;</i></div>
          <a>
            <div className="header-icon">
              <i className="iconfont">&#xe870;</i>
            </div>
          </a>
          <div className="header-icon"><i className="iconfont">&#xe872;</i></div>
        </div>
      </div>

    );
  }
}

export default connect()(DetailHeader);
