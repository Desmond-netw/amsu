"use client";

import React from "react";
import {
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiActivity,
} from "react-icons/fi";

// Mock data mirroring real municipal drainage/sewerage tracking criteria
const projects = [
  {
    id: "PRJ-2026-001",
    title: "Kaneshi Market Main Drain Realignment",
    location: "Kaneshi Commercial Zone (GA-048-1290)",
    status: "In Progress",
    startDate: "Jan 15, 2026",
    completionRate: 65,
    type: "Reconstruction",
  },
  {
    id: "PRJ-2026-002",
    title: "Osu Klottey Sub-Metro Pipe Replacement",
    location: "Osu Ring Road Link (GA-112-9023)",
    status: "Completed",
    startDate: "Feb 02, 2026",
    completionRate: 100,
    type: "Maintenance",
  },
  {
    id: "PRJ-2026-003",
    title: "Accra Central Sewerage Treatment Desilting",
    location: "James Town Coastal Plant (GA-182-4410)",
    status: "In Progress",
    startDate: "Mar 10, 2026",
    completionRate: 30,
    type: "Emergency Dredging",
  },
];

export default function RecentProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Header View */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Recent Projects</h1>
          <p className="text-sm text-slate-500">
            Monitoring active construction, infrastructural overhauls, and
            municipal sanitation tasks.
          </p>
        </div>
      </div>

      {/* Projects Grid Container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border px-2.5 py-1 rounded-md">
                  {project.id}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === "Completed"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {project.status === "Completed" ? (
                    <FiCheckCircle className="text-sm" />
                  ) : (
                    <FiActivity className="text-sm animate-pulse" />
                  )}
                  {project.status}
                </span>
              </div>

              {/* Title & Core Details */}
              <h3 className="text-lg font-bold text-slate-800 leading-snug mb-4">
                {project.title}
              </h3>

              <div className="space-y-2 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-slate-400 shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-slate-400 shrink-0" />
                  <span>Initiated: {project.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiBriefcase className="text-slate-400 shrink-0" />
                  <span className="font-medium text-brand_1-600 bg-brand_1-50/50 px-2 py-0.5 rounded text-xs">
                    {project.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Section: Progress metrics */}
            <div className="border-t border-slate-50 pt-4">
              <div className="flex justify-between items-center mb-1.5 text-xs font-bold text-slate-500">
                <span>Task Allocation Metrics</span>
                <span
                  className={
                    project.status === "Completed"
                      ? "text-emerald-600"
                      : "text-slate-700"
                  }
                >
                  {project.completionRate}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    project.status === "Completed"
                      ? "bg-emerald-500"
                      : "bg-brand_1-500"
                  }`}
                  style={{ width: `${project.completionRate}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
