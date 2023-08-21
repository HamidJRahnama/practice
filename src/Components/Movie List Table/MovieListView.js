import React, { Component } from "react";

export default class MovieListView extends Component {
  render() {
    // console.log(this.props.Minfo.title);
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.Minfo.title}</td>
        <td>{this.props.Minfo.genre}</td>
        <td>{this.props.Minfo.rate}</td>
        <td>{this.props.Minfo.type}</td>
        <td>
          <span
            onClick={() =>
              this.props.onLike(this.props.Minfo.id, this.props.Minfo.like)
            }
            className="bg-danger p-2"
          >
            {this.props.Minfo.like ? "liked" : "not Liked"}
          </span>
        </td>
        <td>
          <button onClick={() => this.props.onDelete(this.props.Minfo.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
