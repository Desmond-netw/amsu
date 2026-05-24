import React from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { formatRelativeTime } from "@/lib/utils";

const prisma = new PrismaClient();

export default async function AnnouncementsSidebarCard() {
  // Query the 3 newest announcements
  const databaseAnnouncements = await prisma.announcement.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-slate-800">
          Quick announcements
        </h2>
        <Link
          href="/myAMSU/announcements"
          className="text-xs text-brand_1-500 hover:underline font-semibold"
        >
          View All
        </Link>
      </div>

      {databaseAnnouncements.length === 0 ? (
        <p className="text-xs text-slate-400 italic text-center py-4">
          No active broadcasts.
        </p>
      ) : (
        <div className="space-y-4">
          {databaseAnnouncements.map((item) => (
            <div
              key={item.id}
              className={`bg-slate-50/60 p-3.5 rounded-lg border-l-4 transition-all ${
                item.tagColor === "brand"
                  ? "border-brand_1-500"
                  : "border-yellow-500"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    item.tagColor === "brand"
                      ? "text-brand_1-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.category}
                </span>
                <span className="text-[10px] text-slate-400">
                  {formatRelativeTime(item.createdAt)}
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-700 truncate">
                {item.title}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
