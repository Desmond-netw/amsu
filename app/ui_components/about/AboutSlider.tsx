"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const AboutSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="relative w-full h-full rounded-lg overflow-hidden"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <Image
          src="./assets/slider/about/slider1.webp"
          fill
          alt="About image 1"
          className="object-cover"
        />
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <Image
          src="./assets/slider/about/slider2.webp"
          fill
          alt="About image 2"
          className="object-cover"
        />
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <Image
          src="./assets/slider/about/slider3.webp"
          fill
          alt="About image 3"
          className="object-cover"
        />
      </SwiperSlide>
      {/* Slide 4 */}
      <SwiperSlide>
        <Image
          src="./assets/slider/about/slider4.webp"
          fill
          alt="About image 4"
          className="object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default AboutSlider;
