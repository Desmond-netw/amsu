"use client";

import React, { useState, useTransition } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog"; // Import Radix Dialog elements
import {
  FiActivity,
  FiChevronDown,
  FiMapPin,
  FiPhone,
  FiCalendar,
  FiLayers,
  FiFileText,
  FiX,
  FiMessageSquare,
} from "react-icons/fi";
import { updateRequestStatus } from "@/app/actions/request";
import { Request as PrismaRequest, RequestStatus } from "@prisma/client";

interface ActiveRequestRowItemProps {
  request: PrismaRequest;
}

export default function ActiveRequestRowItem({
  request,
}: ActiveRequestRowItemProps) {
  const [isPending, startTransition] = useTransition();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingStatus, setPendingStatus] = useState<RequestStatus | "">("");
  const [commentText, setCommentText] = useState("");

  // 1. Intercept select drop-down switches
  const handleSelectChange = (newStatus: string) => {
    // If they picked the same status, do nothing
    if (newStatus === request.status) return;

    setPendingStatus(newStatus as RequestStatus);
    setCommentText(""); // Flush previous input strings
    setIsModalOpen(true); // Open the reason dialog
  };

  // 2. Submit status update and comment together
  const handleConfirmTransition = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pendingStatus || !commentText.trim()) return;

    startTransition(async () => {
      const res = await updateRequestStatus(
        request.id,
        pendingStatus,
        commentText,
      );
      if (res.success) {
        setIsModalOpen(false);
      } else {
        alert("System error altering ticket lifecycle indices.");
      }
    });
  };

  return (
    <>
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
                onChange={(e) => handleSelectChange(e.target.value)}
                className="text-xs font-bold px-3 py-2 rounded-lg border outline-none pr-8 bg-slate-50 border-slate-200 cursor-pointer"
              >
                <option value="PENDING_REVIEW">Pending Review</option>
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

        {/* Accordion Content Inner Layout Panels */}
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

              {/* Show the existing log history comment if it exists in DB */}
              {request.statusComment && (
                <div className="bg-brand_1-50/30 border border-brand_1-100 rounded-lg p-3 text-slate-700">
                  <h4 className="font-bold text-brand_1-800 flex items-center gap-1.5 uppercase mb-1">
                    <FiMessageSquare /> Last Action Status Log Note
                  </h4>
                  <p className="italic text-slate-600">
                    &ldquo;{request.statusComment}&rdquo;
                  </p>
                </div>
              )}

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

      {/* ================= RADIX UI MODAL CONTROL BLOCK ================= */}
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          {/* Backdrop Shadow Overlay overlay masking */}
          <Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity" />

          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-md p-6 rounded-2xl shadow-xl border border-slate-100 z-50 focus:outline-none animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FiMessageSquare className="text-brand_1-600" />
                Provide Operational Context
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                  <FiX size={16} />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description className="text-xs text-slate-500 leading-relaxed mb-4">
              You are updating ticket{" "}
              <span className="font-bold text-slate-700">{request.id}</span> to
              status{" "}
              <span className="font-bold text-brand_1-700 capitalize">
                {pendingStatus.replace("_", " ").toLowerCase()}
              </span>
              . Please enter a brief justification for this transition logging
              modification.
            </Dialog.Description>

            <form onSubmit={handleConfirmTransition} className="space-y-4">
              <div>
                <textarea
                  required
                  rows={3}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full text-xs p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand_1-500 outline-none transition-all resize-none"
                  placeholder="e.g., Materials delayed from port clearance / Field dispatcher redirected to Kaneshi emergency leakage block..."
                />
              </div>

              <div className="flex gap-3 justify-end text-xs font-bold">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
                <button
                  type="submit"
                  disabled={isPending || !commentText.trim()}
                  className="px-5 py-2 bg-brand_1-600 hover:bg-brand_1-700 text-white rounded-lg shadow-md disabled:opacity-50 transition-all flex items-center gap-1.5"
                >
                  {isPending ? "Saving changes..." : "Save & Reroute"}
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
