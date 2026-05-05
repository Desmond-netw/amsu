"use client";

import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

interface ButtonProps {
  text: string;
  linkstring: string;
}

const Button = ({ text, linkstring }: ButtonProps) => {
  return (
    <Link
      href={linkstring}
      className="
        w-full sm:w-64 
        h-14 
        px-6 
        flex items-center justify-between group 
        /* Base: Darkest shade for authority | Hover: Main brand color */
        bg-brand_1-900 hover:bg-brand_1-500 active:bg-brand_1-600
        text-white
        rounded-xl transition-all duration-500 
        shadow-[0_10px_20px_-10px_rgba(14,141,60,0.3)]
        hover:shadow-[0_15px_25px_-5px_rgba(14,141,60,0.4)]
        border border-brand_1-800/30
      "
    >
      {/* Text */}
      <span
        className="
          flex-1 text-left 
          tracking-wide
          font-semibold 
          text-sm md:text-base
        "
      >
        {text}
      </span>

      {/* Icon Container */}
      <div
        className="
          w-10 h-10
          /* Light tint of green for the box */
          bg-brand_1-400/20
          flex items-center justify-center 
          rounded-lg
          transition-all duration-500
          group-hover:bg-white
          group-hover:scale-110
        "
      >
        <RiArrowRightLine
          className="
            text-brand_1-100 
            text-xl
            transition-colors duration-500 
            group-hover:text-brand_1-700
          "
        />
      </div>
    </Link>
  );
};

export default Button;
