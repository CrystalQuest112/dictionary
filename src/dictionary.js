import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";
import Define from "./define";

function Dictionary() {
  const [keyword, setKeyword] = useState("uraeus");
  const [info, setInfo] = useState(null);

  function defineWord(response) {
    console.log(response.data[0]);
    setInfo(response.data[0]);
  }

  function searchWord(event) {
    setKeyword(event.target.value);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(defineWord);
  }
  function getWord(event) {
    event.preventDefault();
    search();
  }

  if (info) {
    return (
      <div className="layout">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" id="navy">
          word
        </nav>
        <section className="section-one">
          <form onSubmit={getWord}>
            <input
              type="search"
              placeholder="find word"
              onChange={searchWord}
            ></input>
            <input type="submit" value="search" id="button"></input>
          </form>
          <br />
          <Define info={info} />
        </section>
        <section className="section-two">
          <div>photo</div>
          <div>origin</div>
        </section>
        <section className="section-three">
          <div>text</div>
          <div>text</div>
        </section>
      </div>
    );
  } else {
    search();
    return "DICTIONARY";
  }
}
export default Dictionary;
