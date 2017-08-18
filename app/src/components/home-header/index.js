import React from 'react';
import CYComponent from '../base/index';
import './style.less';

class CommonHeader extends CYComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const className = this.classname('home-header');
    return (
      <div className={className}>
        <div className="header-icon"><i className="iconfont">&#xe603;</i></div>
        <div className="header-cont"><p>123</p></div>
      </div>
    );
  }
}

export default CommonHeader;
