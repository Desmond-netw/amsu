"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* Ensure the path /logo.png exists in your /public folder */}
      <Image
        src="./assets/logo/logo.png"
        alt="AMSU Logo"
        width={width || 50}
        height={height || 50}
        priority
        className="object-contain"
      />
      <div className="hidden xl:flex flex-col leading-none">
        <span className="text-primary font-bold text-xl tracking-tighter">
          AMSU
        </span>
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">
          Accra Metro Sewerage
        </span>
      </div>
    </Link>
  );
};

export default Logo;
