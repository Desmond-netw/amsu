import React from "react";
import Container from "@/app/ui_components/Container";
import StationsSwiper from "../ui_components/stationsSwiper/stations-swiper";
import StationsAccordion from "../ui_components/stationsSwiper/stationAccordion";

const StationsPage = () => {
  return (
    <main>
      {/* 1. Hero Section - 50vh with Fixed Background */}
      <section
        className="relative h-[50vh] w-full bg-contain bg-center bg-no-repeat bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/pumpStations/station_0.jpg')",
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
            Our Pump Stations
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Strategically located pumping stations and treatment plants ensuring
            efficient wastewater management across the Accra Metropolis.
          </p>
        </div>
      </section>

      {/* 2. Content Section - This scrolls OVER the hero */}
      <section className="relative z-20 bg-white py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-brand_1-800">
              Transfer Pumping Stations in Accra
            </h2>
            <span className="block w-24 h-1 bg-brand_1-500 mx-auto mt-4"></span>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our transfer pumping stations are located strategically across the
              city of Accra and are designed to lift wastewater from lower
              elevations to higher elevations, enabling their efficient
              conveyance through pipelines to the treatment plants. These
              Pumping stations play a critical role in maintaining continuous
              flow within the sewer network, especially in areas where gravity
              flow is not feasible. Equipped with pumps, electrical control
              systems, and standby power generators, these Pumping Stations
              ensure reliable and uninterrupted wastewater transport.
            </p>
          </div>
          <span className="block w-24 h-1 bg-brand_1-500 mx-auto mt-4 mb-12"></span>
          {/* Station Grid Example */}

          <StationsSwiper />
          {/*----------  Station Card 2 ---------------- */}

          {/*  ===== Stations Table Accordion list ==== */}
          <StationsAccordion />
        </Container>
      </section>
    </main>
  );
};

export default StationsPage;
