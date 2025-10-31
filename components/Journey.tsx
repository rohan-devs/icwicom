'use client';

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";

function Journey() {
  return (
    <>
      <motion.div
        initial={{ x: -70 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="m-5 md:my-[400px]">
          {/* <CardHeader>
            <CardTitle className=" underline underline-offset-4 text-center text-3xl">
              Our Journey so far!
            </CardTitle>
          </CardHeader> */}
          <CardContent>
            <div className=" grid  gap-1 grid-cols-1 m-3">
              <div className=" flex  text-xl flex-col w-full">
                {/* ICWiCOM is being organised with a view to cultivate research
                activities in the field of Wireless Communication at our
                institute. The conference will bring in eminent personalities
                from various areas of Wireless Communication on a common
                platform. Interactions during the conference are expected to
                open up many research areas for upcoming Post-graduate &amp;
                Doctoral students as well. < br /> */}
                <br />
                ICWiCOM proceeding links:
                <div className="">
                  <Link href="https://www.springer.com/us/book/9789811083389" className="underline text-blue-500">
                    ICWiCOM 2017
                  </Link>
                  <br />

                  <Link href="https://www.springer.com/gp/book/9789811510014" className="underline text-blue-500">
                    ICWiCOM 2019
                  </Link>
                  <br />
                  <Link href="https://link.springer.com/book/10.1007/978-981-16-6601-8" className="underline text-blue-500">
                    ICWiCOM 2021
                  </Link> <br />
                  <Link href="https://link.springer.com/book/10.1007/978-981-95-3616-0" className="flex items-center justify-start">
                    <span className="underline text-blue-500">ICWiCOM 2025</span>
                    <span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded animate-pulse">
                      New
                    </span>
                  </Link> 
                </div>
                <br />
                
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}

export default Journey;
