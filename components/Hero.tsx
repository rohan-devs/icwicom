import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className=" flex ">
        <div className=" md:text-4xl z-[1]  text-center my-[10vh] flex-wrap text-white w-full">
          International conference on wireless communication
          
          <div className="md:text-3xl my-1">
            Organized by IETE-ISF
            <div className=" my-14">
              
            </div>
          </div>
        </div>

        <div className="  w-full flex justify-center flex-row items-center overflow-x-scroll absolute z-[-1]  ">
          <Image
            src="/i1.jpg"
            width={1000}
            height={1800}
            alt="Picture of the author"
          ></Image>
          <Image
            src="/i1.jpg"
            width={1000}
            height={1800}
            alt="Picture of the author"
          ></Image>
          <Image
            src="/i1.jpg"
            width={1000}
            height={1800}
            alt="Picture of the author"
          ></Image>
        </div>
      </div>
      
    </>
  );
}

export default Hero;
