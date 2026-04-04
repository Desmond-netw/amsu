import React from "react";
import { RiArrowRightFill } from "react-icons/ri";

const Button = ({ text }: { text: string }) => {
  return (
    <div
      className="
        w-52 h-12 
        py-3 px-3 
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
        tracking-[1.2px] 
        font-primary font-semibold 
        text-white uppercase
      "
      >
        {text}
      </div>

      {/* Arrow Box */}
      <div
        className="
          w-11 h-11 
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
            text-xl 
            transition-all duration-300 
            group-hover:rotate-45
          "
        />
      </div>
    </div>
  );
};

export default Button;
