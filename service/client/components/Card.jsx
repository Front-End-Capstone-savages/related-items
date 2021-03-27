import React from "react";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { data } from "jquery";
import popup from "./Popup.jsx";

export default function Card(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  //  [data, getData] = useState('')

  //  useEffect(()=> {
  //   getmyData();
  //  },[])
  //  const getmyData = ()=> {
  //   axios
  //   .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles", {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-type": "Application/json",
  //       "Authorization": ` ${token}`
  //     },
  //   }).then((res)=> {

  //     const allData = res.data;
  //     getData(allData);
  //   })

  //  }
  const { prodStyle, products, prodId } = props;
  return (
    <div>


    <div className="div-card-container">
      {console.log("#############################################", data)}
      {console.log("this is my Prod Style *******", prodStyle)}
      {console.log("this is my Prod ID *******", prodId)}
      {console.log("this is my Prod  *******", products)}

      <div className="card">
        <div className="list-group list-group-flush">
          <div className="card-start-font">
            <i className="bi bi-star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                className="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </i>
          </div>

          <img
            src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
            alt="Person"
            className="card-img"
          />

          <span className="span-card" data-toggle="modal" data-target="#exampleModalLong" >categorie</span>
          <p className="card-parag"> write any tingh pixa pixawi </p>
          <span className="span-card">$152</span>
          <ReactStars
            onChange={ratingChanged}
            count={5}
            size={15}
            activeColor="#ffd700"
            position="relative"
            left="400px"
            display="inline-block"
            background-position="-69px -368px"
          />
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='div-modal-container'>

    
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  );
}
