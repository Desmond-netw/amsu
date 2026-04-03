import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Inter, Roboto } from "next/font/google";

import { Navbar } from "./ui_components/Nav/Navbar";
import { Footer } from "./ui_components/Footer/Footer";
import Container from "./ui_components/Container";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "AMSU",
  description: "sewerage management system for Accra Metro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} text-slate-700 ${roboto.variable} antialiased`}
      >
        <Theme>
          <div className="flex flex-col min-h-screen gap-8">
            <Navbar />
            <main className="flex-grow pb-8 mb-4">
              <Container>{children}</Container>{" "}
              {/* Wrap children with Container for consistent layout */}
            </main>
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
