import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "./ui/card";
function Footer() {
  return (
    <>
      <div className=" grid md:grid-cols-2 gap-6  ">
        <div className=" flex justify-center flex-col items-center">
          <CardHeader className="text-center">
            <CardTitle className="text-center">Venue</CardTitle>
          </CardHeader>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.00603944307!2d72.83461397575805!3d19.107390982103738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1699952263357!5m2!1sen!2sin"
            height={300}
            width={300}
            loading="lazy"
            className=" rounded-lg hover:rounded-sm hover:scale-105 transition-all duration-100 ease-in-out"
          ></iframe>
        </div>
        <div className=" flex justify-center flex-col items-center">
          <CardHeader className="text-center">
            <CardTitle className="text-center">Information</CardTitle>
          </CardHeader>
          <ul>
            Email:{" "}
            <Link href="mailTo:rohanshah6982@gmail.com">
              djextcicwicom@gmail.com
            </Link>
          </ul>
          <ul>Working Hours:9am-5pm</ul>
        </div>
      </div>
      <div className=" bg-cyan-300 w-full  flex flex-col text-xl my-4 bottom-0 left-0 right-0 text-black text-center items-center p-4">
      Architected by Infotech Team IETE-ISF
        <div className=" flex  justify-center md:gap-4 ">
          <Link href="https://www.linkedin.com/in/rohanshah129/" className=" hover:text-[#793FDF] hover:font-bold">
            Rohan
          </Link>

          <Link href="https://www.linkedin.com/in/vaishnavi-pawar-81180429b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className=" hover:text-[#793FDF] hover:font-bold">Vaishnavi</Link>
          
          <Link href="https://www.linkedin.com/in/guranshbedi/" className=" hover:text-[#793FDF] hover:font-bold">
            Guransh
          </Link>
        </div>
      </div>
      <div className=" text-center">All rights reserved &copy; 2023</div>
    </>
  );
}

export default Footer;
