"use client";

import Image from "next/image";
import React from "react";
import ApplicationForm from "../ui_components/applicationForm/applicationform";

function ApplicationFormPage() {
  return (
    // Changed bg-gray-300 to a professional blue variant
    <div className="bg-slate-100 min-h-screen py-8 px-4">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-8 items-start">
        {/* MAIN DOCUMENT */}
        {/* Removed border-black, added shadow-xl and rounded corners */}
        <div className="w-full max-w-[800px] bg-white shadow-xl rounded-xl overflow-hidden border-t-4 border-blue-700">
          {/* Header */}
          {/* Changed border-black to border-slate-100 */}
          <div className="text-center border-b border-slate-100 py-6 px-4 bg-slate-50/50">
            <h1 className="text-lg md:text-xl font-bold uppercase tracking-wide text-slate-800">
              Republic of Ghana
            </h1>
            <h2 className="text-base md:text-lg font-semibold uppercase text-blue-800">
              Accra Metropolitan Assembly
            </h2>
            <h3 className="text-sm md:text-base uppercase text-slate-600 font-medium">
              Sewerage Unit
            </h3>
          </div>

          {/* Logo + Title */}
          <div className="flex flex-col items-center justify-center py-6 px-4 border-b border-slate-100 text-center">
            <div className="w-[80px] h-[80px] mb-3">
              <Image
                src="/assets/logo/coatOfArms.png"
                width={80}
                height={80}
                alt="Coat of Arms"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-xl md:text-2xl font-extrabold uppercase text-slate-900">
              Sewer Connection Application Form
            </h1>

            <p className="text-xs mt-2 italic text-slate-500 font-medium">
              (For Domestic, Commercial, Industrial & Institutional Use)
            </p>
          </div>

          {/* Notice */}
          <div className="bg-blue-50/50 px-4 py-3 text-center">
            <p className="text-xs text-blue-700 font-medium">
              Please complete all sections accurately. Incomplete forms may
              delay processing.
            </p>
          </div>

          {/* Form Area */}
          <div className="p-6">
            <ApplicationForm />
          </div>
        </div>

        {/* SIDEBAR (Professional Info Panel) */}
        {/* Removed border-black, added shadow-md and rounded corners */}
        <aside className="w-full lg:w-[320px] bg-white shadow-md rounded-xl p-6 text-sm border-t-4 border-blue-500">
          <h2 className="font-bold uppercase border-b border-slate-100 pb-3 mb-4 text-blue-800 tracking-tight">
            Official Information
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              Ensure all sections are properly completed.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              Attach required supporting documents.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              Incomplete applications will not be processed.
            </li>
          </ul>

          <div className="mt-8 space-y-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="font-bold text-slate-700 text-xs uppercase mb-1">
                Email:
              </p>
              <p className="text-blue-600 font-medium">asipamsd@gmail.com</p>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="font-bold text-slate-700 text-xs uppercase mb-1">
                Telephone:
              </p>
              <p className="text-slate-900 font-medium">0302 234 944</p>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="font-bold text-slate-700 text-xs uppercase mb-1">
                Postal Address:
              </p>
              <p className="text-slate-900 leading-relaxed font-medium">
                P.O. Box MB 201, Ministries, Accra
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="font-bold text-slate-700 text-xs uppercase mb-1">
                Digital Address:
              </p>
              <p className="text-slate-900 font-bold">GA-135-5412</p>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <p className="font-bold text-slate-700 text-xs uppercase mb-1">
                Office Hours:
              </p>
              <p className="text-slate-500">Mon – Fri, 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ApplicationFormPage;
