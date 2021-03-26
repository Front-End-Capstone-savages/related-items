import React from 'react'

const Carousel3 = (props) => {
    const {} = props
    $('.multi-item-carousel').carousel({
        interval: false
      });
      
      // for every slide in carousel, copy the next slide's item in the slide.
      // Do the same for the next, next item.
      $('.multi-item-carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length>0) {
          next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
      });

    return (
        <div className="container">
        <h1>Use Bootstrap 3's carousel to show multiple items per slide.</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="carousel slide multi-item-carousel" id="theCarousel">
              <div className="carousel-inner">
                <div className="item active">
                  <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth,australia" className="img-responsive" /></a></div>
                </div>
                <div className="item">
                  <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?fremantle,australia" className="img-responsive" /></a></div>
                </div>
                <div className="item">
                  <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?west-australia" className="img-responsive" /></a></div>
                </div>
                <div className="item">
                  <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth" className="img-responsive" /></a></div>
                </div>
                <div className="item">
                  <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?quokka,perth" className="img-responsive" /></a></div>
                </div>
                <div className="item">
                  <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?margaretriver,australia" className="img-responsive" /></a></div>
                </div>
                {/* add  more items here */}
                {/* Example item start:  */}
                <div className="item">
                  <div className="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth,australia&r=7" className="img-responsive" /></a></div>
                </div>
                {/*  Example item end */}
              </div>
              <a className="left carousel-control" href="#theCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left" /></a>
              <a className="right carousel-control" href="#theCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right" /></a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Carousel3