import CreateRequestForm from "@/app/(dashboard)/forms/requestForm";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function NewRequestPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Breadcrumb Navigation back to panel */}
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand_1-600 transition-colors"
      >
        <FiArrowLeft /> Back to Management Platform
      </Link>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
        <div className="mb-6 border-b border-slate-100 pb-4">
          <h1 className="text-2xl font-bold text-slate-900">
            Initiate Sewerage Service Request
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Submit formal tracking logs for municipal sanitation work requests
            across the Accra Metropolitan region.
          </p>
        </div>

        {/* Mounting your custom form file layout directly */}
        <div className="bg-slate-50/50 p-4 md:p-6 rounded-xl border border-slate-100">
          <CreateRequestForm />
        </div>
      </div>
    </div>
  );
}
