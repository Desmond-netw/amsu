import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import Sidebar from "./Sidebar";
import Menu from "./dashboard_components/menu";
import Link from "next/link";
import Image from "next/image";

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
        <Link
          href="/dashboard"
          className="flex items-center justify-center lg:justify-start gap-2 "
        >
          <Image
            src="/assets/logo/logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
          <span className="hidden lg:inline text-md tracking-tight">AMSU</span>
        </Link>
        <Menu />
      </div>
      {/* right    */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]">{children}</div>
    </div>
  );
}
