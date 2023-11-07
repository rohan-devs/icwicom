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
    patrons
      <div className="my-[10vh] grid grid-cols-4 overflow-auto gap-5">
        
        {data.map((patron, index) => {
          return (
            <div
              className="container md:leading-3 leading-[1.5px]"
              key={patron.id}
            >
              <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{patron.name}</CardTitle>
        <CardDescription>{patron.description}</CardDescription>
      </CardHeader>
      <CardContent>
       
      </CardContent>
     
    </Card>


            </div>
          );
        })}
      </div>
    </>
  );
}

export default page;
