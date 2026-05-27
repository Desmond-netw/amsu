import Button from "../../ui_components/button/button";
import ServiceDetail from "../serviceDetail";
import Image from "next/image";

export default function WasteTreatmentPage() {
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <ServiceDetail
        title="Waste Treatment and Management"
        description="Our waste treatment and management services are designed to protect the environment and public health by effectively treating and managing waste. We offer comprehensive solutions for the treatment of domestic, industrial, and commercial waste, utilizing advanced technologies and processes to ensure that treated waste meets regulatory standards. Our services include the design, construction, operation, and maintenance of waste treatment facilities, as well as the implementation of sustainable waste management practices. We are committed to providing environmentally responsible solutions that contribute to a cleaner and healthier future for our communities."
      />

      {/* --- Two Side Image & Text ---  */}
      <div className="flex flex-col md:flex-row items-center gap-6 my-6 md:gap-8 md:my-12 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/services/waste_treatment/wt-1.webp"
            alt="Waste Treatment"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">
            Our Approach
          </h3>
          <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed">
            We utilize a combination of physical, chemical, and biological
            treatment processes to effectively treat waste and minimize its
            environmental impact. Our team of experts is dedicated to
            implementing sustainable waste management practices that promote
            resource recovery and reduce landfill dependency. We work closely
            with our clients to develop customized waste treatment solutions
            that meet their specific needs while adhering to environmental
            regulations. Our commitment to environmental stewardship ensures
            that our waste treatment and management services contribute to a
            cleaner and healthier environment for our communities.
          </p>
          {/* btn */}
          <div className="w-full sm:w-auto">
            <Button text="Request Quote" linkstring="/request" />
          </div>
        </div>
      </div>

      {/*  ---- Site Photos ----  */}
      <div className="my-8 sm:my-12 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
          Trucks and Equipment in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {[2, 3, 4].map((num) => (
            <div key={num} className="w-full">
              <Image
                src={`/assets/services/waste_treatment/wt-${num}.webp`}
                alt={`Waste Treatment Project ${num}`}
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
