import React from "react";
import background from "./../assets/bg.jpg";

export default function Background() {
  return (
    <div>
      <img
        src={background}
        alt=""
        className="background-repeat: no-repeat, background-position: center, background-size: cover,background-attachment: fixed,"
      />
    </div>
  );
}
