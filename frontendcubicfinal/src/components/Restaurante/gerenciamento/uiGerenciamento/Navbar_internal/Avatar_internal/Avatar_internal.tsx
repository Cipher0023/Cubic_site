import React from "react";
import Link from "next/link";

type Props = {};

function Avatar_internal({}: Props) {
  return (
    <div className="avatar">
      <Link href="/loginInterno" className="w-14 rounded-full overflow-hidden">
        <div className="">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
        </div>
      </Link>
    </div>
  );
}

export default Avatar_internal;
