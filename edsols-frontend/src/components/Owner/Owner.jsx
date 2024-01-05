import { Founder } from "../../data/data.js";
import owner from "../../assets/owner.jpg";
const About = () => {
  return (
    <div className="">
      <div className="flex pt-16 gap-x-20 h-[115vh] ">
        <div className="flex flex-col justify-center w-1/3">
          <div className="absolute rounded-r-[105px] border-t-4 border-b-4 border-r-4 border-solid border-secondary w-[26%] h-[70%]"></div>
          <div className="absolute rounded-r-[105px] border-t-4 border-b-4 border-r-4 border-solid border-secondary w-[22%] h-[85%]"></div>

          <div className="flex flex-row items-center pb-24">
            <div className="absolute w-[15%] h-[30%] rounded-r-full bg-subheading "></div>
          </div>

          <img
            src={owner}
            alt=""
            className="mt-64 absolute ml-20 w-inherit h-inherit w-[26%] h-[68%]"
          />
        </div>

        <div className="mr-20 flex flex-col w-2/3 justify-end">
          <div className="">
            <h1 className="font-bold text-4xl text-heading pb-1">About the</h1>
            <h1 className="font-bold text-4xl text-subheading pt-1">Founder</h1>
            <div className=" bg-subheading w-32 h-1 mt-3"></div>
          </div>
          <div className="py-7">
            <h3 className="text-heading font-semibold text-xl">Nida Nayyar</h3>
          </div>
          <div>
            <ul className="list-disc pl-6 text-subheading">
              <div className="flex flex-row items-center text-lg">
                <li className="text-4xl"></li>
                <p className="py-2 text-text">
                  MSc. Industrial, and Organizational Psychology
                </p>
              </div>
              <div className="flex flex-row items-center text-lg">
                <li className="text-4xl"></li>
                <p className="py-2 text-text">Bsc. Kinnaird College</p>
              </div>
              <div className="flex flex-row items-center text-lg">
                <li className="text-4xl"></li>
                <p className="py-2 text-text">LlB. University of London</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-20 text-text pt-10 text-justify">
        {Founder.map((item) => {
          if (item.id === 1) {
            const words = item.para.split(" ");
            const firstTwoWords = words.slice(0, 2).join(" ");
            const restOfWords = words.slice(2).join(" ");

            return (
              <p className="text-lg pb-4">
                <span className="text-heading font-bold">{firstTwoWords}</span>{" "}
                {restOfWords}
              </p>
            );
          }
          else{
            return <p className="text-lg pb-4">{item.para}</p>;
          }
        })}
      </div>
    </div>
  );
};
export default About;
