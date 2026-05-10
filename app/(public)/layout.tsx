import { Navbar } from "./ui_components/Nav/Navbar";
import { Footer } from "./ui_components/Footer/Footer";
import Container from "./ui_components/Container";
import Topbar from "./ui_components/Nav/topNav/TopNav";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      <main className="flex-grow">
        {/* Note: I removed py-8 from here so your Hero sections can be full-width */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
