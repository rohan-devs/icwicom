import data from "../alldata/patron.json";
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
      <div className="m-6">
        <div className="my-[10vh]">patrons</div>
        <div className="my-[10vh] grid md:grid-cols-4 grid-cols-2 overflow-hidden gap-4  ">
          {data.map((patron, index) => {
            return (
              <div key={patron.id} className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>{patron.name}</CardTitle>
                    <CardDescription>{patron.description}</CardDescription>
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
