"use client";
import React from "react";
import Avatar_internal from "./Avatar_internal/Avatar_internal";
import Sidebar from "../Sidebar/Sidebar";
import useUserStore from "@/store/useUserStore";

function Navbar_internal() {
  const user = useUserStore((s) => s.user);
  const displayName = user?.name || "convidado";

  return (
    <div className="bg-neutral navbar yshadow-xl">
      <div className="navbar-start">
        <Sidebar />
      </div>
      <div className="navbar-center"></div>
      <div className="gap-2 navbar-end">
        <p className="text-accent-content">Olá, {displayName}</p>
        <Avatar_internal />
      </div>
    </div>
  );
}

export default Navbar_internal;
