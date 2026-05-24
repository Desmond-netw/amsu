"use client";

import React, { useState, useTransition } from "react";
import {
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  AnnouncementInput,
} from "@/app/actions/announcements";
import { GrAnnounce } from "react-icons/gr";
import { formatRelativeTime } from "@/lib/utils";
import {
  FiTrash2,
  FiEdit2,
  FiCheck,
  FiX,
  FiAlertTriangle,
} from "react-icons/fi";

interface AnnouncementRecord extends AnnouncementInput {
  id: string;
  createdAt: string;
}

interface ManagerProps {
  initialData: AnnouncementRecord[];
  isAdmin: boolean;
}

export default function AnnouncementManagerClient({
  initialData,
  isAdmin,
}: ManagerProps) {
  const [isPending, startTransition] = useTransition();
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State Handles
  const [category, setCategory] = useState("General");
  const [tagColor, setTagColor] = useState("brand");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Create Submission Handler
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return;

    startTransition(async () => {
      const res = await createAnnouncement({ category, tagColor, title, desc });
      if (res.success) {
        setTitle("");
        setDesc("");
      }
    });
  };

  // Trigger Edit Inline State Populate
  const startEdit = (item: AnnouncementRecord) => {
    setEditingId(item.id);
    setCategory(item.category);
    setTagColor(item.tagColor);
    setTitle(item.title);
    setDesc(item.desc);
  };

  // Cancel Edit Mode
  const cancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setDesc("");
    setCategory("General");
    setTagColor("brand");
  };

  // Inline Update Executor
  const handleUpdate = async (id: string) => {
    startTransition(async () => {
      const res = await updateAnnouncement(id, {
        category,
        tagColor,
        title,
        desc,
      });
      if (res.success) cancelEdit();
    });
  };

  // Delete Action Executor
  const handleDelete = async (id: string) => {
    if (
      !confirm("Are you sure you want to permanently delete this announcement?")
    )
      return;
    startTransition(async () => {
      await deleteAnnouncement(id);
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* ================= LEFT SIDE: ADMIN INPUT EDITOR FORM ================= */}
      {isAdmin ? (
        <div className="bg-white border rounded-xl p-5 shadow-sm space-y-4 lg:col-span-1">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <GrAnnounce className="text-brand_1-600" />
            {editingId ? "Modify Announcement" : "Publish New Announcement"}
          </h3>

          <form
            onSubmit={editingId ? (e) => e.preventDefault() : handleCreate}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="block font-semibold text-slate-600 mb-1">
                Category Title
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-brand_1-500"
                placeholder="e.g., Maintenance, Urgent, General"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">
                Theme Accent Color
              </label>
              <select
                value={tagColor}
                onChange={(e) => setTagColor(e.target.value)}
                className="w-full p-2.5 border rounded-lg outline-none bg-white"
              >
                <option value="brand">Brand Blue Accent</option>
                <option value="yellow">Urgent Warning Yellow</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">
                Headline Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-brand_1-500"
                placeholder="Enter announcement title..."
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">
                Detailed Message Description
              </label>
              <textarea
                rows={4}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-brand_1-500 resize-none"
                placeholder="Provide details..."
                required
              />
            </div>

            {editingId ? (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleUpdate(editingId)}
                  disabled={isPending}
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center justify-center gap-1"
                >
                  <FiCheck /> Save Updates
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg"
                >
                  <FiX />
                </button>
              </div>
            ) : (
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-2.5 bg-brand_1-600 hover:bg-brand_1-700 text-white font-bold rounded-lg shadow-md transition-opacity disabled:opacity-50"
              >
                {isPending ? "Broadcasting..." : "Broadcast to Dashboard"}
              </button>
            )}
          </form>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl text-xs flex items-start gap-2.5 lg:col-span-1">
          <FiAlertTriangle size={18} className="shrink-0 mt-0.5" />
          <p>
            <b>Read-Only Notice:</b> Your access tier allows you to monitor
            corporate announcements. Form editing tools are restricted to system
            administrators.
          </p>
        </div>
      )}

      {/* ================= RIGHT SIDE: MASTER DISPATCH FEED LIST ================= */}
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-base font-bold text-slate-800">
          Active Board Logs ({initialData.length})
        </h2>

        {initialData.length === 0 ? (
          <div className="bg-white border p-8 rounded-xl text-center text-slate-400 text-xs">
            No history entries found in the database.
          </div>
        ) : (
          <div className="space-y-4">
            {initialData.map((item) => {
              const isCurrentlyEditing = editingId === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-white border rounded-xl p-5 shadow-sm transition-all flex justify-between gap-4 ${
                    isCurrentlyEditing
                      ? "ring-2 ring-brand_1-500 border-transparent"
                      : "border-slate-100"
                  }`}
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 border rounded uppercase tracking-wide ${
                          item.tagColor === "brand"
                            ? "bg-blue-50 text-brand_1-600 border-blue-100"
                            : "bg-amber-50 text-amber-600 border-amber-100"
                        }`}
                      >
                        {item.category}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {formatRelativeTime(item.createdAt)}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap">
                      {item.desc}
                    </p>
                  </div>

                  {/* ADMIN ACTION CONTROLS */}
                  {isAdmin && (
                    <div className="flex flex-col sm:flex-row gap-1.5 shrink-0 self-start">
                      <button
                        onClick={() => startEdit(item)}
                        disabled={isCurrentlyEditing}
                        className="p-2 text-slate-400 hover:text-brand_1-600 hover:bg-slate-50 rounded-lg transition-colors"
                        title="Edit entry"
                      >
                        <FiEdit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={isPending}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Delete entry"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
