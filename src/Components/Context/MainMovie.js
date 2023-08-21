import React, { Component } from "react";
import MoviePage from "./MoviePage";
import MovieContext from "./MovieContext/MovieContext";
export default class MainMovie extends Component {
  state = {
    movieList: [
      { title: "Movie1", type: "Movie", genre: "Action", rate: 6.5, id: 1 },
      { title: "Movie2", type: "Mobie", genre: "Comedi", rate: 6, id: 2 },
      { title: "Movie3", type: "Documentry", genre: "Drama", rate: 7.6, id: 3 },
      {
        title: "Animation",
        type: "Animation",
        genre: "Anime",
        rate: 2.8,
        id: 4,
      },
      { title: "Movie4", type: "TVshow", genre: "Sitcom", rate: 9.3, id: 5 },
    ],
    userName: { name: "hamid", family: "raha", id: 1 },
  };

  delete(id) {
    let newData = this.state.movieList.filter((q) => q.id !== id);
    this.setState({ movieList: newData });
  }
  render() {
    return (
      <MovieContext.Provider
        value={{
          movieList: this.state.movieList,
          userName: this.state.userName,
          delete: this.delete.bind(this),
        }}
      >
        <div>
          <MoviePage />
        </div>
      </MovieContext.Provider>
    );
  }
}
