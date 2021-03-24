import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Card(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    
    <div className="div-card-container">
      {console.log('this is my props ',props.products)}
      {props.products.map((el)=> {
            return (
              
         
      
      <div className="card" key = {el.id}>
        <div className="list-group list-group-flush">
          <div className="card-start-font">
            <i className="bi bi-star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
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

          <span className="span-card">categorie{el.category}</span>
          <p className="card-parag">{el.description}</p>
          <span className="span-card">${el.default_price}</span>
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
         );
        })}
    </div>
  );
}
