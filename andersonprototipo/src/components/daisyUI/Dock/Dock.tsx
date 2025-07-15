import React from "react";
import { Home } from "lucide-react";
import { Search } from "lucide-react";
import { ReceiptText } from "lucide-react";
type Props = object;

function Dock({}: Props) {
  return (
    <div className="dock dock-xl">
      <button>
        <Home />
        <span className="dock-label">Home</span>
      </button>

      <button className="dock-active">
        <Search />
        <span className="dock-label">Buscar</span>
      </button>

      <button>
        <ReceiptText />
        <span className="dock-label">Pedidos</span>
      </button>

      <button>
        <ReceiptText />
        <span className="dock-label">Pedidos</span>
      </button>
    </div>
  );
}

export default Dock;
