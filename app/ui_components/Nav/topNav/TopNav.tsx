"use client";

import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";
import Socials from "../../Socials/Socials";
import Link from "next/link";

export const Topbar = () => {
  return (
    <section className="hidden lg:flex w-full h-10 bg-gradient-to-t from-brand_1-800 to-brand_1-900 text-xs text-white items-center">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* LEFT: Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <RiPhoneFill className="text-sm" />
            <span>+233 (0) 302 234944</span>
          </div>

          <div className="flex items-center gap-2">
            <RiMailFill className="text-sm" />
            <span>info@accrametrosewerage.com</span>
          </div>

          <div className="hidden xl:flex items-center gap-2">
            <AiFillClockCircle className="text-sm" />
            <span>Mon - Fri: 08:00 – 17:00</span>
          </div>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-6">
          <Link href="/admin" className="text-xs font-medium hover:underline">
            Login / Register
          </Link>

          <Socials
            containerStyles="flex items-center gap-3"
            iconStyles="text-white text-sm hover:opacity-80 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
