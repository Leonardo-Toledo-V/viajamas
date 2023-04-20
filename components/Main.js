import React from "react";
import Text from "./Text";
import Image from "next/image";

export default function Main() {
  return (
    <div className="w-screen h-screen md:bg-[url('/background-desktop.webp')] bg-[url('/background-mobile.webp')] bg-center bg-cover mx-auto">
      <div className="flex flex-col items-center justify-center  lg:flex-row pt-16 lg:pt-44">
        <div>
          <Image
            src="/logo.png"
            width={1}
            height={100}
            className="lg:mr-56 lg:ml-12 w-[120px] lg:w-[200px] xl:w-[230px] mb-8"
          />
        </div>
        <Text />
      </div>
    </div>
)}
