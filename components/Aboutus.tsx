import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Aboutus() {
  return (
    <>
      <Card className="m-5">
        <CardHeader>
          <CardTitle className=" underline underline-offset-4 text-center">
            About us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className=" grid grid-cols-2 gap-3">
            <div>picture here</div>
            <div>details here</div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Aboutus;
