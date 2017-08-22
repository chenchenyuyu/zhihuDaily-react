import React from 'react';
import CYComponent from '../base/index';

class SliderArrows extends CYComponent {
  handleArrowClick(option) {
    this.props.turn(option);
  }
  render() {
    return (
      <div className="slider-arrows-wrap">
        <span
          className="slider-arrow slider-arrow-left"
          onClick={this.handleArrowClick.bind(this, -1)}
        >
          &lt;
        </span>
        <span
          className="slider-arrow slider-arrow-right"
          onClick={this.handleArrowClick.bind(this, 1)}
        >
          &gt;
        </span>
      </div>
    );
  }
}

export default SliderArrows;
