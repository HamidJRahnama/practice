import React from "react";

export const MovieViewTestt = (props) => {
  return (
    <div className="col-3 ">

      <div className="movieView border">

        <div className="img p-5 bg-info"></div>

        <div className="row">

          <div className="col-6 movieDetail bg-secondary">
            <p>title</p>
            <p>genre</p>
            <p>rate</p>
            <button>Read more...</button>
          </div>

          <div className="col-6 movieDetail bg-secondary">
            <button>Favorite</button>
          </div>

        </div>
      </div>
    </div>
  );
};
