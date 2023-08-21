import React from "react";

export const PrevStateFunctionView = (props) => {
  return (
    <div>
      <h5>Name: {props.name}</h5>
      <h5>Family: {props.family}</h5>
      <h5>Age: {props.age}</h5>
    </div>
  );
};
