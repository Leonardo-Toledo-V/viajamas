import React from "react";

export default function Text() {
  return (
    <>
      <div className="max-w-[1000px] max-h-[350px] flex flex-col justify-center items-center p-4">
        <div className="w-full font-poppins text-[#EDE2C6] text-7xl">
            <h1>Estamos trabajando</h1>
        </div>
        <div className="w-full font-poppins text-white text-5xl mb-8">
            <h3>para compartir contigo los sitios más increíbles de Cancún y Rivera Maya.</h3>
        </div>
        <div className="w-full font-avenir text-white  text-3xl mt-8">
          <h4>Mientras construimos esta página, puedes comunicarte con nosotros</h4>
        </div>
    </div>
    </>
);
}
