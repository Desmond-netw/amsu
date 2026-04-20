"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  { endCountNum: 99, endCountText: "%", text: "Client Satisfaction" },
  { endCountNum: 300, endCountText: "+", text: "Successful Projects" },
  { endCountNum: 10, endCountText: "k", text: "Happy Clients" },
  { endCountNum: 20, endCountText: "+", text: "Years of Experience" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <div
      ref={ref}
      className="
        mt-8 xl:mt-16 
        bg-black bg-opacity-70
        py-8 
        w-full 
        text-white
      "
    >
      <div className="container mx-auto">
        <div
          className="
            flex flex-col xl:flex-row 
            items-center justify-between 
            text-center gap-10
          "
        >
          {statsData.map((item, index) => (
            <div key={index} className="w-full">
              {/* Number */}
              <div
                className="
                text-3xl 
                sm:text-4xl 
                md:text-5xl 
                font-bold 
                flex justify-center items-baseline gap-1
              "
              >
                {inView && (
                  <CountUp
                    start={0}
                    end={item.endCountNum}
                    duration={2}
                    delay={0.2}
                  />
                )}
                <span>{item.endCountText}</span>
              </div>

              {/* Label */}
              <p
                className="
                mt-2 
                text-brand_1-50 
                text-sm 
                sm:text-base 
                md:text-lg 
                tracking-wide
              "
              >
                {item.text}
              </p>

              {/* Accent underline */}
              {/* <div className="mt-3 mx-auto w-12 h-[3px] bg- rounded-full"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
