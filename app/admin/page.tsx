"use client";

import { UserButton } from "@clerk/nextjs";
import StatCard from "@/app/admin/components/StatCard";
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
        <UserButton fallback="/" />
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
