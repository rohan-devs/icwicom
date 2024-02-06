import React from "react";
import { Separator } from "@/components/ui/separator";
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
        <div className="my-[20vh] font-bold text-center text-5xl">
          Advisory Committee
        </div>
        <div className="my-[5vh] grid grid-cols-1 justify-center  ">
          <div className=" ">
            <Card className="">
              <CardHeader>
                <CardTitle className=" overscroll-scroll text-center">
                  SHRI AMRISH R. PATEL
                </CardTitle>
                <CardDescription className=" text-center">
                  Hon. President and Trustee
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
            </Card>
          </div>
        </div>
        <div className="my-[5vh] grid grid-cols-1 justify-center  ">
          <div className=" ">
            <Card className="">
              <CardHeader>
                <CardTitle className=" overscroll-scroll text-center">
                  SHRI BHUPESH R. PATEL
                </CardTitle>
                <CardDescription className=" text-center">
                  Hon. Joint President and Trustee
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
            </Card>
          </div>
        </div>
        <div className="my-[5vh] grid grid-cols-2 justify-center gap-4  ">
          <div className=" ">
            <Card className="">
              <CardHeader>
                <CardTitle className=" overscroll-scroll text-center">
                  SHRI BHARAT M. SANGHVI
                </CardTitle>
                <CardDescription className=" text-center">
                  Hon. Vice President and Trustee
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
            </Card>
          </div>
          <div className=" ">
            <Card className="">
              <CardHeader>
                <CardTitle className=" overscroll-scroll text-center">
                  SHRI CHINTAN A. PATEL
                </CardTitle>
                <CardDescription className=" text-center">
                  Hon. Vice President and Trustee
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
            </Card>
          </div>
          <div className=" ">
            <Card className="">
              <CardHeader>
                <CardTitle className=" overscroll-scroll text-center">
                  SHRI JAYANT P. GANDHI
                </CardTitle>
                <CardDescription className=" text-center">
                  Hon.Secretary
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
            </Card>
          </div>
          <div className=" ">
            <Card className="">
              <CardHeader>
                <CardTitle className=" overscroll-scroll text-center">
                  SHRI HARSHAD H. SHAH
                </CardTitle>
                <CardDescription className=" text-center">
                  Hon. Treasurer
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
            </Card>
          </div>
        </div>
        <div className="my-[5vh] grid grid-cols-3 justify-center gap-4  ">
          <div className=" ">
            <Card className="">
              <CardHeader>
                <CardTitle className=" overscroll-scroll text-center">
                  SHRI SHALIN S. DIVATIA
                </CardTitle>
                <CardDescription className=" text-center">
                  HON. JT. SECRETARY
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
            </Card>
          </div>
          <div className=" ">
            <Card className="">
              <CardHeader>
                <CardTitle className=" overscroll-scroll text-center">
                  SHRI HARIT H. CHITALIA
                </CardTitle>
                <CardDescription className=" text-center">
                  HON. JT. TREASURER
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
            </Card>
          </div>
          <div className=" ">
            <Card className="">
              <CardHeader>
                <CardTitle className=" overscroll-scroll text-center">
                  SHRI JAGDISH B. PARIKH
                </CardTitle>
                <CardDescription className=" text-center">
                  HON. JT. TREASURER
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
            </Card>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className=" overscroll-scroll text-center">
            General Chair - Dr. Hari Vasudevan
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className=" overscroll-scroll text-center">
            Conference Chair - Prof. Amit A. Deshmukh
          </CardTitle>
        </CardHeader>
      </Card>
      <Separator />

      <h1 className="text-5xl font-bold text-center my-7">
        International Advisory Committee
      </h1>
      <Separator />

      <ul className=" text-2xl flex my-11 flex-col text-center gap-4">
        <li>Dr. Zoran Gajic, Rutgers University, USA</li>


        <li>Dr. Banmali Rawat, University of Nevada, Reno, USA</li>
        <li>Dr. Pramod K. B., Researcher Uppsala University,Sweden</li>
        <li>Prof. Suramate Chalermwisutkul, KMUTNB, Bangkok</li>
      </ul>
      <Separator />

      <h1 className="text-5xl font-bold text-center my-7">
        National Advisory Committee
      </h1>
      <Separator />

      <ul className=" text-2  xl flex my-11 flex-col text-center gap-4">
        <li>Prof. R. K. Shevgaonkar, Emeritus Professor, IIT Bombay</li>
        <li>Dr. Nageshwar Rao, Vice Chancellor, IGNOU, India</li>
        <li>Dr. S. N. Merchant, IIT Bombay</li>
        <li>Dr. Girish Kumar, IIT Bombay</li>
        <li>Dr. D. Manjunath, IIT Bombay</li>
        <li>Dr. K. P. Ray, DIAT, Pune</li>
        <li>
          Dr. Debatosh Guha, Institute of Radio Physics and Electronics,
          University of Calcutta
        </li>
        <li>Dr. Asha E. Daniel, CUSAT, Kochi, India</li>
        <li>Dr. Mahesh P. Abegaonkar, IIT Delhi</li>
        <li>Dr. Sukomal Dey, IIT Palakkad</li>
        <li>Dr. Amit Kumar Singh, IIT Patna</li>
      </ul>
    </>
  );
}

export default page;
