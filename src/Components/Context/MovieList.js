import React, { Component } from "react";
import MovieContext from "./MovieContext/MovieContext";

export default class MovieList extends Component {
  render() {
    return (
      <MovieContext.Consumer>
        {(Context) => (
          <>
            {Context.movieList.map((q, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{q.title}</td>
                <td>{q.type}</td>
                <td>{q.genre}</td>
                <td>{q.rate}</td>
                <td>
                  <button
                    onClick={() => Context.delete(q.id)}
                    className="btn btn-sm btn-secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </>
        )}
      </MovieContext.Consumer>
    );
  }
}
