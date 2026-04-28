import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Inter, Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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
        <ClerkProvider>
          <Theme>
            <div className="flex flex-col min-h-screen">
              {/* Navbar */}
              <Navbar />
              {/* Main Content */}
              <main className="flex-grow pt-8 pb-8">
                <Container>{children}</Container>
              </main>
              {/* Footer */}
              <Footer />
            </div>
          </Theme>
        </ClerkProvider>
      </body>
    </html>
  );
}
