"use client";

import { UserButton } from "@clerk/nextjs";
import { FiActivity, FiUsers, FiFolder } from "react-icons/fi";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            AMSU Admin Overview
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back to the control panel.
          </p>
        </div>

        {/* User Account */}
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Active Requests"
          value="12"
          color="blue"
          icon={<FiActivity />}
        />
        <StatCard
          title="Total Customers"
          value="48"
          color="green"
          icon={<FiUsers />}
        />
        <StatCard
          title="Recent Projects"
          value="5"
          color="purple"
          icon={<FiFolder />}
        />
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  color,
  icon,
}: {
  title: string;
  value: string;
  color: string;
  icon: React.ReactNode;
}) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

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
