import React from "react";

export default function Images(props) {
  if (props.images) {
    return (
      <section className="section-three">
        {props.images.map(function (image, index) {
          return <img src={image.src.tiny} alt="thumbnail" />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
