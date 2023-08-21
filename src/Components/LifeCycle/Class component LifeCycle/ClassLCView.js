import React, { Component } from "react";

export default class ClassLCView extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("[ClassLCView.js] - constructor");
  // }
  state = {
    count: this.props.counter.value,
  };
  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  minus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  // componentDidMount() {
  //   console.log("[ClassLCView.js] - componentDidMount");
  // }
  render() {
    // console.log("[ClassLCView.js] - render");

    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.add}>add</button>
        <button
          disabled={this.state.count === 0 ? "disabled" : ""}
          onClick={this.minus}
        >
          minus
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}
