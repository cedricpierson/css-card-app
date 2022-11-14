import React from "react";
import Image from "./Image";

export default function Card() {
  return (
    <div>
      <div className="container">
        <Image />
        <div className="box">
          <h1 className="title">Title</h1>
          <h2 className="secondary-text">Secondary text</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          ducimus sapiente cumque architecto libero maiores, omnis eveniet atque
          voluptatem similique!
          <p className="paragraph">Paragraphe</p>
        </div>
      </div>
    </div>
  );
}
