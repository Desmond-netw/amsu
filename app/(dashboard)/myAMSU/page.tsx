import { Suspense } from "react";
import DashboardGridData from "@/app/(dashboard)/dashboard_components/dashboardGridData";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg lg:text-3xl font-bold text-slate-800 tracking-tight">
            Dashboard
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back to the control panel.
          </p>
        </div>

        {/* User Account */}
      </div>

      {/* Mount your live database metrics card cluster safely wrapped in a skeleton fallback */}
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            <div className="h-32 bg-slate-100 rounded-2xl border"></div>
            <div className="h-32 bg-slate-100 rounded-2xl border"></div>
            <div className="h-32 bg-slate-100 rounded-2xl border"></div>
          </div>
        }
      >
        <DashboardGridData />
      </Suspense>
    </div>
  );
}
