import Pretitle from "@/app/ui_components/pretitle/Pretitile";
import ServiceDetail from "../serviceDetail";
// import Container from "@/app/ui_components/Container";
import Image from "next/image";
import Button from "@/app/ui_components/button/button";

export default function ConstructionPage() {
  return (
    <div>
      <ServiceDetail
        title="Sewer Network Maintenance and Repair"
        description="Our sewer network maintenance and repair services ensure the longevity and efficiency of your wastewater infrastructure. We provide comprehensive solutions to address issues such as blockages, leaks, and structural damage, helping to maintain a healthy and functional sewer system."
      />
      {/* --- Two Side Image & Text --- */}
      <div className="flex flex-col md:flex-row items-center sm:gap-4 sm:my-2 md:gap-8 md:my-8 bg-grey-100 p-6 rounded-lg shadow-md">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/assets/services/maintenance/maintenance-1.png"
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
            Regular maintenance and prompt repair services ensure the integrity
            of our sewerage network, minimizing disruptions and environmental
            risks. Our team of skilled technicians and engineers utilize
            advanced equipment and techniques to detect and resolve issues
            efficiently. We prioritize safety and environmental responsibility
            in all our maintenance and repair activities, ensuring that our
            services contribute to a cleaner and healthier environment for our
            communities.
          </p>
          {/* btn */}
          <Button text="Request Quote" linkstring="/services" />
        </div>
      </div>

      {/*   ---- Site Photos---- */}
      <div className="my-8 flex flex-col items-center">
        <Pretitle text="Recent Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((num) => (
            <Image
              key={num}
              src={`/assets/services/maintenance/maintenance-${num}.png`}
              alt={`Maintenance Project ${num}`}
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
