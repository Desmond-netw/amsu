"use client";

// Usage : <Button text="Submit" onClick={() => console.log("Clicked")} />
interface CTAButtonProps {
  text: string;
  onClick: () => void;
}

const CTAButton = ({ text, onClick }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
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
    </button>
  );
};

export default CTAButton;
