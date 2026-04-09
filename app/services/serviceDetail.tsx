"use client";

interface ServiceDetailProps {
  title: string;
  description: string;
}

const ServiceDetail = ({ title, description }: ServiceDetailProps) => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-lg sm:text-base md:text-2xl lg:text-4xl font-bold text-brand_1-700 mb-6">
        {title}
      </h1>

      <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default ServiceDetail;
