"use client";
import Hero from "@/components/Hero";

import Journey from "@/components/Journey";
import Aboutus from "@/components/Aboutus";
import Progressbar from "@/components/Progressbar";


export default function Home() {

  
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
