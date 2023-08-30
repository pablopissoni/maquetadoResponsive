import React from "react";
import burgerMenu from "../assets/images/icon-menu.svg";
import closeButton from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //*---------------------------------------------------
  return (
    <>
      {!isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/30  backdrop-blur-sm "
          onClick={handleClick}
        />
      )}

      <ul
        className={`${
          isOpen ? "hidden" : "" 
        } font-inter underline underline-offset-4 absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}
      >
        <li
          className={`${
            isOpen ? "hidden" : ""
          } cursor-pointer sm:hidden  flex place-content-end`}
        >
          <img
            className="w-8 h-8 mb-[87px]"
            src={closeButton}
            onClick={handleClick}
            alt=""
          />
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed sm:text-4" href="#">
            Home
          </a>
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed" href="#">
            New
          </a>
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Popular
          </a>
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Trending
          </a>
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Categories
          </a>
        </li>
      </ul>
      <img
        className={`${
          isOpen ? "" : "hidden"
        } w-10 h-4 cursor-pointer sm:hidden`}
        src={burgerMenu}
        onClick={handleClick}
        alt=""
      />
    </>
  );
};
