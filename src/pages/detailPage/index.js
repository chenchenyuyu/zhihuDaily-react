import React from 'react';
// import { connect } from 'react-redux';
import CYComponent from 'components/base/index';
import DetailHeader from '../../components/detail-header';
import DetailContent from '../../components/detail-content';

class DetailPage extends CYComponent {
  render() {
    return(
      <div>
        <DetailHeader />
        <DetailContent />
      </div>
    );
  }
}

export default DetailPage;



