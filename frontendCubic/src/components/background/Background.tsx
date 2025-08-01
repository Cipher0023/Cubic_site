import React from "react";
import Rain from "../efeitosSVG/Rain";

type Props = object;

function Background({}: Props) {
  return (
    <div className="flex w-full h-full bg-gradient-to-br from-indigo-950 to-blue-950 blur-sm">
      <Rain />
    </div>
  );
}

export default Background;
