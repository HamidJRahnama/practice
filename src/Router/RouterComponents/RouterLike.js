import React from "react";

export const RouterLike = (props) => {
  const movies = props.data.movies;
  return (
    <>
      <h2>
        You Are In <span className=" text-primary ">Liked</span> Page
      </h2>
      {movies.map((movie, index) =>
        movie.isLike ? (
          <h5>
            Title: {movie.title} Genre:{" "}
            <span>{movie.genre.map((genre) => genre + "  ")}</span>
            <button
              onClick={() => props.onLike(movie.id)}
              className="btn btn-sm btn-primary "
            >
              {movie.isLike ? "Liked" : "Like"}
            </button>
          </h5>
        ) : null
      )}
    </>
  );
};
