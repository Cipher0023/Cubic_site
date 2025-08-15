import Display2x1 from "@/components/restaurante/Dashboard_components/Data_display/Display2x1/Display2x1";
import Display3x1 from "@/components/restaurante/Dashboard_components/Data_display/Display3x1/Display3x1";
import Display_main from "@/components/restaurante/Dashboard_components/Data_display/Display_main/Display_main";
import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-start items-center bg-base-200 min-h-screen">
      <h1 className="m-4 font-bold text-3xl text-center">
        Área de gerenciamento
      </h1>
      <div className="flex flex-col gap-4 p-4 w-full">
        {/*lista superior*/}
        <div className="flex flex-row gap-4 bg-base-100 p-4 border-2 border-base-300 rounded-2xl w-full h-50">
          <Display2x1 />
          <Display2x1 />
          <Display2x1 />
          <Display2x1 />
        </div>
      </div>
      <div className="flex flex-row gap-4 p-4 w-full">
        {/*display principal*/}
        <Display_main />
        <div className="flex flex-col justify-start items-start gap-4 bg-base-100 p-2 rounded-2xl w-1/3 h-full">
          <Display3x1 />
          <Display3x1 />
          <Display3x1 />
          <Display3x1 />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 w-full">
        <div className="flex flex-row gap-4 bg-base-100 p-4 border-2 border-base-300 rounded-2xl w-full h-50">
          {/*lista inferior*/}
          <Display2x1 />
          <Display2x1 />
          <Display2x1 />
          <Display2x1 />
        </div>
      </div>
    </div>
  );
}
