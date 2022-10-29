import React from "react";

export default function Phonetic(props) {
  return (
    <div className="audio">
      <small>{props.phonetic.text} </small>
      <a href={props.phonetic.audio} target="_blank">
        {" "}
        Listen
      </a>
    </div>
  );
}
