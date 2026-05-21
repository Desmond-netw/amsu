import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css"; // Ensure Radix styles are imported
import { Theme } from "@radix-ui/themes";
import { Inter, Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

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
  description: "Sewerage management system for Accra Metro",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} text-slate-700 antialiased`}
      >
        <ClerkProvider>
          <Theme>{children}</Theme>
        </ClerkProvider>
      </body>
    </html>
  );
}
