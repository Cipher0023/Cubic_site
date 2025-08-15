import { ShoppingCart } from "lucide-react";
import React from "react";

type Props = object;

function Shopping_cart({}: Props) {
  return (
    <div>
      <button className="btn">
        <ShoppingCart />
        <div className="badge badge-sm badge-secondary">+99</div>
      </button>
    </div>
  );
}

export default Shopping_cart;
