import React from "react";
import { Home } from "lucide-react";
import { Search } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { Store } from "lucide-react";
import Link from "next/link";
type Props = object;

function Dock({}: Props) {
  return (
    <div className="dock dock-xl">
      <button className="flex items-center justify-center">
        <Link className="flex flex-col items-center justify-center" href="/">
          <Home />
          <span className="dock-label  justify-center items-center">Home</span>
        </Link>
      </button>

      <button className="flex items-center justify-center dock-active">
        <Link
          className="flex flex-col items-center justify-center"
          href="/busca"
        >
          <Search />
          <span className="dock-label">Buscar</span>
        </Link>
      </button>

      <button className="flex items-center justify-center">
        <Link
          className="flex flex-col items-center justify-center"
          href="/pedidos"
        >
          <ReceiptText />
          <span className="dock-label">Pedidos</span>
        </Link>
      </button>

      <button className="flex items-center justify-center">
        <Link
          className="flex flex-col items-center justify-center"
          href="/sobre"
        >
          <Store />
          <span className="dock-label justify-center">Sobre nós</span>
        </Link>
      </button>
    </div>
  );
}

export default Dock;
