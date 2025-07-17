import Register_form from "@/components/Register_form/Register_form";
import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-base-200">
      <Register_form />
    </div>
  );
}
