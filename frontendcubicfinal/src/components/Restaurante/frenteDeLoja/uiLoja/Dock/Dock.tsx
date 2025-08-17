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
      <button className="flex justify-center items-center">
        <Link
          className="flex flex-col justify-center items-center"
          href="/restaurante"
        >
          <Home />
          <span className="justify-center items-center dock-label">Home</span>
        </Link>
      </button>

      <button className="flex justify-center items-center dock-active">
        <Link
          className="flex flex-col justify-center items-center"
          href="/restaurante/busca"
        >
          <Search />
          <span className="dock-label">Buscar</span>
        </Link>
      </button>

      <button className="flex justify-center items-center">
        <Link
          className="flex flex-col justify-center items-center"
          href="/restaurante/pedidos"
        >
          <ReceiptText />
          <span className="dock-label">Pedidos</span>
        </Link>
      </button>

      <button className="flex justify-center items-center">
        <Link
          className="flex flex-col justify-center items-center"
          href="/restaurante/sobre"
        >
          <Store />
          <span className="justify-center dock-label">Sobre nós</span>
        </Link>
      </button>
    </div>
  );
}

export default Dock;
