import React, { useReducer, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { RouterHome } from "./RouterComponents/RouterHome";
import { RouterAbout } from "./RouterComponents/RouterAbout";
import { RouterContact } from "./RouterComponents/RouterContact";
import { RouterGenres } from "./RouterComponents/RouterGenres/RouterGenres";
import { RouterLike } from "./RouterComponents/RouterLike";
import { initialReducer, movieReducer } from "./RouterComponents/movieReducer";

export const RouterApp = () => {
  const [state, dispatch] = useReducer(movieReducer, initialReducer);

  let likeMovie = (id) => {
    dispatch({ type: "like", id });
  };
  console.log(state.movies);
  return (
    <BrowserRouter>
      <>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/Genre/Action"}>Action</Link>
          </li>
          <li>
            <Link to={"/Genre/Drama"}>Drama</Link>
          </li>
          <li>
            <Link to={"/Like"}>Like</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" exact element={<RouterHome />} />
          <Route path="/About" exact element={<RouterAbout />} />
          <Route path="/Contact" exact element={<RouterContact />} />
          <Route
            path="/Genre/:genre"
            exact
            element={<RouterGenres data={state} onLike={likeMovie} />}
          />
          <Route
            path="/Like"
            exact
            element={<RouterLike data={state} onLike={likeMovie} />}
          />
        </Routes>
        <hr />
        {/* <RouterLike data={state} onLike={likeMovie} /> */}
      </>
    </BrowserRouter>
  );
};
