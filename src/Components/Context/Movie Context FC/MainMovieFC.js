import React, { createContext, useContext, useState } from "react";
import { MoviePageFC } from "./MoviePageFC";

const BooksContext = createContext();
const DeleteContext = createContext();

export function useBooks() {
  return useContext(BooksContext);
}

export function useDelete() {
  return useContext(DeleteContext);
}
export const MainMovieFC = () => {
  const [books, setBook] = useState([
    { title: "book 1", id: 1 },
    { title: "book 2", id: 2 },
    { title: "book 3", id: 3 },
    { title: "book 4", id: 4 },
  ]);
  let deleteData = (id) => {
    console.log("hiii", id);
    let newData = books.filter((q) => q.id !== id);
    setBook(newData);
  };
  return (
    <BooksContext.Provider value={books}>
      <DeleteContext.Provider value={deleteData}>
        <MoviePageFC />
      </DeleteContext.Provider>
    </BooksContext.Provider>
  );
};
