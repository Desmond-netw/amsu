"use client";

import React, { useTransition } from "react";
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
import { updateRequestStatus } from "@/app/actions/request";
import { RequestStatus } from "@prisma/client";

export default function ActiveRequestRowItem({ request }: { request: any }) {
  const [isPending, startTransition] = useTransition();

  const handleStatusUpdate = (newStatus: string) => {
    startTransition(async () => {
      await updateRequestStatus(request.id, newStatus as RequestStatus);
    });
  };

  return (
    <Accordion.Item
      value={request.id}
      className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
    >
      <div
        className={`p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-opacity ${isPending ? "opacity-50" : ""}`}
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="p-3 bg-slate-50 text-slate-500 rounded-xl">
            <FiActivity size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 bg-slate-50 border px-2 py-0.5 rounded">
                {request.id}
              </span>
              <h3 className="text-sm font-bold text-slate-800">
                {request.fullName}
              </h3>
            </div>
            <p className="text-xs text-brand_1-600 font-semibold mt-1">
              {request.serviceRequired}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-100 justify-between lg:justify-end">
          <div className="relative">
            <select
              value={request.status}
              onChange={(e) => handleStatusUpdate(e.target.value)}
              className="text-xs font-bold px-3 py-2 rounded-lg border outline-none pr-8 bg-slate-50 border-slate-200"
            >
              <option value="IN_PROGRESS">In Progress</option>
              <option value="ON_HOLD">On Hold</option>
              <option value="COMPLETED">Completed</option>
            </select>
            <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" />
          </div>

          <Accordion.Trigger asChild>
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg [&[data-state=open]]:rotate-180 transition-transform">
              <FiChevronDown size={18} />
            </button>
          </Accordion.Trigger>
        </div>
      </div>

      <Accordion.Content className="border-t border-slate-100 bg-slate-50/30 overflow-hidden">
        <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="md:col-span-2 space-y-4">
            <div>
              <h4 className="font-bold text-slate-400 uppercase mb-1">
                Description
              </h4>
              <p className="bg-white p-3 rounded-lg border">
                {request.description}
              </p>
            </div>
            {request.attachmentUrl && (
              <div>
                <h4 className="font-bold text-slate-400 uppercase mb-1">
                  Attachment
                </h4>
                <a
                  href={request.attachmentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-brand_1-600 underline"
                >
                  <FiFileText /> View Document
                </a>
              </div>
            )}
          </div>
          <div className="bg-white border p-4 rounded-xl space-y-2 h-fit">
            <div className="flex items-center gap-2">
              <FiMapPin /> <span>{request.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone /> <span>{request.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiLayers />{" "}
              <span className="capitalize">{request.facilityType}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar />{" "}
              <span>
                {new Date(request.preferredDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
