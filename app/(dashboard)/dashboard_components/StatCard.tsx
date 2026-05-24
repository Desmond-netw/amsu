"use client";

import React from "react";
import Link from "next/link";

interface StatCardProps {
  title: string;
  value: string;
  color: "blue" | "green" | "purple";
  icon: React.ReactNode;
  viewmoreLink?: string;
}

const colorStyles = {
  blue: {
    bg: "bg-blue-50 border-blue-100",
    icon: "bg-blue-500 text-white",
    text: "text-blue-600",
  },
  green: {
    bg: "bg-emerald-50 border-emerald-100",
    icon: "bg-emerald-500 text-white",
    text: "text-emerald-600",
  },
  purple: {
    bg: "bg-purple-50 border-purple-100",
    icon: "bg-purple-500 text-white",
    text: "text-purple-600",
  },
};

export default function StatCard({
  title,
  value,
  color,
  icon,
  viewmoreLink,
}: StatCardProps) {
  const styles = colorStyles[color];

  return (
    <div
      className={`bg-white border rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md`}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {title}
          </p>
          <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            {value}
          </h3>
        </div>
        <div className={`p-3 rounded-xl shadow-sm ${styles.icon}`}>
          {React.cloneElement(icon as React.ReactElement, {
            className: "text-xl",
          })}
        </div>
      </div>

      {viewmoreLink ? (
        <Link
          href={viewmoreLink}
          className={`text-xs font-bold mt-5 inline-flex items-center gap-1 hover:underline transition-all ${styles.text}`}
        >
          View detailed logs &rarr;
        </Link>
      ) : (
        <span className="text-[10px] text-slate-400 font-medium mt-5 italic">
          System managed ledger
        </span>
      )}
    </div>
  );
}
