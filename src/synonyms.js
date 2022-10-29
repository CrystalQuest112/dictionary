import React from "react";

export default function Synonyms(props) {
  console.log(props.info.meanings[0].synonyms);
  if (props.info)
    return (
      <div className="synonyms">
        {props.info.meanings[0].synonyms.map(function (synonym, index) {
          return (
            <div key={index}>
              <ul>
                <li>{synonym}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  else {
    return `Looking for synonyms?`;
  }
}
