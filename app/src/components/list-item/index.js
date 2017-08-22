import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import CYComponent from '../base/index';
import './style.less';

class ListItem extends CYComponent {
  render() {
    const item = this.props.item;
    return (
      <Link className="list-item-wrap">
        <div className="list-item-wrap">
          <li className="list-detail-box">
            <div className="list-content-box">
              <p>{item.title}</p>
            </div>
            {(() => {
              if (item.pic) {
                return (
                  <div className="list-img-box">
                    <img src={item.pic} alt="c" />
                  </div>
                );
              }
            })()}
          </li>
        </div>
      </Link>
    );
  }
}

export default connect()(ListItem);

