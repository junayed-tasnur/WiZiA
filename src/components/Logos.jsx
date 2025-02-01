const logos = ["/Group.png", "/cable.png", "/Group-1.png", "/页面1.png"];

const Logos = () => {
  return (
    <>
      <div className="relative text-center mx-auto bg-bgc grid place-items-center">
        <div className="max-w-6xl mx-auto px-4 my-10">
          <p className="uppercase text-tcolr text-center mb-4">
            our trusted partners
          </p>
          <div className="p-3.5 mt-4 sm:mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-[32px] gap-[27px] items-center place-items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  className="hover:scale-125 transition-all duration-300 ease-in-out"
                  src={logo}
                  alt={`Logo ${index + 1}`}
                />
              </div>
            ))}
            <div className="col-span-2 md:col-span-1 lg:col-span-1 m-[-21px]">
              <img
                className="hover:scale-125 transition-all duration-300 ease-in-out"
                src="/public/AMD logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logos;
