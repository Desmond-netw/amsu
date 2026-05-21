"use client";

import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

interface RouteBtnProps {
  text: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const RouteBtn = ({
  text,
  href,
  onClick,
  type = "button",
  className = "",
}: RouteBtnProps) => {
  // Common styles to ensure consistency
  const baseStyles = `
    mt-4 flex items-center gap-2 
    text-brand_1-600 font-bold text-sm 
    hover:text-brand_1-800 transition-all duration-300 
    group cursor-pointer
  `;

  const content = (
    <>
      <span>{text}</span>
      <RiArrowRightLine className="text-lg transition-transform group-hover:translate-x-1" />
    </>
  );

  // If href is provided, render as a Next.js Link
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  // If no href, render as a standard button
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className} border-none bg-transparent p-0`}
    >
      {content}
    </button>
  );
};

export default RouteBtn;
