"use client";
import Hero from "@/components/Hero";
import { motion, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Journey from "@/components/Journey";
import Aboutus from "@/components/Aboutus";
import Progressbar from "@/components/Progressbar";
export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="">
        <Hero />

        <Progressbar />
        <Aboutus />

        <Journey />
      </div>
    </>
  );
}
