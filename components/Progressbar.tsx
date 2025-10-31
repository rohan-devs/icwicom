'use client';
import React from 'react'
import { motion,useScroll } from 'framer-motion'

function Progressbar() {
    const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
          className=" bg-cyan-400 h-[10px] rounded-xl   "
          style={{ scaleX: scrollYProgress }}
        />
    
    </>

  )
}

export default Progressbar