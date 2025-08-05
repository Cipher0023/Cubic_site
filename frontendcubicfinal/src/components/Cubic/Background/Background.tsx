import React from "react";
import Rain from "./efeitosSVG/Rain";

type Props = object;

function Background({}: Props) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-indigo-950 to-base-200 ">
      <div className="w-full h-full blur-md">
        <Rain />
      </div>
    </div>
  );
}

export default Background;
