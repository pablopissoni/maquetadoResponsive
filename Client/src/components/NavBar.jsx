import React from "react";
import burgerMenu from "../assets/images/icon-menu.svg";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  //*---------------------------------------------------
  return (
    <>
      <ul
        className=" hidden 
      sm:flex text-[18px] sm:w-[438px]
      sm:place-content-around sm:text-[16px]
      sm:items-center"
      >
        <li>
          <a className="hover:text-SoftRed" href="">Home</a>
        </li>
        <li>
          <a className="hover:text-SoftRed" href="">New</a>
        </li>
        <li>
          <a className="hover:text-SoftRed" href="">Popular</a>
        </li>
        <li>
          <a className="hover:text-SoftRed" href="">Trending</a>
        </li>
        <li>
          <a className="hover:text-SoftRed" href="">Categories</a>
        </li>
      </ul>
      <img
        src={burgerMenu}
        alt="Menu Hamburgesa"
        className="w-10 h-4 cursor-pointer sm:hidden"
      />
    </>
  );
};
