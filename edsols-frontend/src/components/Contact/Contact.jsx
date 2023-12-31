const Contact = () => {
  return (
    <div>

      <div className="flex flex-col items-center justify-center text-xl font-bold pt-24">
      <div className="flex justify-center">
        <div className="absolute rounded-t-[105px] border-t-4 border-l-4 border-r-4 border-solid border-secondary w-3/5 h-[30%]"></div>
        <div className="absolute rounded-t-[105px] border-t-4 border-l-4 border-r-4 border-solid border-heading w-2/3 h-[30%]"></div>
      </div>
      <div className="flex flex-col items-center pt-16">
        <div>
          <h1 className="text-heading">Contact</h1>
        </div>
        <div className=" bg-subheading w-4/5 h-1 mt-3"></div>

        <div className="flex gap-x-20 pt-5">
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
