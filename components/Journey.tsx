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
              ICWiCOM is being organised with a view
to
cultivate
research
activities in the field of Wireless Communication at our institute.
The conference will bring in eminent personalities from various areas of Wireless Communication on a common platform.
Interactions during the conference are expected to open up many research areas for upcoming Post-graduate & Doctoral students
as well.
              </div>
            </div>
          </CardContent>
        </Card>
        </motion.div>
    </>
  )
}

export default Journey