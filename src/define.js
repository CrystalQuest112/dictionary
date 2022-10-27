import React from "react";

export default function Define(props) {
  console.log(props.info);
  if (props.info) {
    return (
      <div className="main-text">
        <p className="card-title" id="noun">
          part of speech
        </p>
        <p className="card-text" id="define">
          {props.info.meanings[0].definitions[0].definition}
        </p>
        <p className="card-text" id="define">
          {props.info.meanings[0].definitions[1].definition}
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
