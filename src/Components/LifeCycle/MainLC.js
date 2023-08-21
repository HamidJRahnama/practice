import React from "react";
import ClassLC from "./Class component LifeCycle/ClassLC";
import { FunctionLC } from "./Function omponent/FunctionLC";

export const MainLC = () => {
  return (
    <div className="container">
      <FunctionLC />
      <hr />
      <ClassLC />
    </div>
  );
};
