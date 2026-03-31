"use client";

import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "accent" | "white";
  size?: "sm" | "md" | "lg";
  radius?: "md" | string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  variant = "primary",
  size = "md",
  radius = "rounded-full",
  className = "",
}) => {
  // Logic for Background Colors
  const variants = {
    primary: "bg-slate-900 hover:bg-blue-700",
    accent: "bg-blue-600 hover:bg-slate-900",
    white: "bg-white hover:bg-gray-100",
  };

  // Logic for Sizing
  const sizes = {
    sm: "h-10 pl-4 pr-1 text-[10px]",
    md: "h-12 pl-6 pr-1 text-xs",
    lg: "h-14 pl-8 pr-2 text-sm",
  };

  const buttonContent = (
    <button
      onClick={onClick}
      className={`
        group flex items-center ${radius} overflow-hidden transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      <span
        className={`
        font-bold uppercase tracking-widest
        ${variant === "white" ? "text-slate-900" : "text-white"}
      `}
      >
        {text}
      </span>

      {/* Icon Circle */}
      <div
        className={`
        ml-4 flex items-center justify-center rounded-full transition-all duration-300
        ${size === "sm" ? "w-8 h-8" : "w-10 h-10"}
        ${variant === "white" ? "bg-slate-100 group-hover:bg-slate-200" : "bg-white/10 group-hover:bg-white/20"}
      `}
      >
        <RiArrowRightUpLine
          className={`
          text-xl group-hover:rotate-45 transition-all duration-300
          ${variant === "white" ? "text-slate-900" : "text-white"}
        `}
        />
      </div>
    </button>
  );

  // If href is provided, wrap in Next.js Link
  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};

export default Button;
