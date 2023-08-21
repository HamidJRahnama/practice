import React, { Component } from "react";
import PrevStateClassView from "./PrevStateClassView";

export default class PrevStateClass extends Component {
  state = {
    infos: [
      { name: "hamid", family: "raha", age: 20 },
      { name: "ali", family: "aliee", age: 187 },
      { name: "mamad", family: "mamadee", age: 46 },
    ],
    Demo: "demo data",
  };
  updateDate = () => {
    let newName = [
      { name: "abas", family: "abasee", age: 29 },
      { name: "mamad", family: "mamadee", age: 34 },
    ];
    this.setState((prevState) => {
      return {
        infos: [...prevState.infos, ...newName],
      };
    });
  };
  render() {
    console.log("this is class", this.state);
    return (
      <div>
        {this.state.infos.map((info, index) => (
          <PrevStateClassView
            key={index}
            name={info.name}
            family={info.family}
            age={info.age}
          />
        ))}

        <button onClick={this.updateDate} className="btn btn-warning">
          Update Data
        </button>
      </div>
    );
  }
}
