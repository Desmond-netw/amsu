"use client";

import Image from "next/image";
import ServiceCard from "../ui_components/Card/serviceCard";
import Link from "next/link";
import Pretitle from "../ui_components/pretitle/Pretitile";

const servicesData = [
  {
    title: "Sewerage Collection and Treatment",
    bgImage: "./assets/services/service-thumb_1.webp",
    link: "/services/treatment",
  },
  {
    title: "Wastewater Management",
    bgImage: "./assets/services/service-thumb_1.webp",
    link: "/services/wastewater",
  },
  {
    title: "Sewer Network Maintenance and Repair",
    bgImage: "./assets/services/service-thumb_1.webp",
    link: "/services/repair",
  },
  {
    title: "Customer Service and Support",
    bgImage: "./assets/services/service-thumb_1.webp",
    link: "/services/customer-support",
  },
  {
    title: "Industrial Wastewater Treatment",
    bgImage: "./assets/services/service-thumb_1.webp",
    link: "/services/industrial-treatment",
  },
  {
    title: "Sewerage Network Design and Construction",
    bgImage: "./assets/services/service-thumb_1.webp",
    link: "/services/consultation",
  },
];

const ServicesPage = () => {
  return (
    <div className="w-full">
      {/*---------- Banner Section -------- */}
      <div className="relative w-full h-[50vh] min-h-[140px]">
        <Image
          src="./assets/banner/serviceBanner.webp"
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

      {/* ---------- Page Content ---------- */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <Pretitle text="What We Offer" />

        <p className="text-gray-700 leading-relaxed">
          {/* Add your services content here */}
          With a strong commitment to operational excellence and regulatory
          compliance, we deliver sewerage services tailored to meet the needs of
          households, businesses, and industries across Accra.
        </p>
      </div>
      {/* Service Cards Wrapper */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <Link href={service.link} key={index}>
            <ServiceCard title={service.title} bgImage={service.bgImage} />
          </Link>
        ))}
      </div>
      {/* --- Service Summary -- */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Pretitle text="Why Choose Us?" />

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
          {/* Add your service summary content here */}
          Accra Metro Sewerage Unit provides sustainable sewerage services in{" "}
          <strong>Accra, Ghana</strong>. It manages wastewater collection,
          treatment, and network maintenance using advanced technology. Its
          goals are protecting public health, the environment, and supporting
          urban growth through safety, integrity, and innovation. Partnerships
          with GWCL and EPA ensure compliance with national standards.
        </p>
      </div>
      {/* ------------ Certifications and Affiliations */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-md sm:text-base md:text-2xl font-semibold text-brand-700 mb-6">
          Our Certifications and Affiliations
        </h2>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
          {/* Add your certifications and affiliations content here */}
          Accra Metro Sewerage Unit is proud to hold certifications and
          affiliations with.
        </p>
        {/* certifications and affiliations logos */}
        <div className="w-full flex flex-wrap items-center justify-center gap-6 mt-6">
          <Image
            src="./assets/services/certifications/ghanwaterLogo.png"
            alt="Ghana Water Authority"
            width={150}
            height={100}
            className="object-contain"
          />
          <Image
            src="./assets/services/certifications/epa.png"
            alt="ISO 14001 Certification"
            width={80}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
