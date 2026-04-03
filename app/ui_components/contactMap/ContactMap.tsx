"use client";

import Image from "next/image";

const ContactMapSection = () => {
  return (
    <section className="pt-14 xl:pt-32 px-6 xl:px-24">
      {/* Outer container: relative only on large screens so the info card can overlay the map */}
      <div className="relative xl:relative">
        {/* Map container – responsive sizing */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-video xl:aspect-auto xl:h-[580px]">
          <Image
            src="/assets/contact/accraMap.png"
            alt="Map of Accra, Ghana"
            fill
            className="object-cover"
            quality={100}
            priority // optional: if this is above the fold
          />
        </div>

        {/* Contact info card – overlays map on xl, stacks below on smaller screens */}
        <div
          className={`
            mt-6 xl:mt-0
            xl:absolute xl:bottom-6 xl:left-6
            bg-white/95 backdrop-blur-sm
            p-6 sm:p-8
            rounded-xl
            shadow-2xl
            max-w-xl w-full
            border border-gray-100
            transition-all duration-300
          `}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-brand_1-700 mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
            You can always feel free to contact us for your wastewater services
            at the address and contact below.
          </p>

          <p className="font-semibold text-brand_1-600 mb-2">
            Accra Metro Sewerage Unit
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div>
              <p className="font-semibold text-brand_1-600">Phone:</p>
              <p className="text-gray-700">+233 (0) 302 234944, 0302 228791</p>
            </div>
            <div>
              <p className="font-semibold text-brand_1-600">Email:</p>
              <p className="text-gray-700">info@accrametrosewerage.com</p>
            </div>
            <div>
              <p className="font-semibold text-brand_1-600">Location:</p>
              <p className="text-gray-700">
                P.O. Box MB 201, Ministries, Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
