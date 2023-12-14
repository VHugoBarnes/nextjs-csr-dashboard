import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import { CgPokemon } from "react-icons/cg";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subtitle: "Visualizacion"
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subtitle: "Contador Client Side"
  },
  {
    path: "/dashboard/pokemons",
    icon: <CgPokemon size={40} />,
    title: "Pokemons",
    subtitle: "List of Pokemon"
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" /><span>Dash</span><span className="text-blue-500">8</span>.</h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10 space-y-2">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              height={30}
              width={30}
              src="https://media.licdn.com/dms/image/D4E03AQGlIai4z3Kbng/profile-displayphoto-shrink_400_400/0/1678137554592?e=1707955200&v=beta&t=3hbgAP5MmWiE8oAnq67BdrUrB5by19ac5U-WUPT15Dg"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Victor Vazquez
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {
          menuItems.map((item) => (
            <SidebarMenuItem
              key={item.path}
              {...item}
            />
          ))
        }
      </div>
    </div>
  );
};