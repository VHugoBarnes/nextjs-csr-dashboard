"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  path: string,
  icon: React.JSX.Element,
  title: string,
  subtitle: string,
};

export const SidebarMenuItem = (props: Props) => {
  const path = usePathname();

  return (
    <Link
      href={props.path}
      className={`
        w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 transition ease-linear duration-150 py-3
        ${path === props.path ? "bg-blue-800 hover:bg-white/5" : "hover:bg-white/5"}
      `}
    >
      <div>
        {props.icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{props.title}</span>
        <span className="text-sm text-white/50 hidden md:block">{props.subtitle}</span>
      </div>
    </Link>
  );
};