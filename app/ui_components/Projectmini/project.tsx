"use client";

import Projectcard from "../Card/ProjectCard";
import Pretitle from "../pretitle/Pretitile";

const projectData = [
  {
    id: 1,
    title: "Waste Stabilization Pond",
    description:
      "Waste Stabilization Ponds (WSP) have proven to be effective for treating wastewater, and the construction of low energy-consuming ecosystems that use natural processes...",
    imageUrl: "./assets/projectmini/thumb2.webp",
  },
  {
    id: 2,
    title: "Laboratory and Testing Services",
    description:
      "Physicochemical parameters such as pH, temperature, BOD, COD, TSS, DO, nutrients, and more are monitored to assess wastewater quality...",
    imageUrl: "./assets/projectmini/thumb1.jpg",
  },
  {
    id: 3,
    title: "Sewerage machinery and vehicles",
    description:
      "Our range of sewerage vehicles and machines are essential for the efficient operation and maintenance of wastewater collection systems...",
    imageUrl: "./assets/projectmini/thumb3.jpg",
  },
];

const ProjectMini = () => {
  return (
    <section className="py-20 px-6 xl:px-24 bg-gradient-to-b from-[#bfe9ff] via-[#e8f7ff] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Pretitle text="Check out" center={true} />
          <h2 className="h2 mt-4 text-primary text-center">
            Projects & Innovations
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((data) => (
            <Projectcard
              key={data.id}
              title={data.title}
              description={data.description}
              imageUrl={data.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectMini;
