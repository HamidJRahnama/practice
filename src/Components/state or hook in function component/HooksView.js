import React from "react";

export const HooksView = (props) => {
  return (
    <div>
      <h3>Name: {props.name} </h3>
      <h3>Family: {props.family} </h3>
      <h3>Age: {props.age} </h3>
      <hr />
    </div>
  );
};
