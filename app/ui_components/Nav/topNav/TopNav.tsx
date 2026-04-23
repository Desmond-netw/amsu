import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";
import Socials from "../../Socials/Socials";
import Link from "next/link";
export const Topbar = () => {
  return (
    <section
      id="home"
      className="py-2 xl:h-12 h-8 bg-gradient-to-t from-brand_1-800 to-brand_1-900 text-sm flex items-center"
    >
      <div className="container mx-auto">
        {/* phone, mail and social links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* phone and mail */}
          <div className=" hidden xl:flex lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex justify-center items-center">
                <RiPhoneFill />
              </div>
              <p className="text-white font-light">
                +233 (0) 302 234944, 0302 228791
              </p>
            </div>
            {/* --------- mail */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex justify-center items-center">
                <RiMailFill />
              </div>
              <p className="text-white font-light">
                info@accrametrosewerage.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex justify-center items-center">
                <AiFillClockCircle />
              </div>
              <p className="text-white font-light">
                Monday - Friday: 08:00am – 17:00pm
              </p>
            </div>
          </div>
          {/* ---------- social */}
          <div>
            <Link
              prefetch={false}
              href="/admin"
              className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-light rounded-md text-white bg-transparent transition-colors duration-200 shadow-sm"
            >
              Login / Register
            </Link>
          </div>
          <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-white text-lg hover:border-white hover:border-round transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
