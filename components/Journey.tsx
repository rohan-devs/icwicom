import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { motion } from 'framer-motion';

function Journey() {
  return (
    <>
    <motion.div   initial={{ x: -70 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}>


   <Card className="m-5 md:my-[400px]">
          <CardHeader>
            <CardTitle className=" underline underline-offset-4 text-center text-3xl">
              Our Journey so far!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" grid  gap-3 grid-cols-1 m-3">
             
              <div className=" flex justify-center items-center text-xl">
                The IETE-SF of D.J.Sanghvi organised the second year of ICWiCOM
                (International conference on wireless communication) held in the
                institution for the year 2019. The conference was held across
                two days on the 17th,19th 21st. 100+ papers were
                presented across eight sessions including, for the first time, 2
                Skype sessions, which was the highlight of this conference.
              </div>
            </div>
          </CardContent>
        </Card>
        </motion.div>
    </>
  )
}

export default Journey