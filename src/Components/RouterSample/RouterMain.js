import React from "react";
import { Route } from "react-router-dom";
import { RouteHome } from "./Pages/RouteHome";
import { RouterAbout } from "./Pages/RouterAbout";
import { RouterContact } from "./Pages/RouterContact";
// ################################
import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
// import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
// import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import { BrowserRouter, Routes } from "react-router-dom";
export const RouterMain = () => {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <br />
        <hr />
        <Routes>
          <Route path="/" Component={RouteHome} />
          <Route path="/About" Component={RouterAbout} />
          <Route path="/Contact" Component={RouterContact} />
        </Routes>
      </Router>
    </>
  );
};
