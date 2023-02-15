import React, { useState } from "react";
import { logo } from "../Data/Data";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=" z-50 main-container flex items-center h-12 justify-between bg-bg-cart-color border-b-2 border-header-border-color fixed top-0 left-0 right-0">
      <img className=" h-16 md:h-12" src={logo} alt="logo/png" />
      <nav className=" flex items-center justify-between gap-6 md:hidden ">
        <a className=" text-sm font-light" href="#home">
          home
        </a>
        <a className=" text-sm font-light" href="#about">
          about
        </a>
        <a className=" text-sm font-light" href="#skills">
          skills
        </a>
        <a className=" text-sm font-light" href="#my-work">
          my work
        </a>
        <a className=" text-sm font-light" href="#contact">
          contact
        </a>
      </nav>
      <div className="flex">
        <div className="flex items-center flex-col  justify-center absolute right-[10%] sm:right-[15%] sm:bottom-[2px]">
          <div className="flex items-center justify-center gap-1">
            <div className=" w-6 h-[0.5px] bg-white"></div>
            <a href="tel:+0201152153667" className=" text-[0px]">
              <FontAwesomeIcon icon={faPhoneVolume} className=" text-sm" />
            </a>
            <div className=" w-6 h-[0.5px] bg-white"></div>
          </div>
          <div className=" text-primary text-xs mt-1">011 5215 3667</div>
        </div>
        <button onClick={() => setOpen(!open)}>
          <FontAwesomeIcon
            icon={faBars}
            className="icon-style active:rotate-180"
          />
        </button>
      </div>
      <Cart open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
