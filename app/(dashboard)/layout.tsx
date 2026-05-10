import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "./Sidebar"; // Ensure path is correct

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  // Server-side protection
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar stays fixed on the left */}
      <Sidebar />

      {/* Main content scrolls independently */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
