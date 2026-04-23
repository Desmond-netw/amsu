"use client";
// usage : <Button text="Learn More" linkstring="/services/treatment" />

import Link from "next/link";
import { RiArrowRightFill } from "react-icons/ri";

interface ButtonProps {
  text: string;
  linkstring: string; // route link
}

const Button = ({ text, linkstring }: ButtonProps) => {
  return (
    <Link
      href={linkstring}
      className="
        w-full sm:w-52 
        h-10 sm:h-12 
        py-2 sm:py-3 px-3 
        flex items-center justify-between group 
        bg-blue-600 hover:bg-blue-700 active:bg-blue-800
        border-2 border-blue-800
        rounded-lg transition-all duration-300 shadow-md
      "
    >
      {/* Text */}
      <div
        className="
          flex-1 text-center 
          tracking-[0.5px] sm:tracking-[1.2px] 
          font-primary font-semibold 
          text-white uppercase
          text-xs sm:text-sm md:text-base
        "
      >
        {text}
      </div>

      {/* Arrow Box */}
      <div
        className="
          w-8 h-8 sm:w-6 sm:h-6
          bg-white 
          flex items-center justify-center 
          rounded-md
          transition-all duration-300
          group-hover:bg-blue-50
          group-active:bg-blue-100
        "
      >
        <RiArrowRightFill
          className="
            text-blue-700 
            text-lg sm:text-sm md:text-base 
            transition-all duration-300 
            group-hover:rotate-45
          "
        />
      </div>
    </Link>
  );
};

export default Button;
