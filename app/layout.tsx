'use client';

import "./globals.css";
import { ThemeProvider } from "next-themes";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



import { ReactNode } from "react";

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
            

           

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}