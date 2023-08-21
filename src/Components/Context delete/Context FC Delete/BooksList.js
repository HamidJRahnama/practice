import React, { useContext } from "react";
import { useCol } from "react-bootstrap/esm/Col";
import BookContext from "../Context CC Delete/BookContext";

export const BooksList = () => {
  const context = useContext(BookContext);
  console.log(context.books);
  return (
    <>
      <hr />
      {context.books.map((book, index) => (
        <h5>
          <span className="mx-1">
            {index + 1}. Title: {book.title} --- ID: {book.id}
          </span>
          <button onClick={() => context.onDelete(book.id)}>Delete</button>
        </h5>
      ))}
      <hr />
      {context.users.map((user, index) => (
        <h5>
          <span className="mx-1">
            {index + 1}. Name: {user.name} --- ID: {user.id}
          </span>
          <button onClick={() => context.onDelete(user.id)}>Delete</button>
        </h5>
      ))}
    </>
  );
};
