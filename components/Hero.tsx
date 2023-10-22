import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
function Hero() {
  return (
    <>
    <div className=" flex my-[75px]">


      <div className=" md:text-4xl z-[1]  text-center my-[25vh] flex flex-col flex-wrap text-white">
        3rd International Conference on Advanced Computing Technologies and
        Applications-2023 (ICACTA) <br />
        Technically Co Sponsored by IEEE Bombay Section
        <br />
        <div className="md:text-3xl my-1">
          Artificial Intelligence and Evolutionary Computing
          <div className=" my-14">
            <Button className="text-3xl">
              <Link href="/callforpapers">Call for papers</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="  w-full flex justify-center flex-row items-center overflow-x-scroll h-[80vh] absolute z-[-1]  ">
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
