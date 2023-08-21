import React, { Component } from "react";
import ClassStateViwe from "./ClassStateViwe";
import ClassStateDemo from "./ClassStateDemo";

export default class ClassState extends Component {
  constructor() {
    super();
    console.log("ClassState - constructor");
  }
  componentDidMount() {
    console.log("ClassState - componentDidMount");
  }
  state = {
    books: [
      { id: 1, title: "book1", category: "cat1", active: true },
      { id: 2, title: "book2", category: "cat2", active: false },
      { id: 3, title: "book3", category: "cat3", active: true },
    ],
    loading: false,
    btnHover: false,
    demos: [
      { name: "hamdi", age: 10 },
      { name: "ali", age: 5 },
      { name: "abas", age: 38 },
    ],
    demo1: {
      name: "hamid",
      fam: "raha",
      age: 20,
      car: 206,
      carColor: "black",
    },
  };

  updateData = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      let newBooks = [
        { id: 4, title: "book4", category: "cat4", active: true },
        { id: 5, title: "book5", category: "cat5", active: false },
        { id: 6, title: "book6", category: "cat6", active: true },
      ];

      this.setState((prevState) => {
        return {
          books: [...prevState.books, ...newBooks],
          loading: false,
        };
      });
    }, 2000);
  };
  // ###############################################
  // updating data
  demoUpdate = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      let newDemo = [
        { name: "ali", age: 39 },
        { name: "sara", age: 51 },
      ];
      this.setState((prevState) => {
        return {
          loading: false,
          demos: [...prevState.demos, ...newDemo],
        };
      });
    }, 2000);
  };
  // ###############################################
  // mouseIn and mouseOut hover
  mouseEnter = (e) => {
    this.setState({
      btnHover: true,
    });
    // console.log(this.state.btnHover);
  };
  mouseLeave = (e) => {
    this.setState({
      btnHover: false,
    });
    // console.log(this.state.btnHover);
  };
  // ############################################

  DEMO1BTN = () => {
    this.setState((prevState) => {
      return {
        demo1: {
          ...prevState.demo1,
          name: "ali",
          car: 405,
          age: 26,
        },
      };
    });
  };
  render() {
    console.log("ClassState - render");
    console.log("DEMO1 LOG", this.state.demo1);

    console.log(this.state.demo1);
    let booksList = this.state.books.map((book, index) =>
      book.active ? (
        <ClassStateViwe
          key={index}
          id={this.state.books[index].id}
          title={this.state.books[index].title}
          category={this.state.books[index].category}
        />
      ) : null
    );

    // let demoList = this.state.demos.map((demo, index) => (
    //   <ClassStateDemo
    //     name={this.state.demos[index].name}
    //     age={this.state.demos[index].age}
    //   />
    // ));

    let btnStyle = {
      color: "white",
      backgroundColor: "black",
      borderRadius: "5px",
      padding: "10px",
    };
    if (this.state.btnHover) {
      btnStyle.backgroundColor = "gray";
    }
    return (
      <>
        <div className="row">
          <hr />
          <h1>this is class base conponent</h1>
          <div className="col-6">
            {this.state.loading ? <h1>loadinf</h1> : booksList}
            <button
              style={btnStyle}
              onClick={this.updateData}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
            >
              Update Data
            </button>
          </div>

          <div className="col-6">
            <button onClick={this.DEMO1BTN}>DEMO1 BTN</button>
            {/* {this.state.loading ? <h1>loading</h1> : demoList}
            <button onClick={this.demoUpdate}>Update Data</button> */}
          </div>
        </div>
      </>
    );
  }
}
// how to set new data in state , by setState
// constructor() {
//   super();
//   setTimeout(() => {
//     this.setState({
//       books: [
//         { id: 4, title: "book4", category: "cat4" },
//         { id: 5, title: "book5", category: "cat5" },
//         { id: 6, title: "book6", category: "cat6" },
//       ],
//     });
//   }, 2000);
// }

//  <ClassStateViwe id={this.state.books[0].id} title={this.state.books[0].title} category={this.state.books[0].category} />
//  <ClassStateViwe id={this.state.books[1].id} title={this.state.books[1].title} category={this.state.books[1].category} />
//  <ClassStateViwe id={this.state.books[2].id} title={this.state.books[2].title} category={this.state.books[2].category} />
