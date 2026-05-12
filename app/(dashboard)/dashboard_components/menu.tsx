"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import {
  FiGrid,
  FiPlusSquare,
  FiDatabase,
  FiLayers,
  FiUsers,
  FiActivity,
  FiClock,
  FiBriefcase,
  FiUser,
  FiLogOut,
  FiX,
  FiHome,
} from "react-icons/fi";

// Components
import CreateRequestForm from "../forms/CreateRequestForm";
import ProjectPortfolioForm from "../forms/ProjectPortfolioForm";
import ProjectRegistryForm from "../forms/ProjectRegistryForm";

const menuItems = [
  {
    title: "Management",
    items: [
      {
        name: "Dashboard",
        icon: <FiHome />,
        type: "link",
        href: "/admin",
        visible: ["admin", "manager", "staff"],
      },
      {
        name: "Service Tickets",
        icon: <FiGrid />,
        type: "link",
        href: "/ServiceTickets",
        visible: ["admin", "manager", "staff"],
      },
      {
        name: "Create Request",
        icon: <FiPlusSquare />,
        type: "modal",
        component: <CreateRequestForm />,
        visible: ["admin", "manager", "staff"],
      },
      {
        name: "Project Registry",
        icon: <FiDatabase />,
        type: "modal",
        component: <ProjectRegistryForm />,
        visible: ["admin", "manager"],
      },
      {
        name: "Work Portfolio",
        icon: <FiLayers />,
        type: "modal",
        component: <ProjectPortfolioForm />,
        visible: ["admin", "manager"],
      },
      {
        name: "Personnel Directory",
        icon: <FiUsers />,
        type: "link",
        href: "/Staff",
        visible: ["admin", "manager"],
      },
    ],
  },
  {
    title: "Monitoring",
    items: [
      {
        name: "Active Operations",
        icon: <FiActivity />,
        type: "link",
        href: "/admin/active-requests",
        visible: ["admin", "manager"],
      },
      {
        name: "Pending Inquiries",
        icon: <FiClock />,
        type: "link",
        href: "/admin/new-request",
        visible: ["admin", "manager"],
      },
      {
        name: "Project Archives",
        icon: <FiBriefcase />,
        type: "link",
        href: "/admin/recent-projects",
        visible: ["admin", "manager", "staff"],
      },
    ],
  },
  {
    title: "User Account",
    items: [
      {
        name: "My Profile",
        icon: <FiUser />,
        type: "link",
        href: "/admin/profile",
        visible: ["admin", "manager", "staff"],
      },
      {
        name: "Sign Out",
        icon: <FiLogOut />,
        type: "link",
        href: "/logout",
        visible: ["admin", "manager", "staff"],
      },
    ],
  },
];

// I added role as a prop here so your logic "item.visible.includes(role)" has a value to check against
const Menu = ({ role = "staff" }: { role?: string }) => {
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

            //  Visibility Logic
            if (item.visible.includes(role)) {
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
                    <span className="hidden lg:block text-sm font-medium">
                      {item.name}
                    </span>
                  </Link>
                );
              }

              // RENDER MODAL ITEM
              if (item.type === "modal") {
                return (
                  <Dialog.Root key={item.name}>
                    <Dialog.Trigger asChild>
                      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 transition-all text-left">
                        <span className="text-xl">{item.icon}</span>
                        <span className="hidden lg:block text-sm font-medium">
                          {item.name}
                        </span>
                      </button>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg bg-white p-8 rounded-xl shadow-2xl z-50 max-h-[90vh] flex flex-col">
                        <div className="flex justify-between items-center mb-6 shrink-0">
                          <Dialog.Title className="text-xl font-bold text-slate-800">
                            {item.name}
                          </Dialog.Title>
                          <Dialog.Close className="text-gray-400 hover:text-gray-600">
                            <FiX size={24} />
                          </Dialog.Close>
                        </div>

                        <div className="overflow-y-auto custom-scrollbar">
                          {item.component}
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                );
              }
            }
            return null; // Return null if role not visible
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
