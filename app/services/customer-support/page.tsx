"use client";

import Image from "next/image";
import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { ReactNode } from "react";
// type declarations
type ContactItemProps = {
  icon: ReactNode;
  label: string;
  val: string;
};

type FAQItemProps = {
  q: string;
  a: string;
};

function CustomerServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-[1100px] mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-100">
        {/* HERO SECTION: Image + Intro */}
        <div className="flex flex-col md:flex-row border-b border-slate-100">
          <div className="md:w-1/2 relative h-[300px] md:h-auto overflow-hidden">
            <Image
              src="/assets/services/customerService/customerService.webp" // Ensure you have a high-quality image here
              alt="AMSU Customer Support"
              fill
              className="object-cover"
            />
            {/* Overlay Gradient for text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent" />
          </div>

          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-blue-900 text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-4">
              Customer Service & Support
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Our dedicated team is here to help you navigate sewer connections,
              manage service requests, and resolve inquiries with efficiency and
              professionalism.
            </p>
            <div className="mt-6 flex items-center gap-2 text-blue-300 font-semibold">
              <FiCheckCircle />
              <span>Accra Metropolitan Sewerage Unit</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* LEFT: Information Panel */}
          <div className="lg:col-span-2 p-8 space-y-10 border-r border-slate-100">
            {/* CONTACT INFO GRID */}
            <section>
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-blue-600"></span> 1. Contact
                Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <ContactItem
                  icon={<FiMail />}
                  label="Email"
                  val="asipamsd@gmail.com"
                />
                <ContactItem
                  icon={<FiPhone />}
                  label="Telephone"
                  val="0302 234 944"
                />
                <ContactItem
                  icon={<FiMapPin />}
                  label="Postal Address"
                  val="P.O. Box MB 201, Ministries, Accra"
                />
                <ContactItem
                  icon={<FiMapPin />}
                  label="Digital Address"
                  val="GA-135-5412"
                />
              </div>
            </section>

            {/* SERVICES PROVIDED */}
            <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-4">
                2. Services Provided
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
                {[
                  "Sewer connection applications",
                  "Inspection scheduling",
                  "Complaint handling",
                  "Billing and payment support",
                  "Technical assistance",
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FiCheckCircle className="text-blue-600" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ SECTION */}
            <section>
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-6">
                3. Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <FAQItem
                  q="How long does application processing take?"
                  a="Processing typically takes 5–10 working days upon successful submission."
                />
                <FAQItem
                  q="Can I track my application?"
                  a="Yes, a tracking ID will be generated for you to monitor status on our portal."
                />
              </div>
            </section>
          </div>

          {/* RIGHT: Sidebar Form + Hours */}
          <div className="bg-slate-50/50 p-8">
            {/* WORKING HOURS BOX */}
            <div className="mb-10 bg-white p-5 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-blue-900 font-bold flex items-center gap-2 mb-4">
                <FiClock /> Working Hours
              </h3>
              <div className="text-sm space-y-2 text-slate-600">
                <div className="flex justify-between border-b pb-1">
                  <span>Mon – Fri:</span>
                  <span className="font-semibold text-slate-900">
                    8AM – 5PM
                  </span>
                </div>
                <p className="text-xs italic pt-2">
                  Office is closed on weekends and public holidays.
                </p>
              </div>
            </div>

            {/* COMPLAINT FORM */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
              <h3 className="text-blue-900 font-bold mb-4">Submit a Request</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-blue-600 outline-none p-2 text-sm transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-blue-600 outline-none p-2 text-sm transition-all"
                />
                <textarea
                  placeholder="How can we help you?"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-600 rounded-lg outline-none p-3 text-sm min-h-[150px] transition-all"
                ></textarea>
                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---

function ContactItem({ icon, label, val }: ContactItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-blue-600 mt-1 text-lg">{icon}</div>

      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-800">{val}</p>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: FAQItemProps) {
  return (
    <div className="border-l-4 border-blue-600 bg-white p-4 shadow-sm rounded-r-lg">
      <p className="font-bold text-slate-900 mb-1">{q}</p>
      <p className="text-sm text-slate-600">{a}</p>
    </div>
  );
}

export default CustomerServicePage;
