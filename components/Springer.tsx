import React from "react";
import { Card, CardContent,CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import Image from "next/image";
function Springer() {
  return (
    <>

      <Card className=" text-2xl m-3 ">
        <CardHeader>
            <h1 className="text-center underline underline-offset-4 text-3xl">
      
            </h1>
        </CardHeader>
        <CardContent>
          <p>
            All accepted and presented papers at the conference will be sent for
            publication in Springer series on Lecture Notes in Electrical Engineering (LNEE)
          </p>
          <div className=" flex justify-center">

        
          <Image className=""
            src={"https://www.springer.com/public/images/springer-logo.svg"}
            alt="springer-logo"
            width={500}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
          ></Image>
            </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Springer;
