import React from "react";
import { PrevStateFunction } from "./function/PrevStateFunction";
import PrevStateClass from "./Class/PrevStateClass";

export const Main = () => {
  return (
    <div className="row p-1">
      <div className="col-6 border">
        <PrevStateFunction />
      </div>
      <div className="col-6 border">
        <PrevStateClass />
      </div>
    </div>
  );
};
