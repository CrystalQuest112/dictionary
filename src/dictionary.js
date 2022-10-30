import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";
import Define from "./define";
import Examples from "./examples";
import Synonyms from "./synonyms";
import graphic from "./graphic.png";
import Images from "./images";

function Dictionary() {
  const [keyword, setKeyword] = useState("flower");
  const [info, setInfo] = useState(null);
  const [images, setImages] = useState(null);

  function defineWord(response) {
    console.log(response.data[0]);
    setInfo(response.data[0]);
  }

  function searchWord(event) {
    setKeyword(event.target.value);
  }

  function showPexImages(response) {
    setImages(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(defineWord);

    let apiPexUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let apiPexKey = "563492ad6f917000010000012dab4816e5cc462ca4b62353479eb8a9";

    let headers = { Authorization: `Bearer ${apiPexKey}` };
    axios.get(apiPexUrl, { headers: headers }).then(showPexImages);
  }
  function getWord(event) {
    event.preventDefault();
    search();
  }

  if (info) {
    return (
      <div className="layout">
        <section className="section-one">
          <section className=" top">
            <div className="word">DICTIONARY</div>
            <form onSubmit={getWord}>
              {" "}
              <div>
                <h2>what's the word?</h2>
              </div>
              <input
                className="change"
                type="search"
                placeholder="find word"
                onChange={searchWord}
              ></input>
              <input type="submit" value="search" id="button"></input>
            </form>
          </section>
          <br />

          <Define info={info} />
        </section>
        <section className="image">
          {" "}
          <img src={graphic} width={507} alt="graphic" id="cartoon"></img>
        </section>
        <section className="section-two">
          <div className="card" id="sm-card">
            <h3>usage</h3>
            <br />
            <Examples info={info} />
          </div>
          <div className="card" id="sm-card">
            <h3>synonyms</h3>
            <br />
            <Synonyms info={info} />
          </div>
        </section>
        <section className="section-three">
          <div> text</div>
          <Images images={images} />
        </section>
      </div>
    );
  } else {
    search();
    return "DICTIONARY";
  }
}
export default Dictionary;
