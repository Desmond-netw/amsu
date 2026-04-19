"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Grouped imports
import { UserButton, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import {
  FiHome,
  FiPlusCircle,
  FiFolderPlus,
  FiClipboard,
  FiSettings,
  FiMoreHorizontal,
} from "react-icons/fi";

const menuItems = [
  { name: "View Requests", icon: <FiHome />, href: "/admin/requests" },
  {
    name: "Create Request",
    icon: <FiPlusCircle />,
    href: "/admin/create-request",
  },
  {
    name: "Project Registry",
    icon: <FiFolderPlus />,
    href: "/admin/project-registry",
  },
  {
    name: "Project Portfolio",
    icon: <FiClipboard />,
    href: "/admin/project-portfolio",
  },
  { name: "Others", icon: <FiMoreHorizontal />, href: "/admin/others" },
  { name: "Settings", icon: <FiSettings />, href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoaded, userId, isSignedIn } = useAuth();

  useEffect(() => {
    // 2. Redirect if Clerk is ready but no one is logged in
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  // 3. Loading state to prevent Sidebar from flickering empty links
  if (!isLoaded || !isSignedIn) {
    return (
      <div className="w-64 h-screen bg-white border-r border-gray-200 p-6 animate-pulse" />
    );
  }

  return (
    <aside
      className="
        w-64 h-screen bg-white shadow-lg border-r border-gray-200
        flex flex-col justify-between
      "
    >
      <div>
        {/* Logo / Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
            AMSU Admin
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => {
            // Check if the current link is active
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between px-2 mb-4">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
            Account
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="text-center text-[10px] text-gray-400">
          © {new Date().getFullYear()} AMSU Admin System
        </div>
      </div>
    </aside>
  );
}
