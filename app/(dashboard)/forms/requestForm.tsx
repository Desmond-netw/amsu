"use client";

import React, { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { FiUploadCloud, FiFile, FiTrash2 } from "react-icons/fi";
import { createRequest } from "@/app/actions/request"; // Import your server action

export default function CreateRequestForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==== Handle form submission ====
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    let attachmentUrl = "";

    try {
      if (selectedFile) {
        const uploadData = new FormData();
        uploadData.append("file", selectedFile);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: uploadData,
        });

        if (uploadResponse.ok) {
          const uploadResult = await uploadResponse.json();
          if (uploadResult.success) {
            attachmentUrl = uploadResult.url;
          }
        }
      }

      // Fix: Safely extract values as strings with empty string fallbacks
      const requestData = {
        fullName: (formData.get("fullName") as string) || "",
        serviceRequired: (formData.get("serviceRequired") as string) || "",
        phone: (formData.get("phone") as string) || "",
        location: (formData.get("location") as string) || "",
        facilityType: (formData.get("facilityType") as string) || "",
        preferredDate: (formData.get("preferredDate") as string) || "",
        description: (formData.get("description") as string) || "",
        attachmentUrl,
      };

      // This call will now be completely error-free!
      const res = await createRequest(requestData);

      if (res.success) {
        alert("Request submitted successfully!");
        formElement.reset();
        setSelectedFile(null);
      }
    } catch (err) {
      console.error("Error submitting request:", err);
      alert("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name / Company Name
          </label>
          <input
            required
            name="fullName"
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
          <select
            required
            name="serviceRequired"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none"
          >
            <option value="">Select a service</option>
            <option value="New Sewerage Connection">
              New Sewerage Connection
            </option>
            <option value="Maintenance & Repair">Maintenance & Repair</option>
            <option value="Industrial Pre-treatment">
              Industrial Pre-treatment
            </option>
            <option value="Technical Consultation">
              Technical Consultation
            </option>
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
            required
            name="phone"
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
            name="location"
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
          <select
            name="facilityType"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none"
          >
            <option value="">Select a facility type</option>
            <option value="Individual">Individual</option>
            <option value="Private(Company)">Private(Company)</option>
            <option value="Public">Public</option>
          </select>
        </div>
        {/* Preferred Date */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Preferred Date
          </label>
          <input
            name="preferredDate"
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
          name="description"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none"
          placeholder="Please describe the scope of work..."
        ></textarea>
      </div>

      {/* Upload Handler */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Supporting Documents
        </label>
        {!selectedFile ? (
          <div className="flex justify-center w-full px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:bg-slate-50 relative cursor-pointer">
            <div className="space-y-1 text-center pointer-events-none">
              <FiUploadCloud className="mx-auto h-12 w-12 text-slate-400" />
              <p className="text-sm text-slate-600">
                <span className="text-brand_1-600 font-medium">
                  Upload file
                </span>{" "}
                or drop here
              </p>
              <p className="text-xs text-slate-500">PDF, PNG, JPG up to 10MB</p>
            </div>
            <input
              type="file"
              accept=".pdf, image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) =>
                e.target.files && setSelectedFile(e.target.files[0])
              }
            />
          </div>
        ) : (
          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="flex items-center gap-3 overflow-hidden">
              <FiFile className="text-brand_1-600" size={20} />
              <p className="text-sm font-medium text-slate-700 truncate">
                {selectedFile.name}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedFile(null)}
              className="text-slate-400 hover:text-red-500"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-10 py-4 bg-brand_1-600 hover:bg-brand_1-700 text-white font-bold rounded-lg shadow-lg hover:shadow-brand_1-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RiMailSendLine className="text-xl" />
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
