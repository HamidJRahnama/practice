import React, { Component } from "react";
import MovieList from "./MovieList";

export default class MoviePage extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Type</th>
              <th>Genre</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <MovieList />
          </tbody>
        </table>
      </div>
    );
  }
}
