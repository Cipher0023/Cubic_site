import React from "react";
import { merriweather } from "@/fonts/merriweather";
import Card_small from "../Card/Card_small/Card_small";

type Props = object;

function Tab({}: Props) {
  return (
    <div className={`${merriweather.className} tabs tabs-lift justify-center`}>
      <input
        type="radio"
        name="my_tabs_3"
        className="tab text-xl"
        aria-label="Tab 1"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6 ">
        <Card_small />
        <Card_small />
        <Card_small />
        <Card_small />
        <Card_small />
        <Card_small />
        <Card_small />
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab text-xl"
        aria-label="Tab 1"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6 ">
        Tab content 1
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab text-xl"
        aria-label="Tab 2"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        Tab content 2
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab text-xl"
        aria-label="Tab 3"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        Tab content 3
      </div>
    </div>
  );
}

export default Tab;
