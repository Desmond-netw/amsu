import React from "react";
import { PrismaClient } from "@prisma/client";
import * as Accordion from "@radix-ui/react-accordion";
import { FiActivity } from "react-icons/fi";
import ActiveRequestRowItem from "@/app/(dashboard)/dashboard_components/ActiveRequestRowItem"; // Client component wrapper for interactions

const prisma = new PrismaClient();

export default async function ActiveOperationsPage() {
  // Querying ONLY items matching the operational pipeline tracking criteria
  const activeRequests = await prisma.request.findMany({
    where: {
      status: {
        in: ["IN_PROGRESS"], // request status filter here
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-brand_1-900 p-8 rounded-2xl text-white shadow-md">
        <div>
          <h1 className="text-2xl font-bold">Live Operations Feed</h1>
          <p className="text-brand_1-200 text-sm mt-1">
            Tracking fresh and ongoing pipeline deployments across the urban
            grid.
          </p>
        </div>
        <div className="bg-brand_1-800 border border-brand_1-700 px-4 py-2 rounded-xl text-xs font-bold uppercase">
          {activeRequests.length} Active Tickets
        </div>
      </div>

      {activeRequests.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border text-slate-400 font-medium">
          No live pending or in-progress service queues currently active.
        </div>
      ) : (
        <Accordion.Root type="single" collapsible className="space-y-4">
          {activeRequests.map((req) => (
            // Map plain database objects securely into our interactive handler item
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
