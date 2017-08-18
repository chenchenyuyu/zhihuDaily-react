import React from 'react';
import { connect } from 'dva';
import CommonHeader from '../components/home-header';
import styles from './style.css';

function IndexPage() {
  return (
    <div>
      <CommonHeader />
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
