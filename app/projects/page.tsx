"use client";

import React from "react";
import Image from "next/image";
import Pretitle from "@/app/ui_components/pretitle/Pretitile";
import Container from "@/app/ui_components/Container";
import { ScrollArea } from "@radix-ui/themes";

const ProjectsPage = () => {
  const projectCards = [
    {
      title: "Sewer Line Expansion",
      img: "/assets/projects/project01.jpeg",
      desc: "Upgrading 5km of main sewer lines to increase capacity for the growing urban population.",
    },
    {
      title: "Treatment Plant Upgrade",
      img: "/assets/projects/project02.jpg",
      desc: "Implementation of advanced biological filtration systems to improve effluent quality.",
    },
    {
      title: "Pumping Station Refurbishment",
      img: "/assets/projects/projectsBanner.jpg",
      desc: "Complete overhaul of electrical and mechanical components at the central pumping hub.",
    },
    {
      title: "Sewer Line Expansion",
      img: "/assets/projects/project01.jpeg",
      desc: "Upgrading 5km of main sewer lines to increase capacity for the growing urban population.",
    },
    {
      title: "Treatment Plant Upgrade",
      img: "/assets/projects/project02.jpg",
      desc: "Implementation of advanced biological filtration systems to improve effluent quality.",
    },
    {
      title: "Pumping Station Refurbishment",
      img: "/assets/projects/project04.webp",
      desc: "Complete overhaul of electrical and mechanical components at the central pumping hub.",
    },
  ];

  const projectTable = [
    {
      sn: "01",
      desc: "Construction of gravity sewer network for El Premier Construction at Ministry of Works and Housing Development to the Roman Ridge Central Sewerage Network",
      loc: "Roman Ridge",
      client: "El Premier Construction Ltd",
    },
    {
      sn: "02",
      desc: "Construction and connection of Mpr Airport 10-Townhouses project to the Roman Ridge Central Sewerage Network",
      loc: "Airport Residential Area",
      client: "MPR Airport Townhouses",
    },
    {
      sn: "03",
      desc: "Connection of VAAL Real Estate Apartments to the central sewerage system at Accra High School",
      loc: "North Ridge",
      client: "VAAL real Estate",
    },
    {
      sn: "04",
      desc: "Connection of HUS IMPACTS LTD. To the Central Sewerage System. Installation of Industrial Pre-treatment Units",
      loc: "Mamprobi",
      client: "HUS IMPACTS LTD.",
    },
    {
      sn: "05",
      desc: "Diversion of 225mm gravity sewer and sewer connection for Goldkey Properties at 1st Rangoon Lane, Cantonments",
      loc: "1st Rangoon Lane, Cantonments",
      client: " Goldkey Properties",
    },
    {
      sn: "06",
      desc: "Connection of Alisa Hotel to the central sewerage system at Accra High School",
      loc: "North Ridge",
      client: "Alisa Hotel",
    },
    {
      sn: "07",
      desc: "Construction of gravity sewer network  for Ghana Interbank Payment and Settlement Systems (GhIPSS) ",
      loc: "Ridge, Accra",
      client: "Ghana Interbank Payment and Settlement Systems (GhIPSS) ",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* --- Section 1: Hero Header --- */}
      {/* --- Section 1: Hero Header with Banner Image --- */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white text-center py-24 md:py-32"
        style={{
          backgroundImage: "url('/assets/projects/projectsBanner.jpg')",
        }} // Absolute path
      >
        {/* Dark Tint Overlay for text readability */}
        <div className="absolute inset-0 bg-brand_1-900/70 z-10"></div>

        {/* Content (Must be positioned relative/z-20 to sit above overlay) */}
        <div className="relative z-20">
          <Container>
            <Pretitle text="Our Portfolio" center />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 uppercase tracking-wider">
              Infrastructure Excellence
            </h1>
            <p className="mt-5 text-slate-200 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Explore the specialized engineering projects driving sustainable
              wastewater solutions across the capital.
            </p>
          </Container>
        </div>
      </section>

      {/* --- Section 2: Visual Project Cards --- */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectCards.map((card, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-5 bg-slate-50 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-brand_1-800 group-hover:text-brand_1-600 transition-colors">
                    {card.title}
                  </h3>
                </div>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={card.img}
                    fill
                    alt={card.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                  <button className="mt-4 text-brand_1-600 font-semibold text-sm hover:underline">
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- Section 3: Professional Project Ledger --- */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-brand_1-50">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-brand_1-900">
              Project Registry
            </h2>
            <div className="w-20 h-1.5 bg-brand_1-500 mt-2"></div>
          </div>

          <div className="rounded-xl border border-slate-200 shadow-xl bg-white overflow-hidden">
            {/* The ScrollArea must wrap the Table, or be used inside a div that behaves like a table */}
            <ScrollArea
              type="always"
              scrollbars="horizontal"
              style={{ width: "100%" }}
            >
              <div className="min-w-[900px]">
                {" "}
                {/* Prevents table squishing on small screens */}
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 z-10 bg-brand_1-800 text-white">
                    <tr>
                      <th className="p-5 w-20 font-semibold uppercase text-xs tracking-wider border-b border-brand_1-700">
                        S/N
                      </th>
                      <th className="p-5 font-semibold uppercase text-xs tracking-wider border-b border-brand_1-700">
                        Project Description
                      </th>
                      <th className="p-5 w-48 font-semibold uppercase text-xs tracking-wider border-b border-brand_1-700">
                        Location
                      </th>
                      <th className="p-5 w-56 font-semibold uppercase text-xs tracking-wider border-b border-brand_1-700">
                        Client
                      </th>
                    </tr>
                  </thead>
                </table>
                <ScrollArea
                  type="hover"
                  scrollbars="vertical"
                  style={{ height: "400px" }}
                >
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-slate-100">
                      {projectTable.map((row, i) => (
                        <tr
                          key={i}
                          className="hover:bg-brand_1-50/30 transition-colors"
                        >
                          <td className="p-5 w-20 text-brand_1-600 font-bold align-top">
                            {row.sn}
                          </td>
                          <td className="p-5 text-slate-800 font-medium align-top leading-relaxed">
                            {row.desc}
                          </td>
                          <td className="p-5 w-48 align-top">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 whitespace-nowrap">
                              {row.loc}
                            </span>
                          </td>
                          <td className="p-5 w-56 text-slate-600 italic align-top">
                            {row.client}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
              </div>
            </ScrollArea>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ProjectsPage;
