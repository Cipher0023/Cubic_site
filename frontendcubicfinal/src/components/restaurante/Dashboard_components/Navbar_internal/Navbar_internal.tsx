import React from "react";
import Search_internal from "./Search_internal/Search_internal";
import Avatar_internal from "./Avatar_internal/Avatar_internal";
import Sidebar from "../Sidebar/Sidebar";

function Navbar_internal() {
  return (
    <div className="navbar bg-neutral yshadow-xl">
      <div className="navbar-start">
        <Sidebar />
      </div>
      <div className="navbar-center">
        <Search_internal />
      </div>
      <div className="navbar-end gap-2">
        <Avatar_internal />
      </div>
    </div>
  );
}

export default Navbar_internal;
