import React from "react";
import burgerMenu from "../assets/images/icon-menu.svg";
import closeButton from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //*---------------------------------------------------
  return (
    <>
      <ul
        className={`${isOpen ? "hidden" : ""} 
        bg-gray-200 absolute top-0 right-0  w-[256px] p-[24px] h-full
          sm:flex text-[18px] sm:w-[438px] sm:p-0 sm:h-auto
          sm:place-content-around sm:text-[16px] sm:relative 
          sm:items-center`}
      >
        <li
          className={`
            ${isOpen ? "hidden" : ""}
             cursor-pointer sm:hidden  flex place-content-end`}
        >
          <img
            className="w-8 h-8 mb-[87px]"
            src={closeButton}
            onClick={handleClick}
            alt=""
          />
        </li>

        <li>
          <a className="hover:text-SoftRed" href="">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-SoftRed" href="">
            New
          </a>
        </li>
        <li>
          <a className="hover:text-SoftRed" href="">
            Popular
          </a>
        </li>
        <li>
          <a className="hover:text-SoftRed" href="">
            Trending
          </a>
        </li>
        <li>
          <a className="hover:text-SoftRed" href="">
            Categories
          </a>
        </li>
      </ul>
      <img
        src={burgerMenu}
        alt="Menu Hamburgesa"
        className={`w-10 h-4 cursor-pointer ${
          isOpen ? "" : "hidden"
        } sm:hidden`}
        onClick={handleClick}
      />
    </>
  );
};
