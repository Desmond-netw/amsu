import React from "react";
import Image from "next/image";

import Pretitle from "@/app/(public)/ui_components/pretitle/Pretitile";
import Button from "@/app/(public)/ui_components/button/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[42vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-slate-900">
        <Image
          src="/assets/aboutUs/heroTemp.jpg"
          alt="About AMSU"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/70 opacity-5"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto text-white">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            About AMSU
          </h1>
          <p className="text-xl text-white/90">
            Providing reliable sewerage and sanitation services for Accra
          </p>
        </div>
      </div>

      {/* About Us Story */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="justify-center md:justify-start flex">
          <Pretitle text="Our Story" />
        </div>
        <h2 className="text-4xl text-center md:text-left font-bold text-slate-900 mt-3 mb-10">
          Who We Are and What We Stand For
        </h2>

        <div className="prose prose-lg text-center md:text-left text-slate-700 space-y-6">
          <p>
            Accra Metro Sewerage Unit (AMSU) is a premier provider of sewerage
            and wastewater management services in Ghana, renowned for our
            commitment to delivering reliable, efficient, and environmentally
            responsible solutions.
          </p>
          <p>
            With over 20 years of experience, we operate and maintain a vast
            network of sewerage infrastructure, ensuring safe and efficient
            disposal of wastewater for residential, commercial, and industrial
            clients. Our team of skilled professionals is dedicated to providing
            exceptional service, ensuring compliance with regulatory
            requirements, and promoting sustainable development.
          </p>
          <p>
            We place strong emphasis on monitoring and maintenance, to enhance
            operational efficiency and environmental protection. Through
            strategic partnerships, community engagement, and capacity building,
            AMSU remains committed to safeguarding public health, and supporting
            the long-term sanitation needs of Accra.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="justify-center md:justify-start flex">
            <Pretitle text="Our Vision" />
          </div>

          <h2 className="text-[1.2rem] text-center md:text-left sm:text-base md:text-2xl xl:text-3xl font-semibold text-slate-900 mt-3 mb-6">
            To be the leading provider of sewerage services in Ghana, renowned
            for our commitment to safety, sustainability, and customer
            satisfaction.
          </h2>
          <p className="text-lg text-center md:text-left text-slate-700 max-w-3xl">
            We aim to set the standard for sustainable wastewater management in
            Ghana and contribute to a clean, green, and healthy future for all
            residents.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="justify-center md:justify-start flex">
            <Pretitle text="Our Mission" />
          </div>

          <h2 className="text-[1.2rem] text-center md:text-left sm:text-base md:text-2xl xl:text-3xl font-semibold text-slate-900 mt-3 mb-6">
            To enhance public health and quality of life in Ghana by providing
            reliable, efficient, and environmentally responsible sewerage
            services, while promoting sustainable development and community
            engagement.
          </h2>
          <p className="text-lg text-center md:text-left text-slate-700 max-w-3xl">
            We strive to provide high-quality services in a proactive,
            professional, and cost-effective manner while supporting the
            socio-economic development of Accra.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="justify-center md:justify-start flex">
            <Pretitle text="Our Values" />
          </div>

          <h2 className="text-4xltext-center md:text-left font-bold text-slate-900 mt-3 mb-12 text-center">
            What Guides Us
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                title: "Safety",
                desc: "At AMSU, safety is our top priority. We are committed to protecting the well-being of our employees, clients, and the environment by implementing strict safety protocols, promoting a culture of vigilance, and ensuring all operations comply with health, safety, and environmental standards.",
              },
              {
                title: "Integrity",
                desc: "We Uphold the highest standards of transparency, accountability, and professionalism in all our operations.",
              },
              {
                title: "Customer Focus",
                desc: "We are committed to delivering exceptional service and support to our valued customers. At AMSU, we listen to the needs of our clients, respond promptly to their concerns, and strive to provide reliable, efficient, and user-friendly wastewater management solutions that enhance customer satisfaction.We take full ownership of our work and its impact on public health and the environment.",
              },
              {
                title: "Sustainability",
                desc: "We are committed to environmentally responsible practices and sustainable development.We focus on long-term, environmentally responsible solutions for the future of Accra.",
              },
            ].map((value, i) => (
              <div key={i}>
                <h3 className="text-2xl text-center md:text-left font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-700 text-center md:text-left">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Commitment */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl text-gray-200 font-bold mb-6">
            Our Commitment
          </h2>
          {/* horizontal underline */}
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <h2 className="text-3xl font-semibold mt-3 mb-8">
            To meet and exceed the expectations of the residents of Accra
            through professional and reliable service.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            We continuously improve our systems, invest in modern technology,
            and maintain the highest standards to ensure sustainable sanitation
            for current and future generations.
          </p>
        </div>
      </div>

      {/* Final CTA - Blue background removed */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Let’s work together to build a cleaner and more sustainable Accra.
          </p>

          <Button text="Contact AMSU" linkstring="/contact" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
