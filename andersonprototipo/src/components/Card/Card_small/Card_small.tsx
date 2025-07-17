import React from "react";
import Image from "next/image";

type Props = object;

function Card_small({}: Props) {
  return (
    <div>
      <div className="card w-96 bg-base-300 card-md shadow-xl m-4">
        <div className="card-body flex-row">
          <div className="relative w-full aspect-[1/1] rounded-4xl overflow-hidden">
            <Image
              src="/logo.png"
              alt="AG Restaurante Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="card-title">Item</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="justify-end card-actions"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_small;
