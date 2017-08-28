import React from 'react';
import { connect } from 'react-redux';
import CYComponent from '../base/index';
import { toggleSidebar } from "./actions";
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
    const { dispatch } = this.props;
      dispatch(toggleSidebar());
    // console.log('tototooto', toggleSidebar());
  }


  render() {
    const { title, iconDisplay, active} = this.props;
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
        <div onClick={this.toggleSidebar} className={active? "side-mask": ''} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: state.sidebar.active,
});
export default connect(
  mapStateToProps,
)(HomeHeader);
