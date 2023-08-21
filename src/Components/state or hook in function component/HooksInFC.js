import React from "react";
import { HooksView } from "./HooksView";

export const HooksInFC = () => {
  const [peoples, setPeoples] = React.useState([
    { id: 1, name: "hamid", lastName: "raha", age: 20, active: true },
    { id: 2, name: "ali", lastName: "aliZadeh", age: 15, active: false },
    { id: 3, name: "reza", lastName: "rezaZadeh", age: 61, active: true },
    { id: 4, name: "abas", lastName: "abasZadeh", age: 18, active: true },
  ]);

  const updateData = () => {
    setTimeout(() => {
      const newData = [
        { id: 5, name: "mamd", lastName: "maamdi", age: 25 },
        { id: 6, name: "alirez", lastName: "aliRezaee", age: 13 },
      ];

      setPeoples([...peoples, ...newData]);

      // setPeoples([
      //   ...peoples,
      //   { id: 5, name: "mamd", lastName: "maamdi", age: 25 },
      //   { id: 6, name: "alirez", lastName: "aliRezaee", age: 13 },
      // ]);

      console.log("Hook page log in function" + peoples);
    }, 1000);
  };

  return (
    <div>
      <h1>this is hookFC</h1>
      {peoples.map((people, index) => (
        <HooksView
          key={index}
          name={people.name}
          family={people.lastName}
          age={people.age}
        />
      ))}
      <button onClick={() => updateData()}>Update Data</button>
    </div>
  );
};
