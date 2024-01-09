import pattern2 from "../../assets/pattern2.png";
import services from "../../assets/services-full.png";
const Services = () => {
  return (
    <div className="mx-5 md:mx-20 md:h-[150vh] mt-20 md:mt-48" id="services-section">
      <div className="">
        <h1 className="font-bold md:text-4xl text-heading">OUR SERVICES</h1>
        <div className=" bg-subheading w-20 md:w-44 h-[2px] md:h-1 mt-1 md:mt-3"></div>
      </div>
      <div className="flex items-center justify-center pt-6 md:pt-20">
        <img src={services} alt="" className="md:scale-75 origin-top"/>
      </div>
      {/* <div className="pt-16 mx-28">
        <div className="flex  w-[100%] h-[100%]">
          <img src={pattern2} alt="" className="absolute" />
        </div>
        <div className="absolute flex flex-col w-[15%] text-2xl gap-y-5 mt-[7%] ml-[0%]">
          <p className="text-secondary font-bold ">Customized Curriculum</p>
          <p className="text-text">
            Tailored curriculum development from FSI to Class VIII based on your
            school's unique needs.
          </p>
        </div>
        <div className="absolute flex flex-col w-[17%] text-2xl gap-y-5 mt-[16%] ml-[21.5%]">
          <p className="text-secondary font-bold ">Progression Goals</p>
          <p className="text-text">
            Seamless progression across grade levels for a clear understanding
            of academic milestones.
          </p>
        </div>
        <div className="absolute flex flex-col w-[16%] text-2xl gap-y-5 mt-[3%] ml-[42.5%]">
          <p className="text-secondary font-bold ">
            Weekly Plans and Lesson Plans
          </p>
          <p className="text-text">
            Access meticulously crafted lesson plans and weekly planning
            resources, focusing on differentiation to cater to diverse learning
            preferences.
          </p>
        </div>
        <div className="absolute flex flex-col w-[15%] text-2xl gap-y-5 mt-[20.5%] ml-[63%]">
          <p className="text-secondary font-bold ">Resources</p>
          <p className="text-text">
            Explore a rich repository of subject-wise resources designed to
            complement the curriculum, making learning engaging and fun.
          </p>
        </div>
        <div className="absolute flex flex-col w-[16%] text-2xl gap-y-5 mt-[43%] ml-[38.5%]">
          <p className="text-secondary font-bold ">Teacher Training</p>
          <p className="text-text">
            Empower educators with need-based and general training modules for a
            more effective learning experience.
          </p>
        </div>
        <div className="absolute flex flex-col w-[19%] text-2xl gap-y-5 mt-[54%] ml-[11.5%]">
          <p className="text-secondary font-bold ">Follow-up and Impact</p>
          <p className="text-text">
            Continuous follow-up and impact assessments to ensure sustained
            improvement.
          </p>
        </div>
        <div className="absolute flex flex-col w-[17%] text-2xl gap-y-5 mt-[67%] ml-[38%]">
          <p className="text-secondary font-bold ">Continous Improvement</p>
          <p className="text-text">
            Our commitment to ongoing enhancement to meet evolving educational
            needs.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
