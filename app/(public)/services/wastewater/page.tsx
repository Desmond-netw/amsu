import Pretitle from "@/app/(public)/ui_components/pretitle/Pretitile";
import ServiceDetail from "../serviceDetail";
import Image from "next/image";
import ExpandableText from "@/app/(public)/ui_components/ExpandableText/ExpandableText";

export default function WastewaterPage() {
  return (
    <div>
      <ServiceDetail
        title="Wastewater Management Services"
        description="Our comprehensive wastewater management services include collection, treatment, and disposal solutions tailored to meet the needs of residential, commercial, and industrial clients."
      />

      {/* --- Section 1: Legon Sewerage Treatment Plant --- */}
      <div className="flex flex-col md:flex-row items-center sm:gap-4 sm:my-2 md:gap-8 md:my-8 bg-grey-100 p-6 rounded-lg shadow-md">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/assets/services/wastewater/wastewater-0.webp"
            alt="Wastewater Management"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
          <h4 className="text-sm font-light mt-2 italic text-gray-600">
            Aerial view of Legon Sewerage Treatment plant
          </h4>
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h3 className="text-brand_1-800 text-sm sm:text-base md:text-2xl font-semibold mb-4">
            Legon Sewerage Treatment Plant
            <span className="block w-16 h-1 bg-brand_1-700 mt-2"></span>
          </h3>
          <ExpandableText maxHeight={200}>
            <p className="text-gray-700 mb-4">
              The Accra Metro Sewerage Unit was established as part of the Accra
              Metropolitan Assembly (AMA) under the Local Government Act of 1993
              (Act 462) and the Environmental Sanitation Policy (ESP) of 1999.
              By virtue of this policy direction, the Sewerage Unit of Ghana
              Water Company Limited (GWCL) including assets, staff and existing
              sewerage networks and facilities were transferred to the
              management and control of Accra Metropolitan Assembly (AMA).The
              AMA&apos;s Waste Management Department, which includes the
              Sewerage Unit, is responsible for providing facilities,
              infrastructure services, and programs for effective and efficient
              waste management, environmental sanitation, and public health
              protection.
            </p>
            <p className="text-gray-700">
              The then existing Central Accra piped waterborne sewerage network,
              constructed in the 1970s, served only 15% of the Accra Metropolis.
              Over time, the system became dilapidated due to the lack of
              rehabilitation and expansion works. As the urban population grew
              rapidly, the limited sewerage capacity proved inadequate to meet
              increasing wastewater disposal demands. This situation contributed
              to rising cases of sanitation-related diseases and heightened
              public concern over environmental and public health conditions. In
              response to these challenges, it became imperative to rehabilitate
              and expand the existing sanitation infrastructure, phase out
              unsanitary and environmentally unfriendly facilities, and develop
              new, modern, and sustainable sewerage networks capable of meeting
              the needs of a growing city. In 2006, the Accra Sewerage
              Improvement Project (ASIP) was approved to improve and extend the
              sewerage and sanitation system in Accra, with funding from the
              African Development Fund (ADF). Accra Metro Sewerage Unit has
              since grown to become one of the leading providers of sewerage
              services in Ghana. Our experience and expertise have enabled us to
              develop a comprehensive range of services, catering to the diverse
              needs of our clients. We have successfully implemented numerous
              projects, including the Accra Sewerage Improvement Project, which
              has improved sanitation infrastructure and services for
              individuals and companies in Accra.
            </p>
          </ExpandableText>
        </div>
      </div>

      {/* --- Section 2: Laboratory Analysis --- */}
      <div className="flex flex-col md:flex-row items-center sm:gap-4 sm:my-2 md:gap-8 md:my-8 bg-grey-100 p-6 rounded-lg shadow-md">
        {/* Text Side */}
        <div className="md:w-2/5">
          <h3 className="text-brand_1-800 text-sm sm:text-base md:text-2xl font-semibold mb-4">
            Laboratory Analysis
            <span className="block w-16 h-1 bg-brand_1-700 mt-2"></span>
          </h3>
          <ExpandableText maxHeight={220}>
            <p className="text-gray-700 mb-4">
              Physicochemical parameters such as pH, temperature, BOD, COD, and
              TSS are routinely monitored at the Unit’s laboratory to assess the
              quality of influent and effluent...
            </p>
            <p className="text-gray-700">
              The Unit places strong emphasis on consistent monitoring,
              recognizing its critical role in protecting public health and
              ensuring efficient plant performance.
            </p>
          </ExpandableText>
        </div>

        {/* Images Side (Two Images Side-by-Side) */}
        <div className="md:w-3/5 flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
          <div className="flex-1">
            <Image
              src="/assets/services/wastewater/lab-1.webp"
              alt="Laboratory Testing"
              width={400}
              height={300}
              className="rounded-lg shadow-sm object-cover w-full h-48"
            />
            <h4 className="text-xs font-medium text-gray-500 mt-2 italic">
              Routine monitoring of BOD and COD levels.
            </h4>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/services/wastewater/lab-2.webp"
              alt="Wastewater Sampling"
              width={400}
              height={300}
              className="rounded-lg shadow-sm object-cover w-full h-48"
            />
            <h4 className="text-xs font-medium text-gray-500 mt-2 italic">
              Testing for Total Coliforms and Nutrients.
            </h4>
          </div>
        </div>
      </div>

      {/* --- Site Photos Gallery --- */}
      <div className="my-8 flex flex-col items-center">
        <Pretitle text="Recent Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3, 4, 5].map((num) => (
            <Image
              key={num}
              src={`/assets/services/wastewater/wastewater-${num}.webp`}
              alt={`Project ${num}`}
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover h-64 w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
