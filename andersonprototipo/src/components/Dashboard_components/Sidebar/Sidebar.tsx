import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function Sidebar({}: Props) {
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
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href="/dashboard" className=" rounded-full overflow-hidden">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/produtos"
              className=" rounded-full overflow-hidden"
            >
              Produtos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
