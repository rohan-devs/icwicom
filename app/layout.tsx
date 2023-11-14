"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import { Inter } from "next/font/google";
import { Separator } from "@/components/ui/separator";
const inter = Inter({ subsets: ["latin"] });

import { ReactNode } from "react";
import Footer from "@/components/Footer";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <Navbar />
            <div className=" my-[10vh]">

            </div>

            {children}
            <Separator className="my-[10vh]" />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
