import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className=" flex my-[10vh] ">
        <div className=" md:text-6xl   text-center my-[40vh] flex-wrap text-white w-full items-center">
          International conference on wireless communication
          <div className="md:text-3xl my-1">
            Organised by Department of Electronics and Telecommunication
            Engineering, D J Sanghvi College of Engineering. Mumbai,
            Maharashtra, India
            
          </div>
        </div>

        <div className="  w-full h-[90vh] flex justify-center flex-row items-center overflow-x-scroll absolute z-[-1]   ">
          <Image src="/i2.webp"  fill={true} alt="i2"></Image>
        </div>
      </div>
    </>
  );
}

export default Hero;
