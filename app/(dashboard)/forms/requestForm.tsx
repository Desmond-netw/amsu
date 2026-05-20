"use client";

import React, { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { FiUploadCloud, FiFile, FiTrash2 } from "react-icons/fi";

export default function CreateRequestForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name / Company Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 focus:border-transparent outline-none transition-all"
            placeholder="John Doe or ABC Ltd"
          />
        </div>
        {/* Service Type */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Service Required
          </label>
          <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none">
            <option>New Sewerage Connection</option>
            <option>Maintenance & Repair</option>
            <option>Industrial Pre-treatment</option>
            <option>Technical Consultation</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none"
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
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none"
            placeholder="GA-123-4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Type of Facility */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Type of Facility
          </label>
          <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none">
            <option>Individual</option>
            <option>Private(Company)</option>
            <option>Public</option>
          </select>
        </div>
        {/* Preferred Date */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Preferred Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Detailed Description of Request
        </label>
        <textarea
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none"
          placeholder="Please describe the scope of work..."
        ></textarea>
      </div>

      {/* ADVANCED ATTACMENT AREA */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Supporting Documents (Site Plans, Photos, Permits)
        </label>

        {!selectedFile ? (
          <div className="flex justify-center w-full px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:bg-slate-50 hover:border-brand_1-400 transition-colors group cursor-pointer relative">
            <div className="space-y-1 text-center pointer-events-none">
              <FiUploadCloud className="mx-auto h-12 w-12 text-slate-400 group-hover:text-brand_1-500 transition-colors" />
              <div className="flex text-sm text-slate-600">
                <span className="relative font-medium text-brand_1-600 rounded-md hover:text-brand_1-500">
                  Upload a file
                </span>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-slate-500">PDF, PNG, JPG up to 10MB</p>
            </div>
            <input
              type="file"
              name="attachment"
              accept=".pdf, image/png, image/jpeg, image/jpg"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg animate-fadeIn">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2 bg-brand_1-100 text-brand_1-700 rounded-md shrink-0">
                <FiFile size={20} />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-slate-700 truncate">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-slate-400">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-2 text-slate-400 hover:text-red-500 rounded-md transition-colors hover:bg-red-50"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full md:w-auto px-10 py-4 bg-brand_1-600 hover:bg-brand_1-700 text-white font-bold rounded-lg shadow-lg hover:shadow-brand_1-200 transition-all flex items-center justify-center gap-2"
      >
        <RiMailSendLine className="text-xl" />
        Submit Request
      </button>
    </form>
  );
}
