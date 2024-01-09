import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Navbar = () => {
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
    
    <div className="z-0 mx-10 grid pb-10 justify-center items-center grid-cols-8 ">
      <div className="col-span-1 flex">

        {/* <div className="w-48 h-8 bg-circles rounded-3xl">
          <div className="flex justify-start">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-xl text-subheading opacity-80 absolute pt-[6px] pl-2"
            />
          </div>
          <div className="flex justify-end">
            <input
              placeholder="Search"
              className="w-40 h-8 rounded-3xl bg-circles text-sm pl-2 text-subheading block focus:outline-none placeholder:text-text"
            />
          </div>
        </div> */}
      </div>
      <div className="col-span-4 flex gap-x-24  text-subheading font-bold items-center justify-end">
        <p className="hover:underline underline-offset-2 hover:cursor-pointer" onClick={scrollToTop}>Home</p>
        <p className="hover:underline underline-offset-2 hover:cursor-pointer" onClick={scrollToAbout}>Why Choose Edsols</p>
        <p className="hover:underline underline-offset-2 hover:cursor-pointer" onClick={scrollToServices}>Services</p>
        <p className="hover:underline underline-offset-2 hover:cursor-pointer" onClick={scrollToBottom}>Contact Us</p>
      </div>
      <div className="col-span-3">
        <div className="flex gap-x-3 justify-end">
          <div className="flex flex-col items-end justify-center">
            <p className="text-3xl text-edsols font-extrabold">EDSOLS</p>
            <p className="text-subheading">Complete Curriculum Solution</p>
          </div>
          <img src={logo} alt="" />
        </div>
        {/* <div className="mt-24 absolute rounded-l-[105px] border-t-4 border-b-4 border-l-4 border-solid border-secondary w-full h-3/4"></div> */}
      </div>
    </div>
  );
};

export default Navbar;
