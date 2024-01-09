// import Landing from "./Landing";
import React, { useState } from "react";
import "./Landing.css";
import Rectangles from "../Rectangles/Rectangles";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(0);

  const handleMouseEnter1 = () => {
    setIsHovered(1);
  };
  const handleMouseEnter2 = () => {
    setIsHovered(2);
  };
  const handleMouseEnter3 = () => {
    setIsHovered(3);
  };

  const handleMouseLeave = () => {
    setIsHovered(0);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  function scrollToAbout(event) {
    event.preventDefault();

    const targetElement = document.getElementById("about-section");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  function scrollToServices(event) {
    event.preventDefault();

    const targetElement = document.getElementById("services-section");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="hidden md:block">
      <div className="absolute mx-20 z-20">
        <div>
          <h1 className="text-5xl font-bold text-heading">
            Crafting Knowledge,
          </h1>
          <h1 className="text-5xl font-bold text-heading">Shaping Futures:</h1>
          <p className="text-xl pt-5">
            Complete custom made curriculum solution provider
          </p>
        </div>

        <div className="wrapper">
          <div className="flex">
            <div
              className="container flex gap-x-10 "
              onMouseLeave={handleMouseLeave}
            >
              <input
                type="radio"
                name="slide"
                id="c1"
                checked={isHovered === 1 ? true : false}
              />
              <label
                htmlFor="c1"
                className="card"
                onMouseEnter={handleMouseEnter1}
              >
                <div className="row">
                  {isHovered === 1 ? (
                    <></>
                  ) : (
                    <div className="icon text-3xl -rotate-90 font-bold">
                      ABOUT US
                    </div>
                  )}
                </div>
              </label>
              {isHovered === 1 && (
                <div
                  className="flex flex-col w-1/4"
                  onMouseEnter={handleMouseEnter1}
                >
                  <h1 className="text-2xl font-bold text-heading">ABOUT US</h1>
                  <div className=" bg-subheading w-44 h-[2px] mt-1"></div>

                  <p className="mt-5">
                    Welcome to Edsols, where learning comes alive with our
                    comprehensive curriculum development that meets global
                    education standards.
                  </p>
                  <a
                    href="#about-section"
                    onClick={scrollToAbout}
                    className="pt-8 text-subheading text-sm font-bold underline underline-offset-2 "
                  >
                    See Details
                  </a>
                </div>
              )}

              <input
                type="radio"
                name="slide"
                id="c2"
                checked={isHovered === 2 ? true : false}
              />
              <label
                htmlFor="c2"
                className="card"
                onMouseEnter={handleMouseEnter2}
              >
                <div className="row">
                  {isHovered === 2 ? (
                    <></>
                  ) : (
                    <div className="icon text-3xl -rotate-90 font-bold">
                      OUR SERVICES
                    </div>
                  )}
                </div>
              </label>
              {isHovered === 2 && (
                <div
                  className="flex flex-col w-1/4"
                  onMouseEnter={handleMouseEnter2}
                >
                  <div className="bg-white">
                    <h1 className="text-2xl font-bold text-heading">
                      OUR SERVICES
                    </h1>
                    <div className=" bg-subheading w-44 h-[2px] mt-1"></div>

                    <p className="mt-5">
                    We provide comprehensive educational solutions that encompass a variety of services. These services include curriculum development, lesson plans, workshops, one-on-one consultations, and tailored solutions aligned with school improvement plans. Whether you opt for one of the listed services or express a specific requirement for your organisation or school, we will customise all our services to meet your unique needs and context.
                    </p>
                  </div>
                  <a
                    href="#services-section"
                    onClick={scrollToServices}
                    className="pt-8 text-subheading text-sm font-bold underline underline-offset-2 "
                  >
                    See Details
                  </a>
                </div>
              )}

              <input
                type="radio"
                name="slide"
                id="c3"
                checked={isHovered === 3 ? true : false}
              />
              <label
                htmlFor="c3"
                className="card"
                onMouseEnter={handleMouseEnter3}
              >
                <div className="row">
                  {isHovered === 3 ? (
                    <></>
                  ) : (
                    <div className="icon text-[27px] -rotate-90 font-bold">
                      WHY CHOOSE EDSOLS
                    </div>
                  )}
                </div>
              </label>
              {isHovered === 3 && (
                <div
                  className="flex flex-col w-1/3"
                  onMouseEnter={handleMouseEnter3}
                >
                  <div className="bg-white">
                    <h1 className="text-2xl font-bold text-heading">
                      WHY CHOOSE EDSOLS
                    </h1>
                    <div className=" bg-subheading w-44 h-[2px] mt-1"></div>

                    <p className="mt-5">
                      Opt for our curriculum expertise, where a dedicated team
                      merges skill with innovation to craft inspiring and
                      engaging educational paths for learners.
                    </p>
                  </div>
                  <a
                    href="#about-section"
                    onClick={scrollToAbout}
                    className="pt-8 text-subheading text-sm font-bold underline underline-offset-2 "
                  >
                    See Details
                  </a>
                </div>
              )}
            </div>

            {isHovered === 0 && (
              <div className="ml-20 flex flex-col">
                <p className="w-3/4 text-xl bg-white">
                  Welcome to Edsols, where learning comes alive with our
                  comprehensive curriculum development that meets global
                  education standards.
                </p>
                <div className=" bg-subheading w-20 h-1 mt-3"></div>
                <div className="pt-8 text-white">
                  <button
                    onClick={scrollToBottom}
                    className="bg-secondary px-5 py-2 rounded-lg font-bold"
                  >
                    CONTACT US
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Rectangles />
    </div>
  );
};

export default Landing;
