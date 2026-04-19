"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  FiHome,
  FiPlusCircle,
  FiFolderPlus,
  FiClipboard,
  FiSettings,
  FiX,
} from "react-icons/fi";

// Import your form components (we'll create placeholders below)
import CreateRequestForm from "./forms/CreateRequestForm";
import ProjectRegistryForm from "./forms/ProjectRegistryForm";
import ProjectPortfolioForm from "./forms/ProjectPortfolioForm";

const menuItems = [
  { name: "Dashboard", icon: <FiHome />, href: "/admin", type: "link" },
  {
    name: "Create Request",
    icon: <FiPlusCircle />,
    type: "modal",
    component: <CreateRequestForm />,
  },
  {
    name: "Project Registry",
    icon: <FiFolderPlus />,
    type: "modal",
    component: <ProjectRegistryForm />,
  },
  {
    name: "Project Portfolio",
    icon: <FiClipboard />,
    type: "modal",
    component: <ProjectPortfolioForm />,
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    href: "/admin/settings",
    type: "link",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) router.push("/sign-in");
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn)
    return <div className="w-64 h-screen bg-white border-r animate-pulse" />;

  return (
    <aside className="w-64 h-screen bg-white shadow-lg border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
            AMSU Admin
          </h1>
        </div>

        <nav className="px-4 py-6 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;

            // RENDER LINK
            if (item.type === "link") {
              return (
                <Link
                  key={index}
                  href={item.href!}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-blue-50"}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            }

            // RENDER MODAL TRIGGER
            return (
              <Dialog.Root key={index}>
                <Dialog.Trigger asChild>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                  <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-slate-100 p-8 rounded-xl shadow-2xl z-50">
                    <div className="flex justify-between items-center mb-6">
                      <Dialog.Title className="text-xl font-bold text-slate-800">
                        {item.name}
                      </Dialog.Title>
                      <Dialog.Close className="text-gray-400 hover:text-gray-600">
                        <FiX size={24} />
                      </Dialog.Close>
                    </div>

                    {/* The specific form for this item */}
                    {item.component}
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between px-2 mb-4">
          <span className="text-xs text-gray-500 font-medium uppercase">
            Account
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="text-center text-[10px] text-gray-400">
          © {new Date().getFullYear()} AMSU Admin
        </div>
      </div>
    </aside>
  );
}
