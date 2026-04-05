import React from "react";

const HomeBanner = () => {
  return (
    <section className="relative h-[300px] bg-[url('./assets/banner/banner.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-brand_1-900 bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h5 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
          Leading Provider of Sewerage and Wastewater Management Services in
          Ghana
        </h5>
        <p className="text-lg md:text-xl">ACCRA METRO SEWERAGE PROJECT</p>
      </div>
    </section>
  );
};

export default HomeBanner;
