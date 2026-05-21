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

    const formData = new FormData(e.currentTarget);
    let attachmentUrl = "";

    //if file exist , upload it tot he api route first
    try {
      if (selectedFile) {
        const uploadData = new FormData();
        uploadData.append("file", selectedFile);

        const uploadResponse = await fetch("api/upload", {
          method: "POST",
          body: uploadData,
        });

        const uploadResult = await uploadResponse.json();
        if (uploadResult.success) {
          attachmentUrl = uploadResult.url; // get the upload url from the response
        }
      }

      //  Format filed data into an object for prisma
      const requestData = {
        fullName: formData.get("fullName") as string,
        serviceRequired: formData.get("serviceRequired") as string,
        phone: formData.get("phone"),
        location: formData.get("location"),
        facilityType: formData.get("facilityType"),
        preferredDate: formData.get("preferredDate"),
        description: formData.get("description"),
        attachmentUrl, // include the attachment URL if it exists
      };

      // execute database actions to create submission
      const res = await createRequest(requestData);
      if (res.success) {
        alert("Request submitted successfully!");
        (e.currentTarget as HTMLFormElement).reset(); // Reset form fields
        setSelectedFile(null); // Clear selected file
      }
    } catch (err) {
      console.error("Error submitting request:", err);
      alert("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  //  ==== Hanlde file selection and removal ====
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
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
        className="w-full md:w-auto px-10 py-4 bg-brand_1-600 hover:bg-brand_1-700 text-white font-bold rounded-lg shadow-lg hover:shadow-brand_1-200 transition-all flex items-center justify-center gap-2"
      >
        <RiMailSendLine className="text-xl" />
        Submit Request
      </button>
    </form>
  );
}
