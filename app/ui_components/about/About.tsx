// import Image from "next/image";
import Pretitle from "../pretitle/Pretitile";
import Button from "../button/button";
import AboutSlider from "./AboutSlider";

export const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* LEFT — TEXT */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-[url('/assets/banner/aboutpumps.webp')] bg-cover bg-center blur-sm rounded-lg"></div>
            <div className="relative z-10 max-w-135 sm:px-4 md:px-4 p-6 bg-gray-100 bg-opacity-80 rounded-lg">
              <Pretitle text="About us" center={false} />

              <h2 className="h2 mt-4 text-primary">
                Engineering expertise you can trust
              </h2>

              <p className="mt-6 text-secondary leading-relaxed max-w-xl font-secondary">
                Accra Metro Sewerage Unit (AMSU) is a premier provider of
                sewerage and wastewater management services in Ghana, renowned
                for our commitment to delivering reliable, efficient, and
                environmentally responsible solutions.
              </p>

              <p className="mt-4 text-secondary leading-relaxed max-w-xl font-secondary">
                With over 20 years of experience, we operate and maintain a vast
                network of sewerage infrastructure, ensuring safe and efficient
                disposal of wastewater for residential, commercial, and
                industrial clients. Our team of skilled professionals is
                dedicated to providing exceptional service, ensuring compliance
                with regulatory requirements, and promoting sustainable
                development.
              </p>

              <p className="mt-4 text-secondary leading-relaxed max-w-xl font-secondary">
                We place strong emphasis on monitoring and maintenance, to
                enhance operational efficiency and environmental protection.
                Through strategic partnerships, community engagement, and
                capacity building, AMSU remains committed to safeguarding public
                health, and supporting the long-term sanitation needs of Accra.
              </p>

              {/* Signature
              <div className="mt-6">
                <Image
                  src="/assets/img/about/Signature.svg"
                  width={300}
                  height={40}
                  alt="Signature"
                />
              </div> */}

              {/* contact Button */}
              <Button text="Contact us" />
            </div>
          </div>

          {/* RIGHT — About Image Slider */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full h-[300px] sm:h[360px] md:h-[420px] xl:w-[444px] xl:h-[493px]">
              {/* Accent background */}
              <div className="hidden xl:flex w-[444px] h-[493px] bg-brand_1-400 absolute -top-4 -left-4 -z-10 rounded-lg"></div>

              {/* Slider */}
              <AboutSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
