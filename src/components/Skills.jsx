import React from "react";
import TextSphere from "./TextSphere/TextSphere";

const Skills = ({ sections }) => {
  return (
    <>
      <section id="skills" ref={(el) => (sections.current[2] = el)}>
        <h2 className="main-heading text-4xl sm:after:w-[150px] md:text-3xl sm:text-xl xsm:text-xl">
          skills
        </h2>
        <div className=" flex items-center justify-between lg:flex-col lg:text-center relative">
          <ul className=" flex-col basis-1/3 items-start gap-8 justify-start flex lg:w-full lg:justify-center lg:items-center">
            <li className=" text-xl font-light bg-black w-full rounded-sm p-2 border-l-2 border-solid border-l-primary">
              html
            </li>
            <li className=" text-xl font-light bg-black w-full rounded-sm p-2 border-l-2 border-solid border-l-primary">
              css
            </li>
            <li className=" text-xl font-light bg-black w-full rounded-sm p-2 border-l-2 border-solid border-l-primary">
              JavaScript
            </li>
            <li className=" font-light bg-black w-full rounded-sm text-xl p-2 border-l-2 border-solid border-l-primary">
              react
            </li>
            <li className=" font-light bg-black w-full rounded-sm text-xl p-2 border-l-2 border-solid border-l-primary">
              redux
            </li>
            <li className=" font-light bg-black w-full rounded-sm text-xl p-2 border-l-2 border-solid border-l-primary">
              redux-Toolkit
            </li>
            <li className=" font-light bg-black w-full rounded-sm text-xl p-2 border-l-2 border-solid border-l-primary">
              TailwindCSS
            </li>
            <li className=" font-light bg-black w-full rounded-sm text-xl p-2 border-l-2 border-solid border-l-primary">
              bootstrap
            </li>
          </ul>
          <div className=" basis-3/5 md:hidden">
            <TextSphere />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
