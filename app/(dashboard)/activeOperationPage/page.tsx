import { FiActivity } from "react-icons/fi";

export default function ActiveOperationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-brand_1-900 p-8 rounded-2xl text-white">
        <div>
          <h1 className="text-2xl font-bold">Live Operations</h1>
          <p className="text-brand_1-200">
            Current status of all field teams in the Accra Metro Area.
          </p>
        </div>
        <div className="animate-pulse bg-red-500 w-4 h-4 rounded-full"></div>
      </div>

      <div className="bg-white rounded-xl p-8 text-center border-2 border-dashed border-slate-200">
        <FiActivity className="mx-auto text-4xl text-slate-300 mb-4" />
        <p className="text-slate-500">Connecting to live dispatch feed...</p>
      </div>
    </div>
  );
}
