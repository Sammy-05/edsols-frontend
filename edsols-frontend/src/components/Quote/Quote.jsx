import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Quote = () => {
  return (
    <div className="mx-[28%] flex gap-x-5 pt-16">
        <div className="absolute">

      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="text-7xl text-circles opacity-80 absolute"
      />
        </div>
      <div className="text-xl text-heading font-bold pt-5 z-10 pl-6 text-justify">
        <p>
          Our team includes Special Education Needs (SEN) experts who offer
          guidance to teachers in identifying signs that may necessitate
          intervention for students. Additionally, if a school aims to adopt an
          inclusive curriculum, we can provide tailored solutions to meet those
          needs.
        </p>
      </div>
      <div className="flex justify-end items-end align-bottom">
      <FontAwesomeIcon
        icon={faQuoteRight}
        className="text-7xl text-circles opacity-80 absolute"
      />

      </div>
    </div>
  );
};

export default Quote;
