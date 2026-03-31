"use client";

import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import Socials from "./Socials";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "serivces",
    path: "serivces",
  },
  {
    name: "projects",
    path: "projects",
  },
  {
    name: "contact",
    path: "contact",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-white flex items-center justify-center text-3xl">
        <RiMenu3Fill />
      </SheetTrigger>

      <SheetContent side="right" className="bg-primary text-white border-none">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          {/* Header */}
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>

          {/* Nav links */}
          <ul className="w-full flex flex-col gap-6 items-center justify-center">
            {links.map((link, indx) => (
              <li
                key={indx}
                className="text-white uppercase font-semibold tracking-[1.2px]"
              >
                <ScrollLink
                  to={link.path}
                  smooth
                  spy
                  duration={500}
                  activeClass="text-accent"
                  className="cursor-pointer text-lg font-primary capitalize hover:text-brand-yellow transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="mt-10">
            <Socials containerStyles="text-white text-xl flex gap-6" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
