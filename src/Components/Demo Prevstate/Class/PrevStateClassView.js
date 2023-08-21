import React, { Component } from "react";

export default class PrevStateClassView extends Component {
  render() {
    return (
      <div>
        <h5>Name: {this.props.name}</h5>
        <h5>Family: {this.props.family}</h5>
        <h5>Age: {this.props.age}</h5>
        <hr />
      </div>
    );
  }
}
