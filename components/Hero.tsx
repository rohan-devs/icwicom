import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
function Hero() {
  return (
    <>
      <div className=" flex my-[10vh] sticky "
      
      >
        <motion.div className=" md:text-6xl   text-center my-[40vh] flex-wrap text-white w-full items-center absolute"
        initial={{ x: -100,opacity:0 }}
        animate={{ x: 0,opacity:100 }}
        transition={{ duration: 0.2}}>
          International Conference on Wireless Communication 2025
          <div className="md:text-3xl my-1">
            Organised by
            <br />
             Department of Electronics and Telecommunication
            Engineering <br /> D J Sanghvi College of Engineering. Mumbai,
            Maharashtra, India
            
          </div>
        </motion.div>

        <div className="  w-full h-[90vh]  justify-center flex-row items-center   z-[-1]   ">
          <Image src="/frontpe.jpg"  fill={true} alt="i2"></Image>
        </div>
      </div>
    </>
  );
}

export default Hero;
