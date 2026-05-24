import React from "react";
import { PrismaClient } from "@prisma/client";
import { currentUser } from "@clerk/nextjs/server"; // Or your current custom session role utility
import AnnouncementManagerClient from "@/app/(dashboard)/dashboard_components/AnnouncementManagerClient";

const prisma = new PrismaClient();

export default async function AnnouncementsPage() {
  // 1. Role Authorization Gate
  const user = await currentUser();
  // Assume metadata holds role info. Change this check to match your exact role layout rules.
  const isAdmin = user?.publicMetadata?.role === "admin";

  // 2. Query all items to display on the feed
  const allAnnouncements = await prisma.announcement.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
          System Announcements Bulletin
        </h1>
        <p className="text-sm text-slate-500">
          View corporate bulletins and active operational dispatches.
        </p>
      </div>

      <AnnouncementManagerClient
        initialData={JSON.parse(JSON.stringify(allAnnouncements))}
        isAdmin={isAdmin}
      />
    </div>
  );
}
