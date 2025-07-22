import Link from "next/link";
import React from "react";

type Props = object;

function Footer({}: Props) {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-top p-4 h-50">
      <Link href="/funcionario">Anderson Restaurante 2025</Link>
    </footer>
  );
}

export default Footer;
