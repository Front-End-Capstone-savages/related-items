import React from "react";
import Card from './Card.jsx'
import $ from 'jquery'

export default function Carrousel2() {
    function defer(method) {
        if (window.jQuery)
          method();
        else
          setTimeout(function() {
            defer(method)
          }, 50);
      }
      defer(function() {
        (function($) {
          
          function doneResizing() {
            var totalScroll = $('.resource-slider-frame').scrollLeft();
            var itemWidth = $('.resource-slider-item').width();
            var difference = totalScroll % itemWidth;
            if ( difference !== 0 ) {
              $('.resource-slider-frame').animate({
                scrollLeft: '-=' + difference
              }, 500, function() {
                // check arrows
                checkArrows();
              });
            }
          }
          
          function checkArrows() {
            var totalWidth = $('#resource-slider .resource-slider-item').length * $('.resource-slider-item').width();
            var frameWidth = $('.resource-slider-frame').width();
            var itemWidth = $('.resource-slider-item').width();
            var totalScroll = $('.resource-slider-frame').scrollLeft();
            
            if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
              $(".next").css("visibility", "hidden");
            }
            else {
              $(".next").css("visibility", "visible");
            }
            if ( totalScroll < itemWidth ) {
              $(".prev").css("visibility", "hidden");
            }
            else {
              $(".prev").css("visibility", "visible");
            }
          }
          
          $('.arrow').on('click', function() {
            var $this = $(this),
              width = $('.resource-slider-item').width(),
              speed = 500;
            if ($this.hasClass('prev')) {
              $('.resource-slider-frame').animate({
                scrollLeft: '-=' + width
              }, speed, function() {
                // check arrows
                checkArrows();
              });
            } else if ($this.hasClass('next')) {
              $('.resource-slider-frame').animate({
                scrollLeft: '+=' + width
              }, speed, function() {
                // check arrows
                checkArrows();
              });
            }
          }); // end on arrow click
          
          $(window).on("load resize", function() {
            checkArrows();
            $('#resource-slider .resource-slider-item').each(function(i) {
              var $this = $(this),
                left = $this.width() * i;
              $this.css({
                left: left
              })
            }); // end each
          }); // end window resize/load
          
          var resizeId;
          $(window).resize(function() {
              clearTimeout(resizeId);
              resizeId = setTimeout(doneResizing, 500);
          });
          
        })(jQuery); // end function
      });
  return (
    <div>
      <div className="row resources ">
        <div className="container" id="resource-slider">
          <button className="arrow next" />
          <div className="resource-slider-frame">
            <div className="resource-slider-item">
              <div className="resource-slider-inset">
                <div className="resource">
                 <Card/>
                 
                </div>
              </div>
            </div>
            <div className="resource-slider-item">
              <div className="resource-slider-inset">
                <div className="resource">
                  <Card />
         
                </div>
              </div>
            </div>
            <div className="resource-slider-item">
              <div className="resource-slider-inset">
                <div className="resource">
                <Card />
              
                </div>
              </div>
            </div>
            <div className="resource-slider-item">
              <div className="resource-slider-inset">
                <div className="resource">
                  <a href="/webinars/successfully-implementing-the-nist-cybersecurity-resource-slider-framework"><Card /></a>
                  
                </div>
              </div>
            </div>
            <div className="resource-slider-item">
              <div className="resource-slider-inset">
                <div className="resource">
                  <a href="/webinars/automate-simplify-and-communicate-nist-csf-conformance"><Card /></a>
                  
                </div>
              </div>
            </div>
            <div className="resource-slider-item">
              <div className="resource-slider-inset">
                <div className="resource">
                  <a href="/data-sheets/securitycenter-continuous-view"><Card /></a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
