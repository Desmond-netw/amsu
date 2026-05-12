"use client";

import React from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  // Updated to support your brand colors + standard status colors
  color?: "brand" | "green" | "blue" | "purple" | "yellow";
  icon: React.ReactNode;
  trend?: string; // Optional: e.g., "+12%"
};

const colorMap: Record<string, string> = {
  brand: "bg-brand_1-50 text-brand_1-600 border-brand_1-100",
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  green: "bg-emerald-50 text-emerald-600 border-emerald-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  yellow: "bg-amber-50 text-amber-600 border-amber-100",
};

export default function StatCard({
  title,
  value,
  color = "brand",
  icon,
  trend,
}: StatCardProps) {
  return (
    <div
      className="
        bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100
        hover:shadow-lg hover:-translate-y-1 transition-all duration-300
        flex flex-col justify-between h-full
      "
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
            {title}
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            {value}
          </h3>
        </div>

        {/* Responsive Icon: Smaller on mobile, larger on desktop */}
        <div
          className={`
            w-10 h-10 md:w-12 md:h-12 
            flex items-center justify-center 
            rounded-xl border transition-colors
            ${colorMap[color]}
          `}
        >
          <span className="text-xl md:text-2xl">{icon}</span>
        </div>
      </div>

      {/* Optional Trend indicator for a professional touch */}
      {trend && (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[10px] md:text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
            {trend}
          </span>
          <span className="text-[10px] md:text-xs text-slate-400 font-medium">
            vs last month
          </span>
        </div>
      )}
    </div>
  );
}
