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
import { useRef } from "react";
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
              <div className=" justify-center flex">
                <Image src="/i2.webp" width={500} height={400} className=" rounded-xl" alt="i2"></Image>
              </div>
              <div className=" flex justify-center items-center text-xl">
                The IETE-SF of D.J.Sanghvi organised the second year of ICWiCOM
                (International conference on wireless communication) held in the
                institution for the year 2019. The conference was held across
                two days on the 11th and 12th October. 100+ papers were
                presented across eight sessions including, for the first time, 2
                Skype sessions, which was the highlight of this conference.
              </div>
            </div>
          </CardContent>
        </Card>
       
      </div>
    </>
  );
}

export default Aboutus;
