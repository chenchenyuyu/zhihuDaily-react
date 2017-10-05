import React from 'react';
// import { connect } from 'react-redux';
import CYComponent from 'components/base/index';
import ListItem from 'components/list-item';

import Img1 from './images/demo1.jpg';
import Img2 from './images/demo2.jpg';
import Img from './images/chenyu.png';
// import Img3 from './images/demo3.jpg';

const IMAGE_DATA1 = [
  {
    src: Img,
    id: 'img1',

  },
];

const res1 = [
   { id: 0, title: '1111', pic: Img2 }, { id: 1, title: '2111', pic: Img1 } ,
   { id: 2, title: '2222', pic: Img2 }, { id: 3, title: '2222', pic: Img1 } ,
   { id: 4, title: '3333', pic: Img2 }, { id: 5, title: '2222', pic: Img1 } ,
];

class ListTheme extends CYComponent {

  render() {
    return(
      <div className="theme-list">
        <div className="detail-img-box" >
        <div className="detail-mask"/>
        <h1>这是标题</h1>
        <p>这是段落</p>
        </div>
        <a>
            <div className="editors-box">
              <p>主编</p>
              {
                IMAGE_DATA1.map(item =>
                  <div key={`editor-${item.id}`} className="editors-item">
                    <img src={item.src} alt={item.id} />
                 </div>)
              }
            </div>
        </a>
          {/* 列表 */}
           <div className="list-box">
             <ul>
               {
                 res1.map(item =>
                   <ListItem key={`theme-${item.id}`} item={item} />
                 )
               }
             </ul>
           </div>
      </div>
    );
  }
}

export default ListTheme;



