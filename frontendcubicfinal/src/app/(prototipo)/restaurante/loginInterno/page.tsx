import Inside_form from "@/components/restaurante/Login_form/Inside/Inside_form";
import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-base-200 min-h-screen">
      <Inside_form />
    </div>
  );
}
