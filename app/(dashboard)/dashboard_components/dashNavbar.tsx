"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import { BiMessageRoundedDots } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";

const DashNavbar = () => {
  // 1. Hook into Clerk client-side session state
  const { isLoaded, isSignedIn, user } = useUser();

  // 2. Safely capture the publicMetadata role we configured earlier (fallback to staff)
  const role = (user?.publicMetadata?.role as string) || "staff";

  // 3. Fallback name if firstName/lastName aren't loaded or available
  const fullName = user
    ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
    : "Loading...";

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-slate-100 shadow-sm">
      {/* Dashboard Navbar Search AREA */}
      <div className="text-sm font-medium text-slate-400">Search Area...</div>

      {/* ICONS AND USER INFO */}
      <div className="flex items-center gap-6">
        {/* Messages */}
        <div className="bg-slate-50 text-slate-600 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors">
          <BiMessageRoundedDots className="text-lg" />
        </div>

        {/* Announcements */}
        <div className="bg-slate-50 text-slate-600 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer relative hover:bg-slate-100 transition-colors">
          <GrAnnounce className="text-md" />
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center rounded-full bg-brand_1-500 text-white text-[9px] font-bold">
            1
          </div>
        </div>

        {/* User Details Block */}
        {isLoaded && isSignedIn && (
          <div className="flex flex-col text-right">
            <span className="text-xs font-semibold text-slate-800 leading-tight">
              {fullName || user.emailAddresses[0]?.emailAddress}
            </span>
            <span className="text-[10px] text-slate-400 font-bold capitalize tracking-wider mt-0.5">
              {role}
            </span>
          </div>
        )}

        {/* Clerk Profile Control Switch */}
        <UserButton fallback="/" />
      </div>
    </div>
  );
};

export default DashNavbar;
