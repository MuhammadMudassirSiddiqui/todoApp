import React from "react";
import "./EachValue.css";
import { GlobalContext } from "./StateContextProvider";

function EachValue({ task, id }) {
  const [{ data }, dispatch] = GlobalContext();
  const removeTodo = () => {
    dispatch({
      type: "REMOVE_DOC",
      id: id,
    });
  };

  return (
    <div className="eachValue" onClick={removeTodo}>
      <h3>{task}</h3>
    </div>
  );
}

export default EachValue;
