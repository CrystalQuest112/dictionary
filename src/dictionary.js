import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";

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

  console.log();

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
          <div className="main-text">
            <p className="card-title" id="noun">
              noun
            </p>
            <p className="card-text" id="define">
              {info.meanings[0].definitions[0].definition}
            </p>
            <p className="card-text" id="define">
              {info.meanings[0].definitions[1].definition}
            </p>
            <h1 className="bigword">{info.word}</h1>{" "}
            <small className="text-muted" id="small">
              {info.phonetic}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
