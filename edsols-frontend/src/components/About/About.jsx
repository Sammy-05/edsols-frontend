import { ABT1, ABT2 } from "../../data/data.js";

const About = () => {
  return (
    <div className="mt-32" >
      {/* <div className="ml-20">
        <h1 className="font-bold text-5xl text-heading">ABOUT US</h1>
        <div className=" bg-subheading w-44 h-2 mt-3"></div>
      </div> */}

      <div className="grid grid-cols-5 pt-8 gap-x-16 md:gap-x-20" id="about-section">
        <div className="col-span-2 flex flex-col justify-center">
          <div className="absolute rounded-r-[105px] border-t-4 border-b-4 border-r-4 border-solid border-secondary w-[40%] h-[40%] md:w-[35%] md:h-1/2"></div>
          <div className="absolute rounded-r-[105px] border-t-4 border-b-4 border-r-4 border-solid border-heading w-[40%] h-[50%] md:w-[35%] md:h-3/4"></div>

          <div className="flex justify-start items-center">
            <div
              className="absolute w-[100px] h-[150px] md:w-[180px] md:h-[250px] rounded-r-full bg-circles "
              style={
                {
                  // borderTopRightRadius: "25px",
                  // borderBottomRightRadius: "px",
                }
              }
            ></div>
          </div>
          <div className="absolute ml-5 md:ml-20">
            <h1 className="font-bold md:text-4xl text-subheading md:pb-2">
              WHY CHOOSE
            </h1>
            <h1 className="font-bold md:text-4xl text-heading md:pt-2">EDSOLS?</h1>
          </div>
        </div>

        <div className="col-span-3 mr-5 md:mr-20">
          <h2 className="text-heading font-semibold text-sm md:text-2xl ">
            REVITALISE LEARNING:
          </h2>
          {ABT1.map((item) => {
            return (
              <div className="py-2 md:py-3">
                <h3 className="text-subheading text-[10px] font-semibold md:text-lg">
                  {item.heading}
                </h3>
                <p className="text-text text-[10px] md:text-lg">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-5 pt-16 gap-x-10 md:gap-x-20 ml-5 md:ml-20">
        <div className="col-span-3">
          <h2 className="text-heading font-semibold text-sm md:text-2xl">
            SUSTAINED ADVANCEMENT:
          </h2>
          {ABT2.map((item) => {
            return (
              <div className="py-2 md:py-3">
                <h3 className="text-subheading font-semibold text-[10px] md:text-lg">
                  {item.heading}
                </h3>
                <p className="text-text text-[10px] md:text-lg">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="col-span-2 flex justify-center md:ml-40">
          <div className="rounded-l-[105px] border-t-4 border-b-4 border-l-4 border-solid border-secondary w-full h-full"></div>
          <div className="flex justify-end items-center ">
            <div
              className="absolute w-[80px] h-[150px] md:w-[150px] md:h-[250px] rounded-l-full bg-circles "
              style={
                {
                  // borderTopRightRadius: "25px",
                  // borderBottomRightRadius: "px",
                }
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
