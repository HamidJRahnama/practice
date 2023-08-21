import React from "react";

export const FunctionLCView = (props) => {
  console.log(props);
  console.log(props.counter.id);

  return (
    <div>
      <h3>{props.counter.value}</h3>
      <button onClick={() => props.onAdd(props.counter.id)}>add</button>
      <button>minus</button>
      <button>delete</button>
    </div>
  );
};
