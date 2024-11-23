import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLink({ openMenu, text, path }) {
  return (
    <NavLink
      to={path}
      className={`rounded-sm ${openMenu ? "rounded-none border-none transition-all duration-75 hover:shadow-[0_1px_0_0_#23a8b1]" : "border-[#2cd2dd]"} bg-transparent px-3 py-2 text-xs uppercase text-[#2cd2dd] hover:border-[#23a8b1] hover:text-[#23a8b1] oldPhone:px-2 oldPhone:py-1 android:text-sm md:text-lg`}
    >
      {text}
    </NavLink>
  );
}
