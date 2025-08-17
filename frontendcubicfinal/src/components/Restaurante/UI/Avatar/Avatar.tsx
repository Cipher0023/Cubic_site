import Link from "next/link";
import React from "react";

type Props = object;

export default function Avatar({}: Props) {
  return (
    <div className="avatar">
      <Link href="/login" className="w-14 rounded-full overflow-hidden">
        <div className="">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
        </div>
      </Link>
    </div>
  );
}
