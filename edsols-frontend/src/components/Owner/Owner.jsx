import { Founder } from "../../data/data.js";
import owner from "../../assets/owner.jpg";
const About = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row pt-16 gap-x-5 md:gap-x-20 md:h-[115vh] ">
        <div className="flex flex-col justify-center md:w-1/3">
          <div className="absolute rounded-r-[105px] border-t-4 border-b-4 border-r-4 border-solid border-secondary md:w-[26%] md:h-[70%] w-[60%] h-[41%]"></div>
          <div className="absolute rounded-r-[105px] border-t-4 border-b-4 border-r-4 border-solid border-secondary md:w-[22%] md:h-[85%] w-[50%] h-[48%]"></div>

          <div className="absolute w-[40%] h-[25%] md:w-[15%] md:h-[30%] rounded-r-full bg-subheading mb-16 md:mb-24"></div>
          <div className="mt-10 md:mt-0 flex scale-[60%] md:scale-100 md:h-full md:items-end z-20 origin-left ml-20">
            <img src={owner} alt="" className="" />
          </div>
        </div>

        <div className="mr-5 md:mr-20 flex flex-col md:w-2/3 justify-end">
          <div className="ml-5 md:ml-0">
            <h1 className="font-bold md:text-4xl text-heading md:pb-1">About the</h1>
            <h1 className="font-bold md:text-4xl text-subheading pt-1">Founder</h1>
            <div className=" bg-subheading w-32 md:h-1 h-[2px] mt-3"></div>
          </div>
          <div className="py-2 md:py-7 ml-5 md:ml-0">
            <h3 className="text-heading font-semibold text-sm md:text-xl">Nida Nayyar</h3>
          </div>
          <div className="ml-5 md:ml-0">
            <ul className="list-disc pl-6 text-subheading">
              <div className="flex flex-row items-center text-[12px] md:text-lg">
                <li className="text-xl md:text-4xl"></li>
                <p className="py-2 text-text">
                  MSc. Industrial, and Organizational Psychology
                </p>
              </div>
              <div className="flex flex-row items-center text-[12px] md:text-lg">
                <li className="text-xl md:text-4xl"></li>
                <p className="py-2 text-text">Bsc. Kinnaird College</p>
              </div>
              <div className="flex flex-row items-center text-[12px] md:text-lg">
                <li className="text-xl md:text-4xl"></li>
                <p className="py-2 text-text">LlB. University of London</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-5 md:mx-20 text-text pt-5 md:pt-10 text-justify">
        {Founder.map((item) => {
          if (item.id === 1) {
            const words = item.para.split(" ");
            const firstTwoWords = words.slice(0, 2).join(" ");
            const restOfWords = words.slice(2).join(" ");

            return (
              <p className="text-xs md:text-lg pb-2 md:pb-4">
                <span className="text-heading font-bold">{firstTwoWords}</span>{" "}
                {restOfWords}
              </p>
            );
          } else {
            return <p className="text-xs md:text-lg pb-2 md:pb-4">{item.para}</p>;
          }
        })}
      </div>
    </div>
  );
};
export default About;
