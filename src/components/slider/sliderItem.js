import React from 'react';
import CYComponent from '../base/index';

class SliderItem extends CYComponent {
  render() {
    const { count, item } = this.props;
    const width = `${(100 / count)}%`;
    // console.log('width', width);
    return (
      <li className="slider-item" style={{ width }}>
        <img src={item.src} alt="item.alt" />
      </li>
    );
  }
}

export default SliderItem;
