"use client";

import React from "react";
import Container from "@/app/(public)/ui_components/Container";
import { RiPhoneLine, RiMapPin2Line } from "react-icons/ri";

// 1. Import your dynamic form component
// Note: Adjust the path if your CreateRequestForm is located in a different directory
import CreateRequestForm from "@/app/(dashboard)/forms/requestForm";

const RequestPage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* --- Section 1: Minimal Hero --- */}
      <section
        className="relative max-h-[300px] bg-cover bg-center bg-no-repeat mb-12"
        style={{ backgroundImage: "url('/assets/request/tool.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
        <Container>
          <div className="max-w-3xl p-4 md:p-8 lg:p-12 text-white relative z-10 bg-black bg-opacity-60 rounded-xl my-6">
            <h1 className="text-4xl font-bold uppercase tracking-tight">
              Request Service
            </h1>
            <p className="mt-4 text-slate-200 text-lg">
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
            {/* Left Side: The Form Integration */}
            <div className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              {/* Inserted the advanced form block with your new upload zones */}
              <CreateRequestForm />
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
                  For new connections, please use the form's attachment feature
                  to upload your building permit and site plan to expedite the
                  registration phase.
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
