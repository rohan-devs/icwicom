import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
          <CardHeader>
            <CardTitle className=" underline underline-offset-4 text-center text-3xl">
              Our Journey so far!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" grid  gap-1 grid-cols-1 m-3">
              <div className=" flex  text-xl flex-col">
                ICWiCOM is being organised with a view to cultivate research
                activities in the field of Wireless Communication at our
                institute. The conference will bring in eminent personalities
                from various areas of Wireless Communication on a common
                platform. Interactions during the conference are expected to
                open up many research areas for upcoming Post-graduate &amp;
                Doctoral students as well. <br /> <br />
                In the past, Department of EXTC has organized three ICWiCOM
                namely, ICWiCOM 2017, ICWiCOM 2019, and ICWiCOM 2021. Following
                are the proceeding details of previous ICWiCOM.
                <div className="">
                  <Link href="https://www.springer.com/us/book/9789811083389">
                    ICWiCOM 2017
                  </Link>
                  <br />

                  <Link href="https://www.springer.com/gp/book/9789811510014">
                    ICWiCOM 2019
                  </Link>
                  <br />
                  <Link href="https://link.springer.com/book/10.1007/978-981-16-6601-8">
                    ICWiCOM 2021
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}

export default Journey;
