"use client";

interface ServiceCardProps {
  title: string;
  bgImage: string;
}

const ServiceCard = ({ title, bgImage }: ServiceCardProps) => {
  return (
    <div
      className="
        relative 
        h-56 sm:h-64 
        rounded-sm 
        overflow-hidden 
        shadow-lg 
        group 
        cursor-pointer
        hover:shadow-2xl 
        transition-all duration-500
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-brand_1-500/70 group-hover:bg-brand_1-500/60 transition-all duration-500" />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h2
          className="text-white text-sm 
                sm:text-base 
                md:text-lg 
                tracking-[1.2px] font-bold text-center drop-shadow-lg"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ServiceCard;
