import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { project1, project2, project3, project4 } from "../../Data/Data";
import "./WorkSection.css";

function MyWork({ sections }) {
  return (
    <>
      <section ref={(el) => (sections.current[3] = el)} id="my-work">
        <h2 className="main-heading text-4xl sm:after:w-[150px] md:text-3xl sm:text-xl xsm:text-xl">
          my work
        </h2>
        <div className="flex flex-col gap-28 justify-center items-center">
          <div className="projectOne">
            <div className="content">
              <h2 className=" text-2xl lg:text-xl md:text-lg sm:text-base mb-3">
                Nike Store Commerce
              </h2>
              <p className=" bg-secondry opacity-80 p-3 drop-shadow-2xl shadow-black font-sans leading-5 font-normal mb-5 rounded text-sm">
                E-commerce website. I have designed a clean, modern, and
                intuitive interface that makes it easy for customers to browse,
                Responsive design that adjusts to any device, The shopping cart
                system is integrated and easy to use. you can add, remove and
                clear the shopping cart.
              </p>
              <ul className=" flex gap-2 items-center justify-end mb-5 text-sm sm:text-xs">
                <li className=" text-primary font-light">html</li>
                <li className=" text-primary font-light">css</li>
                <li className=" text-primary font-light">tailwind</li>
                <li className=" text-primary font-light">react</li>
                <li className=" text-primary font-light">javascript</li>
                <li className=" text-primary font-light">reduxToolkit</li>
                <li className=" text-primary font-light">api</li>
              </ul>
              <div className=" mt-2">
                <a
                  href="https://github.com/EbrahimNasserr/Nike-Store-Commerce"
                  target="_blank"
                  title="githup"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon-style" />
                </a>
                <a
                  href="https://nike-store-commerce-nu.vercel.app/"
                  target="_blank"
                  className=" ml-5"
                  title="live demo"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="icon-style"
                  />
                </a>
              </div>
            </div>
            <div className="image">
              <a
                href="https://nike-store-commerce-nu.vercel.app/"
                target="_blank"
              >
                <img src={project1} alt="project1/png" />
              </a>
            </div>
          </div>
          <div className="projectTwo">
            <div className="content">
              <h2 className=" text-2xl lg:text-xl md:text-lg sm:text-base mb-3">
                Portfolio
              </h2>
              <p className=" bg-secondry opacity-80 p-3 drop-shadow-2xl shadow-black font-sans leading-5 font-normal mb-5 rounded text-sm">
                A portfolio for a designer, Here I put all my animation skills
                in the website and make it responsive with all screens.
              </p>
              <ul className=" flex gap-2 items-center justify-start mb-5 texsmse sm:text-xs">
                <li className=" text-primary font-light">html</li>
                <li className=" text-primary font-light">css</li>
                <li className=" text-primary font-light">javascript</li>
                <li className=" text-primary font-light">swiper.js</li>
              </ul>
              <div className="mt-2">
                <a
                  href="https://github.com/EbrahimNasserr/Mohamed-Abd-Elnaby"
                  target="_blank"
                  title="githup"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon-style" />
                </a>
                <a
                  href="https://ebrahimnasserr.github.io/Mohamed-Abd-Elnaby/"
                  target="_blank"
                  className="ml-5"
                  title="live demo"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="icon-style"
                  />
                </a>
              </div>
            </div>
            <div className="image">
              <a
                href="https://ebrahimnasserr.github.io/Mohamed-Abd-Elnaby/"
                target="_blank"
              >
                <img src={project2} alt="project2/png" />
              </a>
            </div>
          </div>
          <div className="projectThree">
            <div className="content">
              <h2 className=" text-2xl lg:text-xl md:text-lg sm:text-base mb-3">
                Tour And Travel
              </h2>
              <p className=" bg-secondry opacity-80 p-3 drop-shadow-2xl shadow-black font-sans leading-5 font-normal mb-5 rounded text-sm">
                A simple site that contains a container for videos that you can
                switch between them, Focus on ui and the user interface for easy
                handling of the site.
              </p>
              <ul className=" flex gap-2 items-center justify-end mb-5 text-sm sm:text-xs">
                <li className=" text-primary font-light">html</li>
                <li className=" text-primary font-light">css</li>
                <li className=" text-primary font-light">swiper.js</li>
                <li className=" text-primary font-light">javascript</li>
                <li className=" text-primary font-light">aos library</li>
              </ul>
              <div className=" mt-2">
                <a
                  href="https://github.com/EbrahimNasserr/Tour-And-Travel"
                  target="_blank"
                  title="githup"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon-style" />
                </a>
                <a
                  href="https://ebrahimnasserr.github.io/Tour-And-Travel/"
                  target="_blank"
                  className=" ml-5"
                  title="live demo"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="icon-style"
                  />
                </a>
              </div>
            </div>
            <div className="image">
              <a
                href="https://ebrahimnasserr.github.io/Tour-And-Travel/"
                target="_blank"
              >
                <img src={project3} alt="project3/png" />
              </a>
            </div>
          </div>
          <div className="projectTwo">
            <div className="content">
              <h2 className=" text-2xl lg:text-xl md:text-lg sm:text-base mb-3">
                Food Restaurant
              </h2>
              <p className=" bg-secondry opacity-80 p-3 drop-shadow-2xl shadow-black font-sans leading-5 font-normal mb-5 rounded text-sm">
                A simple website to practice on ui/ux design and make it
                responsive with all screens.
              </p>
              <ul className=" flex gap-2 items-center justify-start mb-5 texsmse sm:text-xs">
                <li className=" text-primary font-light">html</li>
                <li className=" text-primary font-light">css</li>
                <li className=" text-primary font-light">javascript</li>
                <li className=" text-primary font-light">aos library</li>
              </ul>
              <div className="mt-2">
                <a
                  href="https://github.com/EbrahimNasserr/Food_Restaurant"
                  target="_blank"
                  title="githup"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon-style" />
                </a>
                <a
                  href="https://ebrahimnasserr.github.io/Food_Restaurant/"
                  target="_blank"
                  className="ml-5"
                  title="live demo"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="icon-style"
                  />
                </a>
              </div>
            </div>
            <div className="image">
              <a
                href="https://ebrahimnasserr.github.io/Food_Restaurant/"
                target="_blank"
              >
                <img src={project4} alt="project2/png" />
              </a>
            </div>
          </div>
          <div className="relative w-fit">
            <a
              href="https://github.com/EbrahimNasserr?tab=repositories"
              className=" text-primary button relative md:text-base sm:text-sm w-[180px]"
            >
              see all my projects
            </a>
            <div className=" absolute w-5 h-5 -top-[10px] -left-2 bg-bg-cart-color rounded-full"></div>
            <div className=" absolute w-5 h-5 top-6 -left-2 bg-bg-cart-color rounded-full"></div>
            <div className=" absolute w-5 h-5 top-6 -right-2 bg-bg-cart-color rounded-full"></div>
            <div className=" absolute w-5 h-5 -top-[10px] -right-2 bg-bg-cart-color rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyWork;
