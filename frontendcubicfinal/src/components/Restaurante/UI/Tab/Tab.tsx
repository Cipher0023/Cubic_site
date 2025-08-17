import React from "react";
import { merriweather } from "@/fonts/merriweather";
import Tab_content from "./Tab_content/Tab_content";

type Props = object;

function Tab({}: Props) {
  return (
    <div className="felx flex-col items-ceneter justify-center m-4">
      <div
        className={`${merriweather.className} tabs tabs-border justify-center`}
      >
        <input
          type="radio"
          name="my_tabs_4"
          className="tab w-20 h-20 m-2 text-center text-wrap text-xl whitespace-normal break-words"
          aria-label="Combos com Coca"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 rounded-3xl shadow-xl min-h-screen">
          <Tab_content />
        </div>
      </div>
    </div>
  );
}

export default Tab;
