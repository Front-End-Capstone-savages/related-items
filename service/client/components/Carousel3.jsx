import React from 'react';
import Card from './Card.jsx';
import DelCard from './DelCard.jsx'
const Carousel3 = (props) => {
    const {} = props
  


    return (
      <div>
<div className="row" >
        <div className="col-md-12">
          <div className="carousel slide multi-item-carousel" id="theCarousel" >
            <div className="carousel-inner" style={{height:'450px',  backgroundColor: 'white'}}>
              <div className="item active" >
                <div className="col-xs-4"  ><Card /></div>
              </div>
              <div className="item" >
                <div className="col-xs-4"><Card /></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><Card /></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><Card /></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><Card /></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><Card /></div>
              </div>
              {/* add  more items here */}
              {/* Example item start:  */}
             
            </div>
            <a className="right carousel-control" href="#theCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right" /></a>
          </div>
        </div>
      </div>
        <DelCard/>
     
      </div>

    )
}

export default Carousel3