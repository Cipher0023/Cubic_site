import Display2x1 from "@/components/Dashboard_components/Data_display/Display2x1/Display2x1";
import Display3x1 from "@/components/Dashboard_components/Data_display/Display3x1/Display3x1";
import Display_main from "@/components/Dashboard_components/Data_display/Display_main/Display_main";
import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-base-200">
      <h1 className="text-3xl font-bold text-center m-4">
        Área de gerenciamento
      </h1>
      <div className=" w-full p-4 flex flex-col gap-4">
        {/*lista superior*/}
        <div className="bg-base-100 border-2 border-base-300 w-full rounded-2xl h-50 flex flex-row gap-4 p-4">
          <Display2x1 />
          <Display2x1 />
          <Display2x1 />
          <Display2x1 />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full p-4">
        {/*display principal*/}
        <Display_main />
        <div className="flex flex-col justify-start items-start bg-base-100 rounded-2xl w-1/3 h-full gap-4 p-2">
          <Display3x1 />
          <Display3x1 />
          <Display3x1 />
          <Display3x1 />
        </div>
      </div>
      <div className=" w-full p-4 flex flex-col gap-4">
        <div className="bg-base-100 border-2 border-base-300 w-full rounded-2xl h-50 flex flex-row gap-4 p-4">
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
