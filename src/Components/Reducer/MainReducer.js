import React, { useReducer } from "react";

function reducer(state, action) {
  console.log("this is state: ", state);
  console.log("this is action: ", action);
  switch (action.type) {
    case "decrement":
      return state;

    case "incrisment":
      return state;

    default:
      return state;
  }
}
export const MainReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  function decrement() {
    dispatch({ type: "decrement" });
  }
  function incrisment() {
    dispatch({ type: "incrisment" });
  }

  return (
    <div className="m-5">
      <button onClick={decrement} className="btn btn-sm btn-secondary">
        -
      </button>
      <span className="mx-1">{state.count}</span>
      <button onClick={incrisment} className="btn btn-sm btn-secondary">
        +
      </button>
    </div>
  );
};

// import React, { useState, useReducer } from "react";
// import { act } from "react-dom/test-utils";

// function reducer(state, action) {
//   //   return { count: state.count + 1 };
//   switch (action.type) {
//     case "decrement":
//       return { count: state.count - 1 };

//     case "incriment":
//       return { count: state.count + 1 };

//     default:
//       return state;
//   }
// }
// export const MainReducer = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   let decrement = () => {
//     dispatch({ type: "decrement" });
//     // setCount((prevState) => prevState - 1);
//   };
//   let incriment = () => {
//     dispatch({ type: "incriment" });
//     // setCount((prevState) => prevState + 1);
//   };

//   return (
//     <div className="m-5">
//       <button className="btn btn-sm btn-secondary" onClick={decrement}>
//         -
//       </button>
//       <span className="mx-1">{state.count}</span>
//       <button className="btn btn-sm btn-secondary" onClick={incriment}>
//         +
//       </button>
//     </div>
//   );
// };
