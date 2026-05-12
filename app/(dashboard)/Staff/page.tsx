import { FiUsers, FiMail, FiPhone } from "react-icons/fi";

export default function StaffPage() {
  const staff = [
    {
      name: "John Doe",
      role: "Field Engineer",
      email: "j.doe@amsu.gov.gh",
      phone: "024 123 4567",
    },
    {
      name: "Sarah Smith",
      role: "Site Supervisor",
      email: "s.smith@amsu.gov.gh",
      phone: "024 987 6543",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Personnel Directory</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {staff.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
          >
            <div className="w-16 h-16 bg-brand_1-100 rounded-full flex items-center justify-center text-brand_1-700 text-2xl font-bold">
              {s.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-slate-800">{s.name}</h3>
              <p className="text-xs text-brand_1-600 font-medium mb-2">
                {s.role}
              </p>
              <div className="flex gap-3 text-slate-400">
                <FiMail className="hover:text-brand_1-500 cursor-pointer" />
                <FiPhone className="hover:text-brand_1-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
