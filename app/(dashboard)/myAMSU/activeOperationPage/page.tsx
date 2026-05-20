"use client";

import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  FiActivity,
  FiChevronDown,
  FiMapPin,
  FiPhone,
  FiCalendar,
  FiLayers,
  FiFileText,
} from "react-icons/fi";

// Mock operational data structure matching the input keys of your CreateRequestForm
const initialRequests = [
  {
    id: "REQ-2026-9041",
    fullName: "Kofi Mensah / Enterprise Ghana",
    serviceRequired: "New Sewerage Connection",
    phone: "+233 24 412 3456",
    location: "GA-076-4321 (Osu Ring Road)",
    facilityType: "Private(Company)",
    preferredDate: "2026-05-25",
    description:
      "Main connection junction setup required for a newly constructed 4-story commercial office block. Site plans are ready for field engineering inspections.",
    attachmentName: "site_plan_rev2.pdf",
    status: "Pending Review",
  },
  {
    id: "REQ-2026-9042",
    fullName: "Ama Serwaa",
    serviceRequired: "Maintenance & Repair",
    phone: "+233 55 987 6543",
    location: "GA-124-9081 (East Legon)",
    facilityType: "Individual",
    preferredDate: "2026-05-22",
    description:
      "Severe backflow registered at residential entry pipes. Requires emergency vacuum clearing and pipe joint diagnostic overview.",
    attachmentName: "blockage_photo.jpg",
    status: "In Progress",
  },
  {
    id: "REQ-2026-9043",
    fullName: "Accra Metropolitan Assembly",
    serviceRequired: "Industrial Pre-treatment",
    phone: "+233 30 211 2233",
    location: "GA-002-1144 (Ministries Area)",
    facilityType: "Public",
    preferredDate: "2026-06-01",
    description:
      "Routine assessment of incoming waste treatment infrastructure filters. Upgrading system capacity valves.",
    attachmentName: null,
    status: "Completed",
  },
];

type StatusType = "Pending Review" | "In Progress" | "Completed" | "On Hold";

const statusColors: Record<StatusType, string> = {
  "Pending Review":
    "bg-amber-50 text-amber-700 border-amber-200 focus:ring-amber-500",
  "In Progress": "bg-blue-50 text-blue-700 border-blue-200 focus:ring-blue-500",
  Completed:
    "bg-emerald-50 text-emerald-700 border-emerald-200 focus:ring-emerald-500",
  "On Hold": "bg-rose-50 text-rose-700 border-rose-200 focus:ring-rose-500",
};

export default function ActiveOperationsPage() {
  const [requests, setRequests] = useState(initialRequests);

  // Status mutation logic handler
  const handleStatusChange = (id: string, newStatus: StatusType) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req)),
    );
  };

  return (
    <div className="space-y-6">
      {/* Dynamic Header Banner */}
      <div className="flex justify-between items-center bg-brand_1-900 p-6 md:p-8 rounded-2xl text-white shadow-md">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Operations Feed</h1>
          <p className="text-brand_1-200 text-sm mt-1">
            Current operational status updates.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-brand_1-800/60 border border-brand_1-700 px-4 py-2 rounded-xl">
          <span className="animate-pulse bg-emerald-400 w-2.5 h-2.5 rounded-full"></span>
          <span className="text-xs font-bold tracking-wider uppercase text-brand_1-100">
            {requests.length} System Records
          </span>
        </div>
      </div>

      {/* Accordion Master List Wrapper */}
      <Accordion.Root type="single" collapsible className="space-y-4">
        {requests.map((req) => (
          <Accordion.Item
            value={req.id}
            key={req.id}
            className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden hover:border-slate-200 transition-all"
          >
            {/* Header / Summary Line View */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between p-4 md:p-5 gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-slate-50 text-slate-500 rounded-xl shrink-0 mt-0.5">
                  <FiActivity size={20} />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border px-2 py-0.5 rounded">
                      {req.id}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 truncate">
                      {req.fullName}
                    </h3>
                  </div>
                  <p className="text-xs text-brand_1-600 font-semibold">
                    {req.serviceRequired}
                  </p>
                </div>
              </div>

              {/* Status and Toggle Action Elements */}
              <div className="flex items-center justify-between lg:justify-end gap-4 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-50 shrink-0">
                {/* State Changing Selector Dropdown */}
                <div className="relative">
                  <select
                    value={req.status}
                    onChange={(e) =>
                      handleStatusChange(req.id, e.target.value as StatusType)
                    }
                    className={`text-xs font-bold px-3 py-2 rounded-lg border outline-none cursor-pointer focus:ring-2 transition-all appearance-none pr-8 ${
                      statusColors[req.status as StatusType]
                    }`}
                  >
                    <option value="Pending Review">Pending Review</option>
                    <option value="In Progress">In Progress</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-current opacity-70" />
                </div>

                {/* Accordion Trigger Chevron Button */}
                <Accordion.Trigger asChild>
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-transform duration-300 [&[data-state=open]]:rotate-180">
                    <FiChevronDown size={18} />
                  </button>
                </Accordion.Trigger>
              </div>
            </div>

            {/* Accordion Expanding Secondary Content Panels */}
            <Accordion.Content className="border-t border-slate-50 bg-slate-50/40 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
              <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                {/* Information Parameters Left Grid */}
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Request Summary & Notes
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed bg-white p-3 rounded-xl border border-slate-100">
                      {req.description}
                    </p>
                  </div>

                  {/* Supporting File Attachment Link Panel */}
                  {req.attachmentName && (
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Attached Documentation
                      </h4>
                      <div className="inline-flex items-center gap-2.5 px-3 py-2 bg-white rounded-lg border border-slate-100 text-xs text-slate-700 hover:text-brand_1-600 cursor-pointer hover:border-brand_1-200 transition-colors">
                        <FiFileText className="text-slate-400" size={16} />
                        <span className="font-medium underline">
                          {req.attachmentName}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact/Metadata Info Sidebar Right Grid */}
                <div className="bg-white border border-slate-100 p-4 rounded-xl space-y-3 h-fit text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-slate-400 shrink-0" size={16} />
                    <span className="truncate">
                      <b>Address:</b> {req.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiPhone className="text-slate-400 shrink-0" size={16} />
                    <span>
                      <b>Contact:</b> {req.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiLayers className="text-slate-400 shrink-0" size={16} />
                    <span className="capitalize">
                      <b>Facility:</b> {req.facilityType}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiCalendar className="text-slate-400 shrink-0" size={16} />
                    <span>
                      <b>Target:</b> {req.preferredDate}
                    </span>
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
