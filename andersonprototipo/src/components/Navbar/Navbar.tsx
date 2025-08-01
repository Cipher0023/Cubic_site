import React from "react";
import Image from "next/image";
import Shopping_cart from "./Shopping_cart/Shopping_cart";
import Searchbar from "./Serachbar/Searchbar";
import Avatar from "../Avatar/Avatar";

type Props = object;

function Navbar({}: Props) {
  return (
    <div className="navbar bg-neutral yshadow-xl">
      <div className="navbar-start">
        <Image
          src="/logoClean.png"
          alt="AG Restaurante Logo"
          width={60}
          height={60}
          className="rounded-2xl"
        />
      </div>
      <div className="navbar-center">
        <Searchbar />
      </div>
      <div className="navbar-end gap-2">
        <Shopping_cart />
        <Avatar />
      </div>
    </div>
  );
}

export default Navbar;
