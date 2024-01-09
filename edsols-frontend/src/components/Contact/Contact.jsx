const Contact = () => {
  return (
    <div>

      <div className="flex flex-col items-center justify-center md:text-xl font-bold pt-24">
      <div className="flex justify-center z-0">
        <div className="absolute rounded-t-[105px] border-t-4 border-l-4 border-r-4 border-solid border-secondary w-full md:w-3/5 h-[30%]"></div>
        <div className="absolute rounded-t-[105px] border-t-4 border-l-4 border-r-4 border-solid border-heading w-4/5 md:w-2/3 h-[30%]"></div>
      </div>
      <div className="flex flex-col items-center pt-8 md:pt-16 z-10 ">
        <div>
          <h1 className="text-heading">Contact</h1>
        </div>
        <div className=" bg-subheading w-4/5 h-[2px] md:h-1 mt-3"></div>

        <div className="flex flex-col items-center gap-y-5 md:flex-row gap-x-20 pt-5">
          <div>
            <p className="text-subheading">Nida Nayyar</p>
          </div>
          <div>
            <p className="text-secondary">nidanayyar83@gmail.com</p>
          </div>
          <div>
            <p className="text-secondary">+92 323 8846949</p>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default Contact;
