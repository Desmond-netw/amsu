"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import {
  FiMail,
  FiPhone,
  FiX,
  FiBriefcase,
  FiShield,
  FiCalendar,
  FiTruck,
} from "react-icons/fi";

// Enhanced structure matching a sewerage/utilities framework
export interface StaffMember {
  name: string;
  age: number;
  profilePhoto: string; // URL path to image (e.g., "/assets/staff/john.jpg")
  role:
    | "Plumber"
    | "Electrician"
    | "Field Engineer"
    | "Site Supervisor"
    | "Safety Inspector"
    | "Treatment Plant Operator";
  email: string;
  phone: string;
  certifications: string[]; // e.g., ["Confined Space Entry", "OSHA 30"]
  safetyStatus: "Cleared" | "Pending Review" | "Suspended";
  assignedVehicle?: string; // e.g., "Vacuum Truck #4"
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  staff: StaffMember | null;
}

export default function ProfileModal({
  isOpen,
  onClose,
  staff,
}: ProfileModalProps) {
  if (!staff) return null;

  // Helper color logic based on Safety Clearance Statuses
  const safetyColor =
    staff.safetyStatus === "Cleared"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : staff.safetyStatus === "Pending Review"
        ? "bg-amber-50 text-amber-700 border-amber-200"
        : "bg-rose-50 text-rose-700 border-rose-200";

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-100 z-50 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
          <Dialog.Close className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer">
            <FiX className="text-xl" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {/* Profile Header Block */}
          <div className="flex flex-col items-center text-center pb-5 border-b border-slate-100">
            {/* Staff Profile Photo */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-100 shadow-inner relative mb-3 bg-slate-100">
              <Image
                src={staff.profilePhoto}
                alt={staff.name}
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>

            <Dialog.Title className="text-xl font-bold text-slate-900">
              {staff.name}
            </Dialog.Title>

            <Dialog.Description className="sr-only">
              Utility personnel file for {staff.name}
            </Dialog.Description>

            {/* Role Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mt-2 rounded-full text-xs font-medium bg-brand_1-50 text-brand_1-700 border border-brand_1-200">
              <FiBriefcase className="text-xs" /> {staff.role}
            </span>
          </div>

          {/* Detailed Utility Staff Metadata Card */}
          <div className="mt-5 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            {/* Core Stats Group */}
            <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <FiCalendar className="text-slate-400" />
                <span>
                  Age: <strong>{staff.age}</strong>
                </span>
              </div>
              <div
                className={`flex items-center gap-2 text-xs font-semibold border px-2 py-1 rounded-lg justify-center ${safetyColor}`}
              >
                <FiShield className="text-sm" />
                <span>Safety: {staff.safetyStatus}</span>
              </div>
            </div>

            {/* Contact Parameters */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Contact Channels
              </label>
              <a
                href={`mailto:${staff.email}`}
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand_1-600 p-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <FiMail className="text-slate-400 text-lg flex-shrink-0" />
                <span className="break-all">{staff.email}</span>
              </a>
              <a
                href={`tel:${staff.phone}`}
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand_1-600 p-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <FiPhone className="text-slate-400 text-lg flex-shrink-0" />
                <span>{staff.phone}</span>
              </a>
            </div>

            {/* Asset/Logistics Operations */}
            {staff.assignedVehicle && (
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Assigned Equipment / Fleet
                </label>
                <div className="flex items-center gap-3 text-sm text-slate-700 p-2 bg-slate-50 border border-slate-100 rounded-xl">
                  <FiTruck className="text-slate-400 text-lg flex-shrink-0" />
                  <span className="font-medium text-slate-800">
                    {staff.assignedVehicle}
                  </span>
                </div>
              </div>
            )}

            {/* Technical Certifications */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Active field Certifications
              </label>
              <div className="flex flex-wrap gap-1.5">
                {staff.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 border border-slate-200 text-slate-700 text-[11px] px-2.5 py-0.5 rounded-md font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
