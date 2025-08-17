import React from "react";
import Image from "next/image";

type Props = object;

function Card_small({}: Props) {
  return (
    <div>
      <div className="card w-110 bg-base-300 card-md shadow-xl m-4">
        <div className="card-body flex-row text-base-100">
          <div className="relative w-full aspect-[1/1] rounded-4xl overflow-hidden">
            <Image
              src="/logo.png"
              alt="AG Restaurante Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="card-title text-xl">Item</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="justify-end card-actions items-center">
              <div className="font-bold text-lg ">R$23,99</div>
              <button className=" text-lg btn btn-secondary">Adicionar</button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Card_small;
