"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  FiHome,
  FiPlusCircle,
  FiFolderPlus,
  FiClipboard,
  FiSettings,
} from "react-icons/fi";

import CreateRequestForm from "./forms/CreateRequestForm";
import ProjectRegistryForm from "./forms/ProjectRegistryForm";
import ProjectPortfolioForm from "./forms/ProjectPortfolioForm";
import * as Dialog from "@radix-ui/react-dialog";
import { FiX } from "react-icons/fi";

const adminLinks = [
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

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white shadow-md border-b">
        <h1 className="text-lg font-bold text-brand_1-600">AMSU Admin</h1>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="text-3xl text-brand_1-600">
            <RiMenu3Fill />
          </SheetTrigger>

          {/* MOBILE DRAWER */}
          <SheetContent
            side="left"
            className="bg-white border-none px-6 py-10 w-72"
          >
            <SheetHeader>
              <SheetTitle className="text-xl font-bold text-brand_1-600">
                AMSU Admin
              </SheetTitle>
            </SheetHeader>

            <ul className="mt-10 flex flex-col gap-4">
              {adminLinks.map((item, index) => {
                const isActive = pathname === item.href;

                if (item.type === "link") {
                  return (
                    <li key={index}>
                      <Link
                        href={item.href!}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? "bg-brand_1-100 text-brand_1-700"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="text-xl">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={index}>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button
                          onClick={() => setOpen(false)}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100 transition-all"
                        >
                          <span className="text-xl">{item.icon}</span>
                          {item.name}
                        </button>
                      </Dialog.Trigger>

                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl z-50">
                          <div className="flex justify-between items-center mb-6">
                            <Dialog.Title className="text-xl font-bold text-slate-800">
                              {item.name}
                            </Dialog.Title>
                            <Dialog.Close className="text-gray-400 hover:text-gray-600">
                              <FiX size={24} />
                            </Dialog.Close>
                          </div>

                          {item.component}
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </li>
                );
              })}
            </ul>

            {/* ACCOUNT SECTION */}
            <div className="mt-10 border-t pt-6">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-64 h-screen bg-white shadow-lg border-r flex-col justify-between">
        <div>
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-brand_1-600">AMSU Admin</h1>
          </div>

          <nav className="px-4 py-6 space-y-2">
            {adminLinks.map((item, index) => {
              const isActive = pathname === item.href;

              if (item.type === "link") {
                return (
                  <Link
                    key={index}
                    href={item.href!}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-brand_1-100 text-brand_1-700 font-semibold"
                        : "text-gray-700 hover:bg-brand_1-50"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                );
              }

              return (
                <Dialog.Root key={index}>
                  <Dialog.Trigger asChild>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-brand_1-50 hover:text-brand_1-700 transition-all">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </button>
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl z-50">
                      <div className="flex justify-between items-center mb-6">
                        <Dialog.Title className="text-xl font-bold text-slate-800">
                          {item.name}
                        </Dialog.Title>
                        <Dialog.Close className="text-gray-400 hover:text-gray-600">
                          <FiX size={24} />
                        </Dialog.Close>
                      </div>

                      {item.component}
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t text-center text-xs text-gray-500">
          <UserButton fallback="/" />
          <div className="mt-3">© {new Date().getFullYear()} AMSU Admin</div>
        </div>
      </aside>
    </>
  );
}
