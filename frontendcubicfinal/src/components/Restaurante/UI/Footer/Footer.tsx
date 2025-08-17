import Link from "next/link";
import React from "react";

type Props = object;

function Footer({}: Props) {
  return (
    <footer className="items-top bg-neutral p-4 h-50 text-neutral-content footer sm:footer-horizontal">
      <Link href="/restaurante/loginInterno">Anderson Restaurante 2025</Link>
    </footer>
  );
}

export default Footer;
