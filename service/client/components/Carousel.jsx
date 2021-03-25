import React from 'react'
import Card from './Card.jsx'

export default function Carousel() {
    return (
        <div>
                      <div className="carousel"> 
        <div className="carousel-inner"> 
          <input name="carousel" className="carousel-open" id="carousel-1" aria-hidden="false" type="radio" hidden="true" defaultChecked />
          <div className="carousel-item"> 
            <img src="/" />
          </div> 
          <input name="carousel" className="carousel-open" id="carousel-2" aria-hidden="false" type="radio" hidden="true" /> 
          <div className="carousel-item"> 
            <h1>2</h1> 
            <p> Content here for page two.</p> 
          </div> 
          <input name="carousel" className="carousel-open" id="carousel-3" aria-hidden="false" type="radio" hidden="true" /> 
          <div className="carousel-item"> 
            <h1>3</h1> 
            <p> Content here for page three.</p> 
          </div> 
          <input name="carousel" className="carousel-open" id="carousel-4" aria-hidden="false" type="radio" hidden="true" /> 
          <div className="carousel-item"> 
            <h1>4</h1> 
            <p> Content here for page four.</p> 
          </div>
          <input name="carousel" className="carousel-open" id="carousel-5" aria-hidden="false" type="radio" hidden="true" /> 
          <div className="carousel-item"> 
            <h1>5</h1> 
            <p> Content here for page five.</p> 
          </div> 
          <label className="carousel-control prev control-1" htmlFor="carousel-5">‹</label>
          <label className="carousel-control next control-1" htmlFor="carousel-2">›</label>
          <label className="carousel-control prev control-2" htmlFor="carousel-1">‹</label>
          <label className="carousel-control next control-2" htmlFor="carousel-3">›</label>
          <label className="carousel-control prev control-3" htmlFor="carousel-2">‹</label>
          <label className="carousel-control next control-3" htmlFor="carousel-4">›</label> 
          <label className="carousel-control prev control-4" htmlFor="carousel-3">‹</label>
          <label className="carousel-control next control-4" htmlFor="carousel-5">›</label>
          <label className="carousel-control prev control-5" htmlFor="carousel-4">‹</label>
          <label className="carousel-control next control-5" htmlFor="carousel-1">›</label>
          <ol className="carousel-indicators"> 
            <li> 
              <label className="carousel-bullet" htmlFor="carousel-1"><Card /></label> </li> 
            <li> 
              <label className="carousel-bullet" htmlFor="carousel-2"><Card /></label> </li> 
            <li> 
              <label className="carousel-bullet" htmlFor="carousel-3"><Card /></label> </li> 
            <li> 
              <label className="carousel-bullet" htmlFor="carousel-4"><Card /></label> </li> 
            <li> 
              <label className="carousel-bullet" htmlFor="carousel-5"><Card /></label> </li> 
          </ol> 
        </div> 
      </div>
        </div>
    )
}
