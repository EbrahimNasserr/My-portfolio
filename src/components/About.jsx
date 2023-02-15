import React from "react";
import { aboutImg } from "../Data/Data";

const About = ({ sections }) => {
  return (
    <>
      <section ref={(el) => (sections.current[1] = el)} id="about">
        <h2 className="main-heading text-4xl sm:after:w-[150px] md:text-3xl sm:text-xl xsm:text-xl">
          about me
        </h2>
        <div className=" custom-grid-columns gap-12 md:block">
          <div className="relative">
            <p className=" text-base leading-7 font-light normal-case mb-2">
              I'm front-end developer, I have a passion for creating
              user-friendly and visually appealing websites. My skills include
              HTML, CSS, JavaScript, Bootstrap, TailwindCSS, React, Redux, and
              Redux Toolkit, allowing me to create dynamic and responsive user
              interfaces.
            </p>
            <p className=" text-base leading-7 font-light normal-case mb-2">
              I am also knowledgeable in data structures and algorithms,
              allowing me to make informed decisions when it comes to website
              performance optimization.
            </p>
            <p className=" text-base leading-7 font-light normal-case mb-2">
              My goal is to provide clients with high-quality, accessible, and
              visually appealing websites that meet their needs and exceed their
              expectations.
            </p>
            <p className=" text-base leading-7 font-light normal-case mb-2">
              Here are a few technologies I've been working with recently :
            </p>
            <ul className=" flex items-center gap-24 mb-3">
              <div className=" ml-3">
                <li className="relative text-sm font-extralight mb-2 before:content-['▹'] before:absolute before:-left-4 before:text-primary before:text-sm">
                  html
                </li>
                <li className="relative text-sm font-extralight mb-2 before:content-['▹'] before:absolute before:-left-4 before:text-primary before:text-sm">
                  css
                </li>
                <li className="relative text-sm font-extralight mb-2 before:content-['▹'] before:absolute before:-left-4 before:text-primary before:text-sm">
                  JavaScript
                </li>
                <li className="relative text-sm font-extralight mb-2 before:content-['▹'] before:absolute before:-left-4 before:text-primary before:text-sm">
                  react
                </li>
              </div>
              <div>
                <li className="relative text-sm font-extralight mb-2 before:content-['▹'] before:absolute before:-left-4 before:text-primary before:text-sm">
                  redux
                </li>
                <li className="relative text-sm font-extralight mb-2 before:content-['▹'] before:absolute before:-left-4 before:text-primary before:text-sm">
                  redux-toolkit
                </li>
                <li className="relative text-sm font-extralight mb-2 before:content-['▹'] before:absolute before:-left-4 before:text-primary before:text-sm">
                  Bootstrap
                </li>
                <li className="relative text-sm font-extralight mb-3 before:content-['▹'] before:absolute before:-left-4 before:text-primary before:text-sm">
                  TailwindCSS
                </li>
              </div>
            </ul>
            <div className=" md:w-full md:flex md:justify-center md:items-center">
              <div className="relative w-fit">
                <a
                  href="https://api.whatsapp.com/send?phone=2001152153667"
                  target="_blank"
                  className=" text-primary button relative md:text-base"
                >
                  contact me
                </a>
                <div className=" absolute w-5 h-5 -top-[10px] -left-2 bg-bg-cart-color rounded-full"></div>
                <div className=" absolute w-5 h-5 top-6 -left-2 bg-bg-cart-color rounded-full"></div>
                <div className=" absolute w-5 h-5 top-6 -right-2 bg-bg-cart-color rounded-full"></div>
                <div className=" absolute w-5 h-5 -top-[10px] -right-2 bg-bg-cart-color rounded-full"></div>
              </div>
            </div>
          </div>
          <div className=" w-[350px] h-[350px] lg:w-[250px] lg:h-[250px] md:w-56 md:h-56 md:mx-auto md:mt-6 relative">
            <div className="img-border rounded"></div>
            <img
              src={aboutImg}
              className="w-full h-full bg-cover object-cover bg-center rounded"
              alt="about/img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
