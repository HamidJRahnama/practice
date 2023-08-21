// import React from "react";
import React, { useState } from "react";
import { MovieViewTestt } from "./MovieViewTestt";
import { Action } from "./Movie Genre/Action";

export const MovieAppTextt = () => {
  const [movies, setMovies] = useState({
    movieData: [
      { title: "movie1", genre: ["action"], id: 1, like: false },
      { title: "movie2", genre: ["drama"], id: 1, like: false },
      { title: "movie3", genre: ["action", "drama"], id: 1, like: false },
      { title: "movie4", genre: ["drama", "action"], id: 1, like: false },
      { title: "movie5", genre: ["action"], id: 1, like: false },
      { title: "movie6", genre: ["drama"], id: 1, like: false },
      { title: "movie7", genre: ["drama", "action"], id: 1, like: false },
      {
        title: "movie8",
        genre: ["drama", "action", "comedi"],
        id: 1,
        like: false,
      },
    ],
  });
  return (
    <div className="container">
      <div className="row">
        {movies.movieData.map((movie, index) =>
          movie.genre.includes("action") ? (
            <Action key={index} data={movie} />
          ) : null
        )}
      </div>
    </div>
  );
};

{
  /* {movies.movieData.map((movie, index) => (
        <MovieViewTestt key={index} data={movie} />
))} */
}
// export default MovieAboutTestt;
