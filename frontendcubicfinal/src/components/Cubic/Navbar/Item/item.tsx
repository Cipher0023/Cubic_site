"use client";
import Link from "next/link";
import { useViewportContext } from "@/context/ViewportContext";

export interface NavItemInterface {
  url: string;
  label: string;
  isActive?: boolean;
}

export default function NavItem(props: NavItemInterface) {
  const { isMobile } = useViewportContext();
  if (isMobile) {
    return (
      <li
        className={`text-sm font-normal transition-colors duration-200
        border-b-2 hover:text-blue-500
        ${
          props.isActive
            ? "text-white border-blue-500"
            : "text-white border-transparent"
        }
      `}
      >
        <Link href={props.url}>{props.label}</Link>
      </li>
    );
  }
  return (
    <li
      className={`
        m-3 text-3xl font-normal transition-colors duration-200
        border-b-2 hover:text-blue-500
        ${
          props.isActive
            ? "text-white border-blue-500"
            : "text-white border-transparent"
        }
      `}
    >
      <Link href={props.url}>{props.label}</Link>
    </li>
  );
}
