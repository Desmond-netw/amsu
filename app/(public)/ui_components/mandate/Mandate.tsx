import React from "react";

const Mandate = () => {
  return (
    <section
      className="
        relative 
        py-16 px-6 xl:px-24 
        bg-[url('/assets/mandate/bg.jpg')]
        bg-cover bg-center bg-no-repeat
        mb-10 
        xl:mb-32
      "
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col xl:flex-row gap-12 items-center">
        {/* Title */}
        <div className="xl:w-1/3 text-center xl:text-left">
          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4">
            Our Mandate
          </h2>

          {/* Brand underline */}
          <div className="w-20 h-1 bg-red-950 mx-auto xl:mx-0 rounded-full"></div>
        </div>

        {/* Divider */}
        <div className="hidden xl:block w-px h-40 bg-white"></div>

        {/* Text Content */}
        <div className="xl:w-2/3 text-white">
          <p className="text-lg mb-6 uppercase tracking-wide">
            We specialize in:
          </p>

          <ul className="space-y-4 list-disc list-inside text-base xl:text-lg font-medium">
            <li>
              Planning and expanding municipal and industrial sewer networks
            </li>
            <li>
              Constructing and commissioning state-of-the-art sewer pump
              stations
            </li>
            <li>Supplying and installing high-quality sewer pipes</li>
            <li>Installing and maintaining advanced sewer pumps</li>
            <li>
              Providing comprehensive construction and maintenance services
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mandate;
