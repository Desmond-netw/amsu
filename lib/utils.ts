import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Create a Relative Time Helper   like "2h ago" dynamically from database timestamps
export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const past = new Date(date);
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  const elapsed = now.getTime() - past.getTime();

  if (elapsed < msPerMinute) return "Just now";
  if (elapsed < msPerHour) return `${Math.round(elapsed / msPerMinute)}m ago`;
  if (elapsed < msPerDay) return `${Math.round(elapsed / msPerHour)}h ago`;
  return `${Math.round(elapsed / msPerDay)}d ago`;
}
