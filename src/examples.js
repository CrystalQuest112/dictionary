import React from "react";

export default function Examples(props) {
  console.log(props.info.meanings[0].definitions[0].example);
  if (props.info)
    return (
      <div className="examples">
        {props.info.meanings[0].definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>{definition.example}</p>
            </div>
          );
        })}
      </div>
    );
  else {
    return `Looking for examples?`;
  }
}
