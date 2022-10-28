import React from "react";

export default function Define(props) {
  console.log(props.info);
  if (props.info) {
    return (
      <div className="main-text">
        <p className="card-title" id="noun"></p>
        <p className="card-text" id="define">
          {props.info.meanings.map(function (meaning, index) {
            return <ul className="set">{meaning.definitions[0].definition}</ul>;
          })}
        </p>
        <h1 className="bigword">{props.info.word}</h1>{" "}
        <small className="text-muted" id="small">
          {props.info.phonetic}
        </small>
      </div>
    );
  } else {
    return null;
  }
}
