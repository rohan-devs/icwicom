import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className=" flex my-[10vh] ">
        <div className=" md:text-6xl   text-center my-[40vh] flex-wrap text-white w-full items-center">
          International Conference on Wireless Communication 2025
          <div className="md:text-3xl my-1">
            Organised by
            <br />
             Department of Electronics and Telecommunication
            Engineering <br /> D J Sanghvi College of Engineering. Mumbai,
            Maharashtra, India
            
          </div>
        </div>

        <div className="  w-full h-[90vh] flex justify-center flex-row items-center overflow-x-auto absolute z-[-1]   ">
          <Image src="/fp.jpg"  fill={true} alt="i2"></Image>
        </div>
      </div>
    </>
  );
}

export default Hero;
