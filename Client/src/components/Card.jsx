import React from "react";
import cpu from "../assets/images/image-retro-pcs.jpg";

export const Card = () => {
  return (
    <article className=" flex md:flex-grow md:w-[343px] mb-4 bg-slate-100">
      <div className="w-[100px] flex-none">
        <img  src={cpu} alt="computadora" />
      </div>

      <div className="pl-6">
        <p className="mb-[4px] text-3xl font-bold text-GrayishBlue">01</p>
        <h2 className="mb-[2px] cursor-pointer font-bold hover:text-SoftRed">
          Revivien Retro PCs
        </h2>
        <p className="text-[16px] font-sans text-DarkGrayishBlue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          sunt?
        </p>
      </div>

    </article>
  );
};
