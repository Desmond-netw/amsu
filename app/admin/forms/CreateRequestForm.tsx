"use client";

import { MdSend } from "react-icons/md";

import { ScrollArea } from "@radix-ui/themes";

const CreateRequestForm = () => {
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
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name / Company Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-100 outline-none transition-all"
                placeholder="John Doe or ABC Ltd"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Service Required
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-100 outline-none">
                <option>New Sewerage Connection</option>
                <option>Maintenance & Repair</option>
                <option>Industrial Pre-treatment</option>
                <option>Technical Consultation</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-100 outline-none"
                placeholder="+233..."
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Project Location (Digital Address)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-100 outline-none"
                placeholder="GA-123-4567"
              />
            </div>

            {/* Facility Type */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Type of Facility
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-100 outline-none">
                <option>Individual</option>
                <option>Private (Company)</option>
                <option>Public</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-100 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Detailed Description of Request
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-100 outline-none"
                placeholder="Please describe the scope of work..."
              ></textarea>
            </div>
          </div>
        </ScrollArea>

        {/* Submit Button (fixed outside scroll) */}
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
            <MdSend className="text-xl" />
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRequestForm;
