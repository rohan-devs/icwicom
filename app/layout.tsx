"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";


import { Separator } from "@/components/ui/separator";

import { Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
const font = Space_Grotesk({
  subsets: ["latin"],


});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <Navbar />
            <div className=" my-[10vh]"></div>

            {children}
            <Separator className="my-[10vh]" />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
