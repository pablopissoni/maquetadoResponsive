import React from "react";

export const Card = ({infoCards}) => {
  const {img,number,title,description} = infoCards;

  //*---------------------------------------
  return (
    <article className=" flex md:flex-grow md:w-[343px] mb-4 bg-slate-100">
      <div className="w-[100px] flex-none">
        <img  src={img} alt="computadora" />
      </div>

      <div className="pl-6">
        <p className="mb-[4px] text-3xl font-bold text-GrayishBlue">{number}</p>
        <h2 className="mb-[2px] cursor-pointer font-bold hover:text-SoftRed">
          {title}
        </h2>
        <p className="text-[16px] font-sans text-DarkGrayishBlue">
          {description}
        </p>
      </div>

    </article>
  );
};
