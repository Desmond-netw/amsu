"use client";

import { BiMessageRoundedDots } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { UserButton } from "@clerk/nextjs";

const DashNavbar = () => {
  ``;
  return (
    <div className="flex items-center justify-between p-4">
      {/* Dashboard Navbar */}
      <div>Search AREA</div>
      {/*  ICONS AND USER INFO */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <BiMessageRoundedDots className="fill-current" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <GrAnnounce className="fill-current" />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white">
            1
          </div>
        </div>
        {/* User Info */}
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Larry Donkor</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <UserButton fallback="/" />
      </div>
    </div>
  );
};

export default DashNavbar;
