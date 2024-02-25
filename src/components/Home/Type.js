import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Passionate Frontend Engineer",
          "Innovative Problem Solver",
          "Contributing to Creative Storytelling",
          "Dedicated to Seamless User Experiences",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}

    />
  );
}

export default Type;
