import React from "react";
import { PrismaClient } from "@prisma/client";
import * as Accordion from "@radix-ui/react-accordion";
import { FiCheckCircle } from "react-icons/fi";
import ActiveRequestRowItem from "@/app/(dashboard)/dashboard_components/ActiveRequestRowItem";

const prisma = new PrismaClient();

export default async function RecentProjectsPage() {
  // Querying database for items that have completed execution
  const completedProjects = await prisma.request.findMany({
    where: {
      status: "COMPLETED",
    },
    orderBy: { updatedAt: "desc" }, // Shows the most recently completed items first
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex justify-between items-center bg-slate-900 p-6 md:p-8 rounded-2xl text-white shadow-md">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Project Archives & Logs
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Operational History of all successfully completed requests.
          </p>
        </div>
        <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-bold uppercase text-emerald-400 flex items-center gap-2">
          <FiCheckCircle className="animate-pulse" />
          {completedProjects.length} Finished Tasks
        </div>
      </div>

      {/* Main Container Render */}
      {completedProjects.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border text-slate-400 font-medium">
          No records are currently stored within the completed archives.
        </div>
      ) : (
        <Accordion.Root type="single" collapsible className="space-y-4">
          {completedProjects.map((req) => (
            // Reusing your unified row component layout handles
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
