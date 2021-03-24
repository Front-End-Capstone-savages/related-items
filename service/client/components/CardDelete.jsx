import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Card() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="div-card-container">
      <div className="card">
        <div className="list-group list-group-flush">
          <div className="card-start-font">
            <i className="bi bi-x-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </i>{" "}
          </div>
         
          <img
            src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
            alt="Person"
            className="card-img"
          />

          <span className="span-card">categorie</span>
          <p className="card-parag">Expendted product with extra text</p>
          <span className="span-card">$2000</span>
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
    </div>
  );
}
