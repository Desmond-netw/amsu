"use client";

import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[40vh] min-h-[280px]">
        <Image
          src="/assets/services/banner.webp" // replace with your image path
          alt="Services Banner"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Banner Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            Our Services
          </h1>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-brand-700 mb-6">
          What We Offer
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {/* Add your services content here */}
          Explore our wide range of engineering and wastewater management
          solutions.
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
