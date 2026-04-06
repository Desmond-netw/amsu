import Pretitle from "@/app/ui_components/pretitle/Pretitile";
import ServiceDetail from "../serviceDetail";
// import Container from "@/app/ui_components/Container";
import Image from "next/image";

export default function ConstructionPage() {
  return (
    <div>
      <ServiceDetail
        title="Sewerage Network Design and Construction"
        description="Our engineering team provides expert consultation, design, and construction services for sewerage networks of all scales."
      />
      {/* --- Two Side Image & Text --- */}
      <div className="flex flex-col md:flex-row items-center gap-8 my-8">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/assets/services/construction/construction-0.webp"
            alt="Sewerage Construction"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        {/* Text */}
        <div className="md:w-1/3">
          <h3 className="text-sm sm:text-base md:text-2xl font-semibold mb-4">
            Our Approach
          </h3>
          <p className="text-gray-700 mb-4">
            Our team of experts designs and constructs sewerage networks,
            ensuring efficient and reliable wastewater management. We utilize
            advanced technologies and materials to ensure durability and
            sustainability.
          </p>
          <p className="text-gray-700">
            From initial consultation to final inspection, we work closely with
            our clients to deliver sustainable and cost-effective sewerage
            solutions.
          </p>
        </div>
      </div>

      {/*   ---- Site Photos---- */}
      <div className="my-8">
        <Pretitle text="Recent Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((num) => (
            <Image
              key={num}
              src={`/assets/services/construction/construction-${num}.webp`}
              alt={`Construction Project ${num}`}
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
