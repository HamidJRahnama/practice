import React from "react";

export const Action = (props) => {
  return (
    <div>
      <h5>title: {props.data.title}</h5>
      <h5>Genre: {props.data.genre}</h5>
    </div>
  );
};
