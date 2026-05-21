"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const stationsData = [
  {
    id: 1,
    stationName: "Legon Sewage Pumping Station #1",
    stationImg: "/assets/pumpStations/legonStation.jpg",
    pumpType: "Self-Priming Lift Pumps",
    pumpImg: "/assets/pumpStations/legonPump.png",
    pumpDesc:
      "High-capacity pumps designed for heavy solids handling and continuous operation in raw sewage environments.",
  },
  {
    id: 2,
    stationName: "Achimota Sewage Pumping station #2",
    stationImg: "/assets/pumpStations/station_0.jpg",
    pumpType: " Centrifugal Submersible Pumps",
    pumpImg: "/assets/pumpStations/achimotaPump.jpg",
    pumpDesc:
      "Utilized for gravity-fed systems to elevate wastewater to treatment ponds with minimal energy consumption.",
  },
  {
    id: 3,
    stationName: "Labone Sewage Pumping Station #3",
    stationImg: "/assets/pumpStations/laboneStation.jpg",
    pumpType: "Grinder Pump System", // Corrected the type name here
    pumpImg: "/assets/pumpStations/labonePump.jpg",
    pumpDesc:
      "Reduces large waste particles into a fine slurry, preventing clogs in the smaller diameter pressurized lines.",
  },
];

const StationsSwiper = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-2xl shadow-xl bg-white overflow-hidden border border-gray-100"
      >
        {stationsData.map((station) => (
          <SwiperSlide key={station.id}>
            <div className="flex flex-col md:flex-row w-full min-h-[450px]">
              {/* Left Side: Station Background Image */}
              <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                <Image
                  src={station.stationImg}
                  fill
                  alt={station.stationName}
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand_1-900 p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {station.stationName}
                  </h3>
                </div>
              </div>

              {/* Right Side: Technical Info */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="mb-6">
                  <span className="text-brand_1-500 font-bold text-xs uppercase tracking-widest">
                    Technical Specifications
                  </span>
                  <h4 className="text-2xl font-bold text-gray-800 mt-1">
                    {station.pumpType}
                  </h4>
                  <div className="w-12 h-1 bg-brand_1-500 mt-2"></div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col gap-6">
                  <p className="text-gray-600 leading-relaxed">
                    {station.pumpDesc}
                  </p>

                  {/* PUMP IMAGE: Hidden on small screens, block on medium+ */}
                  <div className="hidden md:block relative w-full h-40 mt-2">
                    <Image
                      src={station.pumpImg}
                      fill
                      alt={`${station.pumpType} technical view`}
                      className="object-cover rounded-lg shadow-inner border border-gray-100"
                    />
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-brand_1-700 font-semibold cursor-pointer hover:gap-4 transition-all w-fit">
                  <span>View Station Logs</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(0, 102, 204, 0.5);
          width: 35px !important;
          height: 35px !important;
          border-radius: 50%;
          transform: scale(0.8);
        }
        .swiper-pagination-bullet-active {
          background: #0066cc !important;
        }
      `}</style>
    </div>
  );
};

export default StationsSwiper;
