import React from "react";
import "./App.css";
import ClassBase from "./Components/classbase component/ClassBase";
import { Demo } from "./Components/Demo";
import { HooksInFC } from "./Components/state or hook in function component/HooksInFC";
import ClassState from "./Components/states/ClassState";
import { Main } from "./Components/Demo Prevstate/Main";
// #####################################################
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MainLC } from "./Components/LifeCycle/MainLC";
import MovieList from "./Components/Movie List Table/MovieList";
import MainMovie from "./Components/Context/MainMovie";
import { MainMovieFC } from "./Components/Context/Movie Context FC/MainMovieFC";
import { MainReducer } from "./Components/Reducer/MainReducer";
import { MovieAppTextt } from "./Components/MovieDemoest/MovieAppTextt";
import { RouterMain } from "./Components/RouterSample/RouterMain";
import BooksPage from "./Components/Context delete/Context CC Delete/BooksPage";
import { BooksPage11 } from "./Components/Context delete/Context FC Delete/BooksPage11";
import { RouterApp } from "./Router/RouterApp";

function App() {
  const peoples = [
    { name: "hamid", lastName: "raha", age: 20 },
    { name: "ali", lastName: "aliZadeh", age: 15 },
    { name: "reza", lastName: "rezaZadeh", age: 61 },
    { name: "abas", lastName: "abasZadeh", age: 18 },
  ];
  return (
    <div>
      {/* ######################### Navbar ####################### */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#link">Link </Nav.Link>

              <NavDropdown title="Genres" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Action/3.1">Action</NavDropdown.Item>

                <NavDropdown.Item href="#Comedy/3.2">Comedy</NavDropdown.Item>

                <NavDropdown.Item href="#Horror/3.3">Horror</NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Years" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  2000-2005
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.1">
                  2005-2010
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  2010-2020
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  2020-2025
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  2025-2030
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ######################## */}
      <RouterApp />
      {/* <BooksPage />
      <BooksPage11 /> */}
      {/* <RouterMain /> */}

      {/* <MovieAppTextt /> */}
      {/* <MainReducer /> */}
      {/* <MainMovieFC /> */}
      {/* <hr /> */}
      {/* <MainMovie /> */}
      {/* <MovieList /> */}
      {/* ################################################################## */}
      {/* <Main /> */}
      {/* <MainLC /> */}
      {/* <HooksInFC /> */}

      {/* <ClassState /> */}
      {/* {peoples.map((people, index) => (
        <ClassBase
          firstName={people.name}
          lastName={people.lastName}
          age={people.age}
          title={index + 1}
        />
      ))} */}

      {/* {peoples.map((people, index) => (
        <Demo
          firstName={people.name}
          lastName={people.lastName}
          age={people.age}
          title={index + 1}
        />
      ))} */}
    </div>
  );
}

export default App;
