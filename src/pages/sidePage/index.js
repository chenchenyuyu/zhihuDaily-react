import React from 'react';
// import CYComponent from '../../components/base/index';
import SideBar from '../../components/side-bar/index';
import HomeHeader from '../../components/home-header';

// 模拟一个react-router-dom4.0 this.props.match.params 2-13的随机数字
const params = Math.floor(Math.random() * 13 + 2); //1-10

// class SidePage extends CYComponent {
//   constructor(props) {
//     super(props);
//     this.autoBind('handleDisplay', 'handleTitle');
//   }
//   handleDisplay() {
//     if (params) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   handleTitle() {
//     switch (params) {
//       case '13':
//         return '日常心理学';
//       case '12':
//         return '用户推荐日报';
//       case '3':
//         return '电影日报';
//       case '11':
//         return '不许无聊';
//       case '4':
//         return '设计日报';
//       case '5':
//         return '大公司日报';
//       case '6':
//         return '财经日报';
//       case '10':
//         return '互联网安全';
//       case '2':
//         return '开始游戏';
//       case '7':
//         return '音乐日报';
//       case '9':
//         return '动漫日报';
//       case '8':
//         return '体育日报';
//       default:
//         return '首页'
//     }
//   }
//
//   render() {
//     return (
//       <div className="container">
//         <HomeHeader title={this.handleTitle} iconDisplay={this.handleDisplay} />
//         <SideBar />
//         {this.props.children}
//       </div>
//     );
//   }
//
// }

const SidePage = ({children}) => () => {
  const handleDisplay = (params) => {
    if (params) {
      return false;
    } else {
      return true;
    }
  };
  const handleTitle = () => {
    switch (params) {
      case '13':
        return '日常心理学';
      case '12':
        return '用户推荐日报';
      case '3':
        return '电影日报';
      case '11':
        return '不许无聊';
      case '4':
        return '设计日报';
      case '5':
        return '大公司日报';
      case '6':
        return '财经日报';
      case '10':
        return '互联网安全';
      case '2':
        return '开始游戏';
      case '7':
        return '音乐日报';
      case '9':
        return '动漫日报';
      case '8':
        return '体育日报';
      default:
        return '首页'
    }
  };

  return (
    <div className="container">
      <HomeHeader title={handleTitle} iconDisplay={handleDisplay}/>
      <SideBar/>
      {children}
    </div>
  );
};

export default SidePage;

