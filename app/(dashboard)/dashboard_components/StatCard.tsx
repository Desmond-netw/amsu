"use client";

import React from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  color?: "blue" | "green" | "purple";
  icon: React.ReactNode;
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
};

export default function StatCard({
  title,
  value,
  color = "blue",
  icon,
}: StatCardProps) {
  return (
    <div
      className="
        bg-white p-6 rounded-xl shadow-sm border border-slate-200
        hover:shadow-md transition-all duration-300
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 uppercase">
            {title}
          </p>
          <p className="text-3xl font-bold mt-2 text-slate-900">{value}</p>
        </div>

        <div
          className={`w-12 h-12 flex items-center justify-center rounded-lg ${colorMap[color]}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
