import React from "react";

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
                  <div className="audio">
                    <small>{phonetic.text} </small>
                    <a href={phonetic.audio} target="_blank" rel="noreferrer">
                      {" "}
                      Listen
                    </a>
                  </div>
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
      </section>
    );
  } else {
    return null;
  }
}
