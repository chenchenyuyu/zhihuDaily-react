import React from 'react';
import CYComponent from '../base/index';
import './style.less';

import SliderArrows from './sliderArrows';
import SliderDots from './sliderDots';
import SliderItem from './sliderItem';
import Img1 from './images/demo1.jpg';
import Img2 from './images/demo2.jpg';
import Img3 from './images/demo3.jpg';

const IMAGE_DATA = [
  {
    src: Img1,
    alt: 'img1',

  },
  {
    src: Img2,
    alt: 'img2',
  },
  {
    src: Img3,
    alt: 'img3',
  },
];

class Slider extends CYComponent {
  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0,
    };
    this.autoBind('turn', 'goPlay', 'pausePlay');
  }
  // componentWillUnmount() {
  //   this.pausePlay();
  // }

  turn(n) {
    // console.log('dkhfkhkf', this.state.nowLocal);
    let n0 = this.state.nowLocal + n;
    if (n0 < 0) {
      n0 += this.props.items.length;
    }
    if (n0 >= this.props.items.length) {
      n0 -= this.props.items.length;
    }
    if (this.mount) {
      this.setState({
        nowLocal: n0,
      });
    }
  }
  goPlay() {
    if (this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, this.props.delay * 1000);
    }
  }

  pausePlay() {
    clearInterval(this.autoPlayFlag);
  }

  componentDidMount() {
    this.goPlay();
  }

  render() {
    const count = this.props.items.length;
    const itemNodes = this.props.items.map((item, index) => {
      return <SliderItem item={item} count={count} key={`item${index}`} />;
    });
    const arrowsNode = <SliderArrows turn={this.turn} />;
    const dotsNode = <SliderDots turn={this.turn} count={count} nowLocal={this.state.nowLocal} />;
    const style = {
      left: `${(-100 * this.state.nowLocal)}%`,
      transitionDuration: `${this.props.speed}s`,
      width: `${(this.props.items.length * 100)}%`,
    };
    // console.log('iiii', dotsNode);

    return (
      <div
        className="slider"
        onMouseOver={this.props.pause ? this.pausePlay : null}
        onMouseOut={this.props.pause ? this.goPlay : null}
        ref={(mount) => { this.mount = mount; }}
      >
        <ul style={style}>
          {itemNodes}
        </ul>
        {this.props.arrows ? arrowsNode : null}
        {this.props.dots ? dotsNode : null}
      </div>
    );
  }
}

Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: IMAGE_DATA,
};

Slider.autoPlayFlag = null;
export default Slider;
