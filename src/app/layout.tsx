import type { Metadata } from "next";
import { Syne, Fira_Code } from "next/font/google";
import SidebarNav from "@/components/SidebarNav";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Kur Zagin // krzgn.xyz",
  description: "Solo developer. Building small, precise tools for creators.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${firaCode.variable} h-full antialiased dark`}
    >
      <body className="flex flex-col md:flex-row px-4 py-3 md:p-4 gap-0 md:gap-4 h-screen selection:bg-lazurite-600 selection:text-white relative overflow-hidden bg-background">
        <div id="noise" className="pointer-events-none" />
        <SidebarNav />
        {children}
      </body>
    </html>
  );
}
