import React from "react";
import { useParams } from "react-router-dom";

export const RouterGenres = (props) => {
  const { genre } = useParams();

  const movies = props.data.movies;
  return (
    <>
      <h2>
        You Are In <span className=" text-primary ">{genre}</span> Page
      </h2>
      {movies.map((movie, index) =>
        movie.genre.includes(genre) ? (
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
