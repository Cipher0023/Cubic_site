import React from "react";
import Rain from "../efeitosSVG/Rain";

type Props = object;

function Background({}: Props) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-gradient-to-br from-indigo-950 via-blue-700 to-cyan-500 blur-xs">
      <Rain />
    </div>
  );
}

export default Background;
