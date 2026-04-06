"use client";
// useage : <Button text="Learn More" href="/services/treatment" />

import Link from "next/link";
import { RiArrowRightFill } from "react-icons/ri";

interface ButtonProps {
  text: string;
  href: string; // route link
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="
        w-full sm:w-52 
        h-10 sm:h-12 
        py-2 sm:py-3 px-3 
        flex items-center justify-between group 
        bg-brand_1-500 hover:bg-brand_1-600 active:bg-brand_1-700
        border-2 border-brand_1-700
        rounded-lg transition-all duration-300
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
          w-8 h-8 sm:w-4 sm:h-4
          bg-white 
          flex items-center justify-center 
          rounded-md
          transition-all duration-300
          group-hover:bg-brand_1-50
          group-active:bg-brand_1-100
        "
      >
        <RiArrowRightFill
          className="
            text-brand_1-700 
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
