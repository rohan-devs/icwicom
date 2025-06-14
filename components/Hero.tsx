import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
function Hero() {
  return (
    <>
      <motion.div className=" flex my-[10vh] sticky "
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.2 }}>
        <div className=" md:flex flex-row justify-between hidden w-full absolute p-14  ">
          <Image src="/svkm.png" width={100} height={100} alt="svkmlogo"></Image>
          <Image src="/dj.png" width={120} height={80} alt="svkmlogo"></Image>
        </div>
        <motion.div
          className=" md:text-6xl   text-center my-[40vh] flex-wrap text-white w-full items-center absolute"

        >

          International Conference on Wireless Communication 2025
          <div className="md:text-3xl my-1">
            Organised by
            <br />
            Department of Electronics and Telecommunication Engineering <br /> D
            J Sanghvi College of Engineering. Mumbai, Maharashtra, India
          </div>
          <div className="overflow-hidden whitespace-nowrap text-2xl text-black">
                  <div className="inline-block animate-marquee">
                    The Paper Submission Deadline is extended till 20<sup>th</sup> May, 2025.
                  </div>
                </div>
        </motion.div>

        <div className="  w-full  h-[90vh]  justify-center flex-row items-center   z-[-1]   ">
          <Image src="/fp.jpg" fill={true} alt="i2"></Image>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
