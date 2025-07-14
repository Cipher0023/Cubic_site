import React from "react";
import { Chakra_Petch } from "next/font/google";
import { Cubic } from "@/components/cubeLogo/Cubic";
import { useViewportContext } from "@/context/ViewportContext";

const chakra = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

type Props = {};

function HeroSection({}: Props) {
  const { isMobile } = useViewportContext();
  if (isMobile) {
    return (
      <div>
        <div className="flex items-center">
          <h1
            className={`
                ${chakra.className} font-bold text-4xl
                text-transparent
                bg-clip-text 
                bg-linear-to-r from-white to-gray-400    
              `}
          >
            CUBIC developers
          </h1>

          <div className="flex bg-red-500-0 w-2/5 aspect-square items-center justify-center">
            <Cubic />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-center">
        <h1
          className={`
                ${chakra.className} font-bold text-8xl
                text-transparent
                bg-clip-text 
                bg-linear-to-r from-white to-gray-400`}
        >
          CUBIC developers
        </h1>
        <div className="flex bg-red-500-0 w-2/5 aspect-square items-center justify-center">
          <Cubic />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
