import React from 'react';
import CYComponent from '../base/index';

class SliderDots extends CYComponent {
  handleDotClick(i) {
    const option = i - this.props.nowLocal;
    this.props.turn(option);
  }

  render() {
    const dotNodes = [];
    const { count, nowLocal } = this.props;
    // console.log('111111', this.props.nowLocal);
    for (let i = 0; i < count; i += 1) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={'slider-dot' + ' ' + (i === nowLocal ? 'slider-dot-selected' : ' ')}
          onClick={this.handleDotClick.bind(this, i)}
        />
      );
    }
   // console.log('dotNodes', dotNodes);
    return (

      <div className="slider-dots-wrap"
        {...dotNodes}
      />
    );
  }
}

export default SliderDots;
