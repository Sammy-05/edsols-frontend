import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="z-0 mx-20 grid pb-10 mt-12 justify-center items-center grid-cols-7">
      <div className="col-span-1 flex">

        <div className="w-48 h-8 bg-circles rounded-3xl">
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
        </div>
      </div>
      <div className="col-span-4 flex gap-x-16  text-subheading font-bold items-center justify-center">
        <p>Home</p>
        <p>About Us</p>
        <p>Services</p>
        <p>Contact Us</p>
      </div>
      <div className="col-span-2">
        <div className="flex gap-x-3 ">
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
