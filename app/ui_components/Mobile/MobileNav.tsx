"use client";

import { useState } from "react";
import Link from "next/link"; // Changed from react-scroll
import { usePathname } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../logo/Logo";
import Socials from "../Socials/Socials";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-white flex items-center justify-center text-3xl">
        <RiMenu3Fill />
      </SheetTrigger>

      <SheetContent side="right" className="bg-primary text-white border-none">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>

          <ul className="w-full flex flex-col gap-6 items-center justify-center">
            {links.map((link, indx) => (
              <li key={indx}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)} // Closes sheet on click
                  className={`text-white uppercase font-semibold tracking-[1.2px] text-lg hover:text-brand-yellow transition ${
                    pathname === link.path ? "text-brand-yellow" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Socials containerStyles="text-white text-xl flex gap-6" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
