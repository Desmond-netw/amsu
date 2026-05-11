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
    <div className="h-screen flex">
      {/* left  */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Sidebar />{" "}
      </div>
      {/* right    */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]">{children}</div>
    </div>
  );
}
