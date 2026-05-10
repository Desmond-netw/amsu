"use client";

import { FiSend } from "react-icons/fi";
import { ScrollArea } from "@radix-ui/themes";

const SimpleProjectForm = () => {
  return (
    <div className="w-full">
      <form className="space-y-6">
        {/* Scrollable Content */}
        <ScrollArea
          type="auto"
          scrollbars="vertical"
          className="
            w-full 
            h-[55vh] 
            sm:h-[60vh] 
            md:h-[65vh] 
            lg:h-[70vh] 
            pr-4
          "
        >
          <div className="flex flex-col gap-6 pb-4">
            {/* Client Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Client Name
              </label>
              <input
                type="text"
                className="
                  w-full px-4 py-3 rounded-lg border border-slate-200 
                  focus:ring-2 focus:ring-brand_1-100 outline-none transition-all
                "
                placeholder="Enter client name"
              />
            </div>

            {/* Project Location */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Project Location
              </label>
              <input
                type="text"
                className="
                  w-full px-4 py-3 rounded-lg border border-slate-200 
                  focus:ring-2 focus:ring-brand_1-100 outline-none
                "
                placeholder="Enter project location"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="
                  w-full px-4 py-3 rounded-lg border border-slate-200 
                  focus:ring-2 focus:ring-brand_1-100 outline-none
                "
                placeholder="Write a short description..."
              ></textarea>
            </div>
          </div>
        </ScrollArea>

        {/* Submit Button */}
        <div className="pt-4 border-t border-slate-100">
          <button
            type="submit"
            className="
              w-full md:w-auto px-10 py-4 
              bg-brand_1-600 hover:bg-brand_1-700 
              text-white font-bold rounded-lg shadow-lg 
              transition-all flex items-center justify-center gap-2
            "
          >
            <FiSend className="text-xl" />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleProjectForm;
