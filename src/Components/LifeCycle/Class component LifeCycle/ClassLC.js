import React, { Component } from "react";
import ClassLCView from "./ClassLCView";

export default class ClassLC extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("[ClassLC.js] - constructor");
  // }
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  deleteConter = (id) => {
    const counters = this.state.counters.filter((e) => e.id !== id);
    this.setState({ counters });
  };
  // ##########
  // componentDidMount() {
  //   console.log("[ClassLC.js] - componentDidMount");
  // }
  render() {
    // console.log("[ClassLC.js] - render");
    return (
      <div>
        {this.state.counters.map((counter) => (
          <ClassLCView
            key={counter.id}
            onDelete={this.deleteConter}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
