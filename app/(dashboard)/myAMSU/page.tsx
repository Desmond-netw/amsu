"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiMail,
  FiPhone,
  FiCheckCircle,
  FiPlus,
  FiEdit2,
  FiArchive,
  FiRefreshCw,
} from "react-icons/fi";
import ProfileModal, { StaffMember } from "./ProfileModal";
import StaffFormModal from "./StaffFormModal";

export default function StaffPage() {
  // Central Data Pool State
  const [staffList, setStaffList] = useState<StaffMember[]>([
    {
      id: "1",
      name: "Kwame Mensah",
      age: 34,
      profilePhoto: "/assets/staff/kwame.jpg",
      role: "Plumber",
      email: "k.mensah@amsu.gov.gh",
      phone: "024 123 4567",
      certifications: ["Confined Space Entry"],
      safetyStatus: "Cleared",
      assignedVehicle: "Jetting Truck #2",
      isArchived: false,
    },
    {
      id: "2",
      name: "Emmanuel Osei",
      age: 29,
      profilePhoto: "/assets/staff/emmanuel.jpg",
      role: "Electrician",
      email: "e.osei@amsu.gov.gh",
      phone: "024 987 6543",
      certifications: ["Industrial Control Systems"],
      safetyStatus: "Cleared",
      assignedVehicle: "Utility Van #5",
      isArchived: false,
    },
  ]);

  // Window & Panel Interface Toggles
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTarget, setEditingTarget] = useState<StaffMember | null>(null);
  const [showArchived, setShowArchived] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(true); // Toggle to show/hide admin buttons

  // --- Core State Mutators ---
  const handleSaveStaff = (updatedMember: StaffMember) => {
    setStaffList((prev) => {
      const exists = prev.some((item) => item.id === updatedMember.id);
      if (exists) {
        return prev.map((item) =>
          item.id === updatedMember.id ? updatedMember : item,
        );
      }
      return [...prev, updatedMember];
    });
    setEditingTarget(null);
  };

  const handleToggleArchive = (id: string) => {
    setStaffList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isArchived: !s.isArchived } : s)),
    );
  };

  const handleOpenEditForm = (member: StaffMember) => {
    setEditingTarget(member);
    setIsFormOpen(true);
  };

  // Compute list based on the active tab toggle
  const filteredStaff = staffList.filter((s) => s.isArchived === showArchived);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Roster Controls Action Panel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            AMS Utility Directory
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Active field engineering and operations roster.
          </p>
        </div>

        {/* Simplified Global Toolbar Controls */}
        <div className="flex flex-wrap gap-2.5 items-center">
          <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 cursor-pointer">
            <input
              type="checkbox"
              checked={isAdminMode}
              onChange={(e) => setIsAdminMode(e.target.checked)}
              className="rounded text-brand_1-600 focus:ring-brand_1-500"
            />
            Admin Access
          </label>

          <button
            onClick={() => setShowArchived(!showArchived)}
            className="inline-flex items-center gap-1.5 border border-slate-200 bg-white px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
          >
            {showArchived ? <FiRefreshCw /> : <FiArchive />}
            {showArchived ? "View Active Staff" : "View Archived Logs"}
          </button>

          {isAdminMode && (
            <button
              onClick={() => {
                setEditingTarget(null);
                setIsFormOpen(true);
              }}
              className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer shadow-xs transition-colors"
            >
              <FiPlus /> Deploy Personnel
            </button>
          )}
        </div>
      </div>

      {/* Grid Roster View */}
      {filteredStaff.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50/50">
          <p className="text-slate-400 font-medium text-sm">
            No matching records found in this tracking index.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredStaff.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
            >
              {/* Card Body Clickable for Full View Popups */}
              <div
                onClick={() => setSelectedStaff(s)}
                className="flex items-start gap-4 cursor-pointer w-full group mb-4"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 relative bg-slate-100 border border-slate-100">
                  <Image
                    src={s.profilePhoto}
                    alt={s.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div className="overflow-hidden flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-slate-800 truncate group-hover:text-brand_1-600 transition-colors">
                      {s.name}
                    </h3>
                    {s.safetyStatus === "Cleared" && !s.isArchived && (
                      <FiCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-brand_1-600 font-semibold mb-2 truncate">
                    {s.role}
                  </p>

                  {/* Basic Contacts */}
                  <div className="flex gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1 truncate">
                      <FiMail /> {s.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Simplified Operational Admin Action Deck Footer */}
              {isAdminMode && (
                <div className="flex items-center gap-2 pt-3 border-t border-slate-50 w-full mt-auto">
                  <button
                    onClick={() => handleOpenEditForm(s)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 bg-white hover:bg-slate-50 hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    <FiEdit2 className="text-[10px]" /> Edit
                  </button>
                  <button
                    onClick={() => handleToggleArchive(s.id)}
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                      s.isArchived
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-amber-600"
                    }`}
                  >
                    {s.isArchived ? (
                      <FiRefreshCw className="text-[10px]" />
                    ) : (
                      <FiArchive className="text-[10px]" />
                    )}
                    {s.isArchived ? "Restore" : "Archive"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Read-Only View Profile Modal Panel */}
      <ProfileModal
        isOpen={Boolean(selectedStaff)}
        onClose={() => setSelectedStaff(null)}
        staff={selectedStaff}
      />

      {/* Admin Mutation Data Form Manager Panel */}
      <StaffFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveStaff}
        editingStaff={editingTarget}
      />
    </div>
  );
}
