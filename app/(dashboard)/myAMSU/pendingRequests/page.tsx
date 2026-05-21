import React from "react";
import { PrismaClient } from "@prisma/client";
import * as Accordion from "@radix-ui/react-accordion";
import { FiClock } from "react-icons/fi";
import ActiveRequestRowItem from "@/app/(dashboard)/dashboard_components/ActiveRequestRowItem";

const prisma = new PrismaClient();

export default async function PendingProjectsPage() {
  // Querying database specifically for items matching your hold states
  const pendingProjects = await prisma.request.findMany({
    where: {
      status: "ON_HOLD",
    },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex justify-between items-center bg-amber-600 p-6 md:p-8 rounded-2xl text-white shadow-md">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Pending Inquiries & and on Hold
          </h1>
          <p className="text-amber-100 text-sm mt-1">
            Review and clear tasks that are paused or awaiting validation.
          </p>
        </div>
        <div className="bg-amber-700/50 border border-amber-500 px-4 py-2 rounded-xl text-xs font-bold uppercase text-amber-100 flex items-center gap-2">
          <FiClock />
          {pendingProjects.length} Paused Items
        </div>
      </div>

      {/* Main Container Render */}
      {pendingProjects.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border text-slate-400 font-medium">
          Excellent! There are no operational workflows currently marked on
          hold.
        </div>
      ) : (
        <Accordion.Root type="single" collapsible className="space-y-4">
          {pendingProjects.map((req) => (
            <ActiveRequestRowItem
              key={req.id}
              request={JSON.parse(JSON.stringify(req))}
            />
          ))}
        </Accordion.Root>
      )}
    </div>
  );
}
