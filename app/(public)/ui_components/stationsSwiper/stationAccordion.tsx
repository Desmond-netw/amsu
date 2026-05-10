"use client";

import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const StationsAccordion = () => {
  const [openSection, setOpenSection] = useState<string | null>("north");

  const stations = {
    north: [
      "University of Ghana Sewage Transfer Pumping Station",
      "Junior Staff Quarters Sewage Transfer Pumping Station",
      "Achimota Sewage Transfer Pumping Station",
      "UPSA Sewage Transfer Pumping Station",
      "PRESEC Sewage Transfer Pumping Station",
    ],
    south: [
      "Accra High Sewage Transfer Pumping Station",
      "State House Sewage Transfer Pumping Station",
      "Labone Sewage Transfer Pumping Station",
      "Ministry Sewage Transfer Pumping Station",
      "High Street Sewage Transfer Pumping Station",
      "Korle-Bu Sewage Transfer Pumping Station",
      "Dansoman 2 Sewage Transfer Pumping Station",
      "Dansoman 3 Sewage Transfer Pumping Station",
    ],
  };

  const toggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4 bg-brand_1-50">
      <h2 className="text-2xl font-bold text-brand_1-800 mb-6 text-center">
        Regional Pumping Station Directory
      </h2>

      {/* Northern Section */}
      <div className="border border-gray-200 rounded-t-xl overflow-hidden">
        <button
          onClick={() => toggle("north")}
          className="w-full flex items-center justify-between p-5 bg-brand_1-50 hover:bg-brand_1-100 transition-colors"
        >
          <span className="font-bold text-brand_1-800 uppercase tracking-wide">
            Northern Part of Accra
          </span>
          <RiArrowDownSLine
            className={`text-2xl transition-transform duration-300 ${
              openSection === "north" ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openSection === "north" ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="p-0 bg-white">
            <table className="w-full text-left border-collapse">
              <tbody>
                {stations.north.map((name, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-4 text-gray-500 w-12 font-medium">
                      {index + 1}.
                    </td>
                    <td className="p-4 text-gray-700">{name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Southern Section */}
      <div className="border border-t-0 border-gray-200 rounded-b-xl overflow-hidden">
        <button
          onClick={() => toggle("south")}
          className="w-full flex items-center justify-between p-5 bg-brand_1-50 hover:bg-brand_1-100 transition-colors"
        >
          <span className="font-bold text-brand_1-800 uppercase tracking-wide">
            Southern Part of Accra
          </span>
          <RiArrowDownSLine
            className={`text-2xl transition-transform duration-300 ${
              openSection === "south" ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openSection === "south" ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="p-0 bg-white">
            <table className="w-full text-left border-collapse">
              <tbody>
                {stations.south.map((name, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-4 text-gray-500 w-12 font-medium">
                      {index + 6}.
                    </td>
                    <td className="p-4 text-gray-700">{name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationsAccordion;
