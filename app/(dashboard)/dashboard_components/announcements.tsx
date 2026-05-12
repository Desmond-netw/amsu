"use client";

import Link from "next/link";

const announcements = [
  {
    id: 1,
    category: "Maintenance",
    tagColor: "brand",
    time: "2h ago",
    title: "scheduled sewer maintenance",
    desc: "System will be offline for 15 mins at midnight for security patches.",
  },
  {
    id: 2,
    category: "Urgent",
    tagColor: "yellow",
    time: "5h ago",
    title: "Staff Meeting at 3 PM",
    desc: "All staff are required to attend the meeting in the main conference room.",
  },
];

export default function Announcements() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-xl p-6 border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800">Announcements</h2>
          <Link
            href="/admin/announcements"
            className="text-xs text-brand_1-500 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {announcements.map((item) => (
            <div
              key={item.id}
              className={`bg-slate-50 p-4 rounded-lg border-l-4 ${
                item.tagColor === "brand"
                  ? "border-brand_1-500"
                  : "border-yellow-500"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span
                  className={`text-xs font-bold uppercase ${
                    item.tagColor === "brand"
                      ? "text-brand_1-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.category}
                </span>
                <span className="text-[10px] text-slate-400">{item.time}</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-700">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Box */}
    </div>
  );
}
