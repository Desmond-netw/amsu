import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { FiUser, FiMail, FiShield, FiCalendar } from "react-icons/fi";
import Image from "next/image";

export default async function ProfilePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
 }

  const role = (user.publicMetadata?.role as string) || "staff";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Account Profile</h1>
        <p className="text-sm text-slate-500">
          Manage your personal credentials and platform access permissions.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {/* Decorative Profile Banner */}
        <div className="h-32 bg-gradient-to-r from-slate-500 to-slate-600" />

        <div className="p-6 relative">
          {/* Avatar placement */}
          <div className="absolute -top-16 left-6 w-24 h-24 rounded-2xl border-4 border-white overflow-hidden bg-slate-200 shadow-md">
            {user.imageUrl ? (
              <Image
                src={user.imageUrl}
                alt="Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-600 text-3xl font-bold">
                {user.firstName?.charAt(0)}
              </div>
            )}
          </div>

          {/* User Details Form Grid */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <FiUser /> Full Name
              </label>
              <p className="text-slate-800 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                {user.firstName} {user.lastName}
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <FiMail /> Email Address
              </label>
              <p className="text-slate-800 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                {user.emailAddresses[0]?.emailAddress}
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <FiShield /> System Role
              </label>
              <p className="text-brand_1-700 font-bold capitalize bg-brand_1-50 p-3 rounded-lg border border-brand_1-100">
                {role}
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <FiCalendar /> Account Created
              </label>
              <p className="text-slate-800 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
