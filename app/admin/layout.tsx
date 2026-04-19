import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "./Sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  // If no user is logged in, send them to the sign-in page
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
