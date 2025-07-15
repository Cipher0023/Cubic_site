import React from "react";
import Image from "next/image";

type Props = object;

function Card_small({}: Props) {
  return (
    <div>
      <div className="card w-96 bg-base-200 card-md shadow-sm m-4">
        <div className="card-body flex-row">
          <Image
            src="/logo.png"
            alt="AG Restaurante Logo"
            width={100}
            height={10}
            className="rounded-4xl"
          />
          <div>
            <h2 className="card-title">Medium Card</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_small;
