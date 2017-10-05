import React from 'react';
// import { connect } from 'react-redux';
import CYComponent from 'components/base/index';
import './style.less';

class DetailContent extends CYComponent {
  render() {
    return(
      <div className="detail-main-box">
         <div className="detail-img-box">
           <div className="detail-mask"/>
           <h1 className="detail-title">这是标题</h1>
           <p className="detail-image-source">这是段落</p>
         </div>
      </div>
    );
  }
}

export default DetailContent;



