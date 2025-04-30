import data from "../alldata/oc.json";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function page() {
  return (
    <>
      <div className="m-2">
        <div className="my-[20vh] font-bold text-center text-5xl">Organizing Committee</div>
        <div className="my-[5vh] grid md:grid-cols-4 grid-cols-1 overflow-hidden gap-4  ">
          {data.map((patron, index) => {
            return (
              <div key={patron.id} className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle className=" overscroll-scroll">{patron.name}</CardTitle>
                 
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default page;
