import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "DVION Intelligence",
  description: "Building Intelligent Software, AI Systems & Digital Solutions"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />
        <NavBar />
        <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
