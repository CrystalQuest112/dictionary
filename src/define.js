import React from "react";
import graphic from "./graphic.png";
import Phonetic from "./phonetic.js";

export default function Define(props) {
  console.log(props.info);
  if (props.info) {
    return (
      <section className="main-text">
        <div class="card" id="large-card">
          <h1 className="bigword">{props.info.word}</h1>{" "}
          <small className="text-muted" id="small">
            {props.info.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </small>
          {props.info.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                {" "}
                <ul className="set">{meaning.definitions[0].definition}</ul>
              </div>
            );
          })}
          <div></div>
        </div>
        <img src={graphic} width={420} alt="graphic"></img>
      </section>
    );
  } else {
    return null;
  }
}
