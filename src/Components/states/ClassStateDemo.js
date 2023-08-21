import React, { Component } from "react";

export default class ClassStateDemo extends Component {
  render() {
    return (
      <div>
        {console.log("this is Class State Demo Page" + this.props.name)}
        <h3>Name: {this.props.name}</h3>
        <h3>Age: {this.props.age}</h3>
        <hr />
      </div>
    );
  }
}
