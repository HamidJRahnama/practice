import React, { useContext, useState } from "react";
import BookContext from "../Context CC Delete/BookContext";
import { BooksList } from "./BooksList";

export const BooksPage11 = () => {
  const [books, setBooks] = useState([
    { title: "book1", id: 1 },
    { title: "book2", id: 2 },
    { title: "book3", id: 3 },
  ]);
  const [users, setUsers] = useState([
    {
      name: "Hamid",
      id: 1,
    },
  ]);
  let delete1 = (id) => {
    console.log("deleted", id);
  };
  return (
    <BookContext.Provider value={{ books, users, onDelete: delete1 }}>
      <BooksList />
    </BookContext.Provider>
  );
};
