import React from "react";

export default function Definition(props) {
  console.log(props.info);

  if (props.info) {
    return (
      <div className="main-text">
        <h5 className="card-title" id="noun"></h5>
        <p className="card-text" id="define">
          {props.info.meanings.map(function (meaning, index) {
            return meaning.definitions[0].definition;
          })}
        </p>
        <h1 className="bigword">{props.info.word}</h1>{" "}
        <small className="text-muted" id="small">
          [ yoo-ree-uhs ]
        </small>
      </div>
    );
  } else return null;
}
