"use client";
import Hero from "@/components/Hero";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Journey from "@/components/Journey";
import Aboutus from "@/components/Aboutus";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="">
        <Hero />

        <Aboutus />
        <Journey />
      </div>
    </>
  );
}
