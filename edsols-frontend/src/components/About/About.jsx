import { ABT1, ABT2 } from "../../data/data.js";

const About = () => {
  return (
    <div className="mt-40" id="about-section">
      <div className="ml-20">
        <h1 className="font-bold text-5xl text-heading">ABOUT US</h1>
        <div className=" bg-subheading w-44 h-2 mt-3"></div>
      </div>

      <div className="grid grid-cols-5 pt-16 gap-x-20 ">
        <div className="col-span-2 flex flex-col justify-center">
          <div className="absolute rounded-r-[105px] border-t-4 border-b-4 border-r-4 border-solid border-secondary w-[35%] h-1/2"></div>
          <div className="absolute rounded-r-[105px] border-t-4 border-b-4 border-r-4 border-solid border-heading w-[35%] h-3/4"></div>

          <div className="flex justify-start items-center">
            <div
              className="absolute w-[180px] h-[250px] rounded-r-full bg-circles "
              style={
                {
                  // borderTopRightRadius: "25px",
                  // borderBottomRightRadius: "px",
                }
              }
            ></div>
          </div>
          <div className="absolute ml-20">
            <h1 className="font-bold text-5xl text-subheading pb-2">
              Why Choose
            </h1>
            <h1 className="font-bold text-5xl text-heading pt-2">Edsols?</h1>
          </div>
        </div>

        <div className="col-span-3 mr-20">
          <h2 className="text-heading font-semibold text-3xl ">
            REVITALISE LEARNING:
          </h2>
          {ABT1.map((item) => {
            return (
              <div className="py-3">
                <h3 className="text-subheading font-semibold text-2xl">
                  {item.heading}
                </h3>
                <p className="text-text text-2xl">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-5 pt-16 gap-x-20 ml-20">
        <div className="col-span-3">
          <h2 className="text-heading font-semibold text-3xl">
            SUSTAINED ADVANCEMENT:
          </h2>
          {ABT2.map((item) => {
            return (
              <div className="py-3">
                <h3 className="text-subheading font-semibold text-2xl">
                  {item.heading}
                </h3>
                <p className="text-text text-2xl">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="col-span-2 flex justify-center ml-40">
          <div className="rounded-l-[105px] border-t-4 border-b-4 border-l-4 border-solid border-secondary w-full h-full"></div>
          <div className="flex justify-end items-center ">
            <div
              className="absolute w-[150px] h-[250px] rounded-l-full bg-circles "
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
