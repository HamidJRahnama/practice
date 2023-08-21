import React, { useContext } from "react";
import { useBooks, useDelete } from "./MainMovieFC";
export const MovieListFC = () => {
  // const context = useContext(BookContext);
  const deleteData = useDelete();
  const booksData = useBooks();

  return (
    <>
      <button onClick={deleteData}>dmeo</button>
      {booksData.map((q) => (
        <tr>
          <td>{q.title}</td>
          <td>{q.id}</td>
          <td>
            <button onClick={() => deleteData(q.id)}>Delete</button>
          </td>
        </tr>
      ))}
      {/* {context.books.map((q, index) => (
        <tr key={index}>
          <td>{q.title}</td>
          <td>{q.id}</td>
          <td>
            <button
              onClick={() => context.deleteData()}
              className="btn btn-sm btn-secondary"
            >
              Delete
            </button>
          </td>
        </tr>
      ))} */}
    </>
  );
};
