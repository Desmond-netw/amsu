"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
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

  return (
    <aside
      className="
        w-64 h-screen bg-white shadow-lg border-r border-gray-200
        flex flex-col justify-between
      "
    >
      {/* Logo / Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-brand_1-700 tracking-wide">
          AMSU Admin
        </h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700
              hover:bg-brand_1-50 hover:text-brand_1-700 transition-all duration-300
              ${pathname === item.href ? "bg-brand_1-100 text-brand_1-700 font-semibold" : ""}
            `}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
      <div>
        {/* logout button */}
        <UserButton fallback="/" />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AMSU Admin
      </div>
    </aside>
  );
}
