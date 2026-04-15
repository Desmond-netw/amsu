"use client";

import React from "react";
import Container from "@/app/ui_components/Container";
import { RiMailSendLine, RiPhoneLine, RiMapPin2Line } from "react-icons/ri";

const RequestPage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* --- Section 1: Minimal Hero --- */}
      <section className="bg-brand_1-900 py-16 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold uppercase tracking-tight">
              Request Service
            </h1>
            <p className="mt-4 text-slate-300 text-lg">
              Submit your technical requirements below. Our engineering team
              will review your application and contact you within 24-48 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* --- Section 2: Form & Info --- */}
      <section className="py-12 -mt-10">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side: The Form */}
            <div className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
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
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Type of Facility
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none">
                      <option>Indivdual</option>
                      <option>Private(Company)</option>
                      <option>Public</option>
                    </select>
                  </div>
                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Prefered Date
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

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-brand_1-600 hover:bg-brand_1-700 text-white font-bold rounded-lg shadow-lg hover:shadow-brand_1-200 transition-all flex items-center justify-center gap-2"
                >
                  <RiMailSendLine className="text-xl" />
                  Submit Request
                </button>
              </form>
            </div>

            {/* Right Side: Quick Contact Info */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-brand_1-800 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">Application Support</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <RiPhoneLine className="text-2xl text-brand_1-300" />
                    <div>
                      <p className="text-sm text-brand_1-200 uppercase font-bold tracking-wider">
                        Call Us
                      </p>
                      <p className="text-lg">
                        +233 (0)302 123 456 /302 654 321
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <RiMapPin2Line className="text-2xl text-brand_1-300" />
                    <div>
                      <p className="text-sm text-brand_1-200 uppercase font-bold tracking-wider">
                        Office
                      </p>
                      <p className="text-lg">AMSU, Accra</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation Note */}
              <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
                <h4 className="font-bold text-amber-800 mb-2">
                  Required Documents
                </h4>
                <p className="text-sm text-amber-700 leading-relaxed">
                  For new connections, please have your building permit and site
                  plan ready for the site inspection phase.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default RequestPage;
