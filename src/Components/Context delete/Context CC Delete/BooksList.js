import React, { Component } from "react";
import BookContext from "./BookContext";

export default class BooksList extends Component {
  render() {
    return (
      <BookContext.Consumer>
        {(context) => (
          <>
            {context.books.map((book, index) => (
              <div key={index}>
                <h5>
                  <span className="mx-1">{index + 1}.</span>
                  Title: {book.title} --- Id: {book.id}
                  <button
                    onClick={() => context.onDelete(book.id)}
                    className="mx-1"
                  >
                    Delete
                  </button>
                </h5>
              </div>
            ))}
          </>
        )}
      </BookContext.Consumer>
    );
  }
}
