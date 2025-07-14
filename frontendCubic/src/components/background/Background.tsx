import React from "react";
import Rain from "../efeitosSVG/Rain";

type Props = object;

function Background({}: Props) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-1 bg-gradient-to-br from-indigo-950 to-blue-950 blur-sm">
      <Rain />
    </div>
  );
}

export default Background;
