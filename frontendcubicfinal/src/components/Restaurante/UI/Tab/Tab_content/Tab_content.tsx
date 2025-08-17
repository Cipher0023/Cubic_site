import Card_small from "@/components/Restaurante/frenteDeLoja/Card/Card_small/Card_small";
import React from "react";

type Props = object;

function Tab_content({}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      <Card_small />
      <Card_small />
      <Card_small />
      <Card_small />
      <Card_small />
      <Card_small />
      <Card_small />
      <Card_small />
    </div>
  );
}

export default Tab_content;
