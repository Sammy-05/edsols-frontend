import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const NavbarPhone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToAbout = (event) => {
    event.preventDefault();

    const targetElement = document.getElementById("about-section");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
      closeMenu();
    }
  };

  const scrollToServices = (event) => {
    event.preventDefault();

    const targetElement = document.getElementById("services-section");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
      closeMenu();
    }
  };

  return (
    <div className="mx-5 mt-5 grid pb-10 grid-cols-4">
      <div className="col-span-3">
        <div className="flex gap-x-3">
          <img src={logo} alt="" className="h-1/4 w-1/4"/>
          <div className="flex flex-col justify-center">
            <p className="text-edsols font-extrabold">EDSOLS</p>
            <p className="text-[10px] text-subheading">Complete Curriculum Solution</p>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex justify-end">
        <div
          className="w-8 h-8 bg-circles rounded-lg flex items-center justify-center cursor-pointer"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="text-subheading text-xl"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed flex w-full z-20"
          onClick={closeMenu}
        >
          <div className="bg-circles w-3/4 h-3/4 p-8 rounded-md font-bold">
            <p
              className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer mb-4"
              onClick={scrollToTop}
            >
              Home
            </p>
            <p
              className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer mb-4"
              onClick={scrollToAbout}
            >
              Why Choose Edsols
            </p>
            <p
              className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer mb-4"
              onClick={scrollToServices}
            >
              Services
            </p>
            <p
              className="text-subheading hover:underline underline-offset-2 hover:cursor-pointer"
              onClick={scrollToBottom}
            >
              Contact Us
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarPhone;
