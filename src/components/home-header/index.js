import React from 'react';
import { connect } from 'react-redux';
import CYComponent from '../base/index';
import { toggleSidebar } from "../../redux/actions/index";
import './style.less';

class HomeHeader extends CYComponent {
  constructor(props) {
    super(props);
    this.autoBind('changeMode', 'toggleSidebar');
  }
  changeMode() {
    const { night_style } = this.props;
    if (night_style) {
      window.document.getElementById('app').className = '';
    } else {
      window.document.getElementById('app').className = 'night-style';
    }
  }
  toggleSidebar() {
    if (this.props.dispatch) {
      this.props.dispatch(toggleSidebar());
    }
  }


  render() {
    const { title, iconDisplay } = this.props;
    const className = this.classname('home-header');
    return (
      <div className={className}>
        <div className="home-header-left">
          <i className="iconfont" onClick={this.toggleSidebar}>&#xe890;</i>
          <span>{title}</span>
        </div>
        {(() => {
          if (iconDisplay) {
            return (
              <div className="home-header-right">
                <i className="iconfont icon">&#xe71f;</i>
                <i className="iconfont" onClick={this.changeMode}>&#xe619;</i>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

export default connect()(HomeHeader);
