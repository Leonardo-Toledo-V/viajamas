import React from "react";
import Icons from "./Icons";
import Ad from "./Ad";

export default function Text() {
  return (
    <>
      <div className="max-w-[1000px] max-h-[350px] flex flex-col p-2 leading-5 sm:leading-none mx-8 md:m-0">
        <div className="w-full font-poppins text-[#EDE2C6] text-[1.4rem] sm:text-[1.8rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[5.5rem] text-center lg:text-left">
            <h1>Estamos trabajando</h1>
        </div>
        <div className="w-full font-poppins text-white text-[1rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[2rem] xl:text-5xl md:mb-6 xl:mb-8 text-center lg:text-left">
            <h3>para compartir contigo los sitios más increíbles en Cancún y Rivera Maya.</h3>
        </div>
        <div className="w-full font-avenir text-white text-sm sm:text-lg md:text-xl leading-none text-center lg:text-left xl:text-[1.6rem] mt-10">
          <h4>Mientras construimos esta página, puedes comunicarte con nosotros</h4>
        </div>
        <div className="w-full flex justify-center items-center lg:justify-start">
          <Icons/>
        </div>
        <Ad/>
    </div>
    </>
)}
