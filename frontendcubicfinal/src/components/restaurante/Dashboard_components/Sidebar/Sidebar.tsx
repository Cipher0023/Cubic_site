import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <Menu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="bg-base-200 p-4 w-80 min-h-full text-base-content menu">
          {/* Sidebar content here */}
          <li>
            <Link
              href="/gerenciamentorestaurante/dashboard"
              className="rounded-full overflow-hidden"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/gerenciamentorestaurante/dashboard/produtos"
              className="rounded-full overflow-hidden"
            >
              Produtos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
