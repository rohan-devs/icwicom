import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { motion } from "framer-motion";
function Aboutus() {

  return (
    <>
      <div className=" m-5 " >
        <Card >
          <CardHeader>
            <CardTitle className=" underline underline-offset-4 text-center text-3xl">
              About us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" grid md:grid-cols-2 gap-3 grid-cols-1 m-3">
              <motion.div className=" justify-center flex"
                initial={{ x: -70 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}>
                <Image src="/i2.webp" width={500} height={400} className=" rounded-xl" alt="i2"></Image>
              </motion.div>
              <motion.div className=" flex justify-center items-center text-xl" 
              initial={{ x: 70 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}>
               Dwarkadas. J. Sanghvi College of Engineering started the course in Electronics & Telecommunication Engineering (EXTC), in 1999 with the intake of 30. In the subsequent year, it was increased to 60. In the year 2010, it was increased to 120.Since then the intake at the undergraduate level is 120. Department is running M.Tech. Program in Electronics & telecommunication since 2011, with the intake of 18 students. Affiliated to the University of Mumbai, Ph.D. Research centre of the Department, started from Academic year 2015–16. This program is accredited by National Board of Accreditation with effect from the Academic Year 2012-13. Since Academic Year 2022-23 department intake has increased to 180.
              </motion.div>
            </div>
          </CardContent>
        </Card>
       
      </div>
    </>
  );
}

export default Aboutus;
