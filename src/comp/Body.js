import React from "react";
import EachValue from "./EachValue";
import "./Body.css";
import { GlobalContext } from "./StateContextProvider";

export default function Body() {
  const [{ data }, dispatch] = GlobalContext();

  return (
    <div className="bodyy">
      {data.map((eachData) => (
        <EachValue key={eachData.id} task={eachData.text} id={eachData.id} />
      ))}
    </div>
  );
}
