import { ArrowLongDownIcon, ArrowLongUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Home = ({ scrollToSection, currentSection, sections }) => {
  return (
    <>
      <section
        ref={(el) => (sections.current[0] = el)}
        className="home h-screen relative p-5"
        id="home"
      >
        <div>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className="px-20 md:px-0 mx-auto py-28 flex flex-col justify-center h-screen items-start md:items-center md:text-center">
          <h1 className="font-semibold text-4xl md:text-3xl sm:text-2xl xsm:text-xl tracking-widest leading-tight mb-3">
            nice having you here !
            <div className="mt-3">
              <span className="font-thin text-xl mr-1">hi i'm,</span>
              <span className=" text-primary text-3xl md:text-2xl sm:text-xl xsm:text-lg">
                ebrahim nasser.
              </span>
            </div>
          </h1>
          <p className=" w-2/5 lg:w-[65%] md:w-[70%] sm:w-[80%] xsm:w-[100%] normal-case font-sans font-light leading-7 text-lg md:text-sm sm:text-xs md:leading-6 sm:leading-5">
            Front-end developer with a focus on building visually stunning and
            user-friendly websites. Driven to deliver engaging user experiences
            and a strong attention to detail in all projects.
          </p>
          <button className="relative w-fit mt-3">
            <a
              href="/src/assets/ebrahim-nasser.pdf"
              download
              className=" text-primary button relative md:text-base sm:text-sm w-[180px]"
            >
              download cv
            </a>
            <div className=" absolute w-5 h-5 -top-[10px] -left-2 bg-bg-cart-color rounded-full"></div>
            <div className=" absolute w-5 h-5 top-6 -left-2 bg-bg-cart-color rounded-full"></div>
            <div className=" absolute w-5 h-5 top-6 -right-2 bg-bg-cart-color rounded-full"></div>
            <div className=" absolute w-5 h-5 -top-[10px] -right-2 bg-bg-cart-color rounded-full"></div>
          </button>
        </div>
        <div className=" fixed flex items-center justify-between gap-2 flex-col right-1 top-[50%]">
          <ArrowLongUpIcon
            onClick={() => scrollToSection(currentSection - 1)}
            className="w-7 cursor-pointer hover:scale-110 transition-all"
          />
          <div className="h-1.5 w-1.5 border border-primary border-solid rotate-45"></div>
          <ArrowLongDownIcon
            className="w-7 cursor-pointer hover:scale-110 transition-all"
            onClick={() => scrollToSection(currentSection + 1)}
          />
        </div>
        <div className=" fixed left-5 md:left-1 bottom-0">
          <ul className=" flex flex-col gap-7 after:content-[''] after:w-[1px] after:h-52 after:bg-primary after:left-2 justify-center items-center ">
            <li>
              <a href="https://github.com/EbrahimNasserr" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className=" text-xl md:text-base sm:text-sm active:scale-110 duration-1000 transition-all"
                  title="githup"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Ebrahim.Nasserr"
                target="_blank"
                title="facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=" text-xl md:text-base sm:text-sm active:scale-110 duration-1000 transition-all"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ebrahim_nasserr/"
                target="_blank"
                title="instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" text-xl md:text-base sm:text-sm active:scale-110 duration-1000 transition-all"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ebrahim-nasser/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className=" text-xl md:text-base sm:text-sm active:scale-110 duration-1000 transition-all"
                  title="linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=2001152153667"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className=" text-xl md:text-base sm:text-sm active:scale-110 duration-1000 transition-all"
                  title="whatsapp"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
