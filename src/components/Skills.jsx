import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = ({ sections }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <section
        className="relative"
        id="skills"
        ref={(el) => (sections.current[2] = el)}
      >
        <h2 className="main-heading text-4xl sm:after:w-[150px] md:text-3xl sm:text-xl xsm:text-xl">
          skills
        </h2>
        <ul className=" relative flex-col w-full h-[75rem] justify-between flex">
          <li
            data-aos="fade-right"
            className=" text-xl lg:text-lg md:text-base sm:text-sm absolute font-light md:w-1/2 md:left-0 bg-black w-1/4 left-1/4 rounded-sm p-2 border-l-2 border-solid border-l-primary"
          >
            html
          </li>
          <li
            data-aos="fade-left"
            className=" text-xl lg:text-lg md:text-base sm:text-sm absolute left-1/2 text-end w-1/4 font-light md:w-1/2 bg-black rounded-sm p-2 border-r-2 top-40 border-solid border-r-primary"
          >
            css
          </li>
          <li
            data-aos="fade-right"
            className=" text-xl lg:text-lg md:text-base sm:text-sm absolute font-light md:w-1/2 md:left-0 bg-black w-1/4 left-1/4 top-80 rounded-sm p-2 border-l-2 border-solid border-l-primary"
          >
            JavaScript
          </li>
          <li
            data-aos="fade-left"
            className=" text-xl lg:text-lg md:text-base sm:text-sm absolute left-1/2 text-end w-1/4 font-light md:w-1/2 bg-black rounded-sm p-2 border-r-2 top-[30rem] border-solid border-r-primary"
          >
            react
          </li>
          <li
            data-aos="fade-right"
            className=" text-xl lg:text-lg md:text-base sm:text-sm absolute left-1/4 w-1/4 font-light md:w-1/2 md:left-0 bg-black rounded-sm p-2 border-l-2 top-[40rem] border-solid border-l-primary"
          >
            TailwindCSS
          </li>
          <li
            data-aos="fade-left"
            className=" text-xl lg:text-lg md:text-base sm:text-sm absolute font-light md:w-1/2 text-end bg-black w-1/4 left-1/2 top-[50rem] rounded-sm p-2 border-r-2 border-solid border-r-primary"
          >
            redux
          </li>
          <li
            data-aos="fade-right"
            className=" text-xl lg:text-lg md:text-base sm:text-sm absolute font-light md:w-1/2 md:left-0 bg-black w-1/4 left-1/4 top-[60rem] rounded-sm p-2 border-l-2 border-solid border-l-primary"
          >
            redux-Toolkit
          </li>
          <li
            data-aos="fade-left"
            className=" text-xl lg:text-lg md:text-base sm:text-sm absolute left-1/2 text-end w-1/4 font-light md:w-1/2 bg-black rounded-sm p-2 border-r-2 top-[70rem] border-solid border-r-primary"
          >
            bootstrap
          </li>
          <div className=" absolute left-1/2 w-[1px] h-[73rem] bg-primary"></div>
        </ul>
      </section>
    </>
  );
};

export default Skills;
