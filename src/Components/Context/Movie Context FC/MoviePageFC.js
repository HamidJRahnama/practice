import React from "react";
import { MovieListFC } from "./MovieListFC";

export const MoviePageFC = () => {
  return (
    <>
      <div>
        <h3>MoviePageFC</h3>
        <table className="table">
          <tbody>
            <MovieListFC />
          </tbody>
        </table>
      </div>
    </>
  );
};
