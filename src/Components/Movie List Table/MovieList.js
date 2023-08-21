import React, { Component } from "react";
import MovieListView from "./MovieListView";

export default class MovieList extends Component {
  state = {
    movieInfos: [
      {
        title: "Termiantor",
        genre: "Action",
        rate: 2.4,
        like: false,
        type: "Movie",
        id: 1,
      },
      {
        title: "Die Hard",
        genre: "Action",
        rate: 5.9,
        like: true,
        type: "Movie",
        id: 2,
      },
      {
        title: "Shameless",
        genre: "Comedi / Drama",
        rate: 3.9,
        like: false,
        type: "TvShow",
        id: 3,
      },
      {
        title: "Spider-Man",
        genre: "Action",
        rate: 8.3,
        like: false,
        type: "Movie",
        id: 4,
      },
    ],
    animeInfo: [{}],
  };
  deleteMovie = (id) => {
    console.log("Deketed", id);
    const deletedList = this.state.movieInfos.filter((e) => e.id !== id);
    this.setState({ movieInfos: deletedList });
  };

  likeMovie = (id, like) => {
    const likeMovie = this.state.movieInfos.find((e) => e.id === id);
    likeMovie.like ? (likeMovie.like = false) : (likeMovie.like = true);
    this.setState({ likeMovie });

    console.log(this.state.movieInfos);
    console.log(likeMovie);
  };

  render() {
    return (
      <div className="container">
        <h3>There is {this.state.movieInfos.length} movie in your list</h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Rate</th>
              <th>type</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movieInfos.map((Minfo, index) => (
              <MovieListView
                key={index}
                Minfo={Minfo}
                index={index + 1}
                onDelete={this.deleteMovie}
                onLike={this.likeMovie}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
