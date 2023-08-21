import React from "react";
import { PrevStateFunctionView } from "./PrevStateFunctionView";

export const PrevStateFunction = () => {
  const [peoples, setpeoples] = React.useState({
    infos: [
      { name: "hamid", family: "raha", age: 20 },
      { name: "ali", family: "aliee", age: 187 },
      { name: "mamad", family: "mamadee", age: 46 },
    ],
    Demo: "denmo data",
  });
  let newName = [
    { name: "abas", family: "abasee", age: 29 },
    { name: "mamad", family: "mamadee", age: 34 },
  ];
  //   ###########################################

  const updateData = () => {
    setpeoples((prevState) => {
      return {
        infos: [...prevState.infos, ...newName],
        Demo: prevState.Demo,
      };
    });
  };
  console.log(peoples);
  return (
    <>
      <div className="row">
        <div className="col-5">
          {peoples.infos.map((people, index) => (
            <PrevStateFunctionView
              key={index}
              name={people.name}
              family={people.family}
              age={people.age}
            />
          ))}
          <button onClick={() => updateData()} className="btn btn-warning">
            Update date
          </button>
        </div>
        <div className="col-5"></div>
      </div>
    </>
  );
};
