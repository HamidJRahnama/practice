import React, { Component } from "react";
import BookContext from "./BookContext";
import BooksList from "./BooksList";

export default class BooksPage extends Component {
  state = {
    books: [
      { title: "book1", id: 1 },
      { title: "book2", id: 2 },
      { title: "book3", id: 3 },
    ],
  };
  delete(id) {
    console.log("deleted - id: ", id);
  }
  render() {
    return (
      <BookContext.Provider
        value={{ books: this.state.books, onDelete: this.delete.bind(this) }}
      >
        <BooksList />
      </BookContext.Provider>
    );
  }
}
