import React, { useState } from "react";
import "./Search.css";
import { GlobalContext } from "./StateContextProvider";

function Search() {
  const [text, setText] = useState("");
  const [{ data }, dispatch] = GlobalContext();

  const addToBasket = () => {
    dispatch({
      type: "ADD_DOC",
      item: {
        id: Math.floor(Math.random() * 10000),
        text,
      },
    });
    setText("");
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  console.log(data);

  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()} className="search_form">
        <input
          value={text}
          onChange={textHandler}
          className="search_form-text"
          type="text"
        />
        <button className="search_form-btn" type="submit" onClick={addToBasket}>
          Add From Here
        </button>
      </form>
    </div>
  );
}

export default Search;
