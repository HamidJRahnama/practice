import React from "react";

export const Demo = (props) => {
  console.log("demo log", props);
  return (
    <>
      <div className="card m-1">
        <header className="card-header">
          <h3>title: {props.title}</h3>
        </header>

        <section className="card-body">
          <h4>First name: {props.firstName}</h4>
          <h4>Last name: {props.lastName} </h4>
          <h4>Age: {props.age} </h4>
        </section>
      </div>
    </>
  );
};
