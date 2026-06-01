import React from "react";
import { PrismaClient } from "@prisma/client";
import { FiActivity, FiUsers, FiFolder } from "react-icons/fi";
import StatCard from "./StatCard";

const prisma = new PrismaClient();

export default async function DashboardStatsGrid() {
  // 1. Live Aggregate Count: Active Operations (Pending Review & In Progress status tokens)
  const activeRequestsCount = await prisma.request.count({
    where: {
      status: {
        in: ["IN_PROGRESS"],
      },
    },
  });

  // 2. Live Aggregate Count: Recent Projects (Completed items status tokens)
  const completedProjectsCount = await prisma.request.count({
    where: {
      status: "COMPLETED",
    },
  });

  // Note: Customer table is not active yet, keeping static
  const staticCustomerCount = "48";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Active Requests Card */}
      <StatCard
        title="Active Requests"
        value={activeRequestsCount.toString()}
        color="blue"
        icon={<FiActivity />}
        viewmoreLink="/myAMSU/activeOperationPage"
      />

      {/* Total Customers Card */}
      <StatCard
        title="Total Customers"
        value={staticCustomerCount}
        color="green"
        icon={<FiUsers />}
      />

      {/* Recent Projects Card */}
      <StatCard
        title="Recent Projects"
        value={completedProjectsCount.toString()}
        color="purple"
        icon={<FiFolder />}
        viewmoreLink="/myAMSU/recentProjects"
      />
    </div>
  );
}
