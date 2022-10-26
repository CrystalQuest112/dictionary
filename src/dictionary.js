import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";

function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function defineWord(response) {
    console.log(response.data[0]);
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
          <div className="main-text">
            <h5 className="card-title" id="noun">
              noun
            </h5>
            <p className="card-text" id="define">
              the sacred asp as represented upon the headdress of divinities and
              royal personages of ancient Egypt, usually directly over the
              forehead, as an emblem of supreme power.
            </p>
          </div>
          <h1 className="bigword">uraeus</h1>{" "}
          <small className="text-muted" id="small">
            [ yoo-ree-uhs ]
          </small>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
