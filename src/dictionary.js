import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";
import Definition from "./definition";

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [info, setInfo] = useState("null");

  function defineWord(response) {
    console.log(response.data[0]);
    setInfo(response.data[0]);
  }

  function searchWord(event) {
    setKeyword(event.target.value);
  }

  function getWord(event) {
    event.preventDefault();
    alert(`${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(defineWord);
  }

  return (
    <div className="box1">
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={getWord}>
            <input
              type="search"
              placeholder="find word"
              onChange={searchWord}
            ></input>
            <input type="submit" value="search"></input>
          </form>
          <br />
          <Definition info={info} />
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
