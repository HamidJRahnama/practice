import React, { Component } from "react";

export default class ClassStateViwe extends Component {
  Demo() {
    // alert("Demo functio");
    // console.log("Demo functio");
  }
  render() {
    return (
      <div>
        <h3>id: {this.props.id} </h3>
        <h3>Title: {this.props.title} </h3>
        <h3>category: {this.props.category} </h3>
        <hr />

        {/* <div className="card m-1">
          <header className="card-header">
            <h3>title: {this.props.id} </h3>
          </header>

          <section className="card-body">
            <h4>Title: {this.props.title} </h4>
            <h4>Category: {this.props.category} </h4>
            <h4>Id: {this.props.id} </h4>

            <button onClick={this.Demo} className="btn bg-warning">
              click me
            </button>
          </section>
        </div> */}
      </div>
    );
  }
}
