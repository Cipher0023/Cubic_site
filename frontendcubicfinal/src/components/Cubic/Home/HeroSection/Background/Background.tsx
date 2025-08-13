import React from "react";
import Rain from "./efeitosSVG/Rain";
import Circuit from "./efeitosSVG/Circuit";

type Props = object;

function Background({}: Props) {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <Circuit />
      </div>
    </div>
  );
}

export default Background;
