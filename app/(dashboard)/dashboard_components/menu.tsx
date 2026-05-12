"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import {
  FiPlusCircle,
  FiFolderPlus,
  FiClipboard,
  FiLogOut,
  FiUser,
  FiX,
} from "react-icons/fi";
import { GrUserWorker } from "react-icons/gr";

// Components
import CreateRequestForm from "../forms/CreateRequestForm";
import ProjectPortfolioForm from "../forms/ProjectPortfolioForm";
import ProjectRegistryForm from "../forms/ProjectRegistryForm";

const menuItems = [
  {
    title: "Menu",
    items: [
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
        name: "Staff list",
        icon: <GrUserWorker />,
        type: "link",
        href: "/admin/staff",
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        name: "Profile",
        icon: <FiUser />,
        type: "link",
        href: "/admin/profile",
      },
      {
        name: "Logout",
        icon: <FiLogOut />,
        type: "link",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      {menuItems.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          {/* Section Title */}
          <span className="hidden lg:block text-slate-400 font-bold text-xs uppercase px-4 mb-2 tracking-wider">
            {section.title}
          </span>

          {section.items.map((item) => {
            const isActive = pathname === item.href;

            // RENDER LINK ITEM
            if (item.type === "link") {
              return (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-brand_1-100 text-brand_1-700 font-semibold"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="hidden md:block text-sm font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            }

            // RENDER MODAL ITEM
            return (
              <Dialog.Root key={item.name}>
                <Dialog.Trigger asChild>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 transition-all text-left">
                    <span className="text-xl">{item.icon}</span>
                    <span className="hidden md:block text-sm font-medium">
                      {item.name}
                    </span>
                  </button>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                  <Dialog.Content
                    className="
                        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[95%] max-w-lg 
                        bg-white p-8 rounded-xl shadow-2xl z-50 
                        /* Remove any h- or min-h- classes */
                        max-h-[90vh] flex flex-col
                    "
                  >
                    <div className="flex justify-between items-center mb-6 shrink-0">
                      <Dialog.Title className="text-xl font-bold text-slate-800">
                        {item.name}
                      </Dialog.Title>
                      <Dialog.Close className="text-gray-400 hover:text-gray-600">
                        <FiX size={24} />
                      </Dialog.Close>
                    </div>

                    {/* This wrapper is the secret. 
                        It will be as tall as the form, until it hits 90vh, then it scrolls. 
                    */}
                    <div className="overflow-y-auto custom-scrollbar">
                      {item.component}
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
