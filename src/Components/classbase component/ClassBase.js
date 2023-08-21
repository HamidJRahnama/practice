import React, { Component } from "react";

export default class ClassBase extends Component {
  render() {
    return (
      <>
        <div className="card m-1">
          <header className="card-header">
            <h3>title: {this.props.title}</h3>
          </header>

          <section className="card-body">
            <h4>First name: {this.props.firstName}</h4>
            <h4>Last name: {this.props.lastName} </h4>
            <h4>Age: {this.props.age} </h4>
          </section>
        </div>
      </>
    );
  }
}
