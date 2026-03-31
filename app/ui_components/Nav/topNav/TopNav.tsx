import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "../../Socials/Socials";
export const Topbar = () => {
  return (
    <section
      id="home"
      className="py-2 xl:h-12 h-8 bg-gradient-to-t from-[#2b2b2b] to-[#080808] text-sm flex items-center"
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
              <p className="text-white font-light">+234 0000000000</p>
            </div>
            {/* --------- mail */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex justify-center items-center">
                <RiMailFill />
              </div>
              <p className="text-white font-light">
                accrametrosewege@hotmal.com
              </p>
            </div>
          </div>
          {/* ---------- social */}
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
