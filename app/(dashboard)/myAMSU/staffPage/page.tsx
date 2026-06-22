"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMail, FiPhone, FiCheckCircle } from "react-icons/fi";
import ProfileModal, {
  StaffMember,
} from "@/app/(dashboard)/dashboard_components/staffModal";

export default function StaffPage() {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  // Fully defined operational data array for the sewerage firm
  const staffList: StaffMember[] = [
    {
      name: "Kwame Mensah",
      age: 34,
      profilePhoto: "/assets/staff/kwame.jpg", // Replace with actual asset path
      role: "Plumber",
      email: "k.mensah@amsu.gov.gh",
      phone: "024 123 4567",
      certifications: ["Confined Space Entry", "Advanced Hydro-Jetting"],
      safetyStatus: "Cleared",
      assignedVehicle: "Jetting/Vacuum Truck #2",
    },
    {
      name: "Emmanuel Osei",
      age: 29,
      profilePhoto: "/assets/staff/emmanuel.jpg", // Replace with actual asset path
      role: "Electrician",
      email: "e.osei@amsu.gov.gh",
      phone: "024 987 6543",
      certifications: ["Industrial Control Systems", "LOTO Certified"],
      safetyStatus: "Cleared",
      assignedVehicle: "Utility Van #5",
    },
    {
      name: "Sarah Alabi",
      age: 41,
      profilePhoto: "/assets/staff/sarah.jpg", // Replace with actual asset path
      role: "Safety Inspector",
      email: "s.alabi@amsu.gov.gh",
      phone: "027 555 1234",
      certifications: ["OSHA 30 Hazardous Waste", "Gas Monitor Calibration"],
      safetyStatus: "Cleared",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Personnel Directory
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Active field engineering and operations roster.
        </p>
      </div>

      {/* Staff Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {staffList.map((s, i) => (
          <button
            key={i}
            onClick={() => setSelectedStaff(s)}
            className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 transition-all duration-200 hover:shadow-md hover:border-slate-200 text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand_1-500 group"
          >
            {/* Avatar block with profile image component */}
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative bg-slate-100 border border-slate-100">
              <Image
                src={s.profilePhoto}
                alt={s.name}
                fill
                sizes="64px"
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Basic card info */}
            <div className="overflow-hidden flex-1">
              <div className="flex items-center gap-1.5 max-w-full">
                <h3 className="font-bold text-slate-800 truncate">{s.name}</h3>
                {s.safetyStatus === "Cleared" && (
                  <FiCheckCircle
                    className="text-emerald-500 text-xs flex-shrink-0"
                    title="Safety Cleared"
                  />
                )}
              </div>
              <p className="text-xs text-brand_1-600 font-semibold mb-2 truncate">
                {s.role}
              </p>
              <div className="flex gap-3 text-slate-400 group-hover:text-slate-500 transition-colors">
                <FiMail />
                <FiPhone />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Reusable Modal Pop-up */}
      <ProfileModal
        isOpen={Boolean(selectedStaff)}
        onClose={() => setSelectedStaff(null)}
        staff={selectedStaff}
      />
    </div>
  );
}
