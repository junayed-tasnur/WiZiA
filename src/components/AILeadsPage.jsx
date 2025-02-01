import NorthEastIcon from "@mui/icons-material/NorthEast";

const AILeadsPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat p-5 "
        style={{
          backgroundImage: "url('/bgOne.png')",
        }}
      >
        <div className="sm:ml-[120px] text-center sm:text-start  ">
          <h5 className="text-tcolr text-2xl sm:mt-10">AI SDRs (aiDRs)</h5>
          <h1 className="ml-6 sm:ml-0 my-2 text-white text-5xl sm:text-4xl lg:text-6xl sm:max-w-sm max-w-xs">
            <span className="font-bold">More</span> leads,{" "}
            <span className="font-bold">less</span> people.
          </h1>
          <p className="text-[20px] text-gray-300 mt-3 max-w-sm">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>
          <div>
            <button className="border my-5 mt-6 md:mt-10 bg-[#0FF1F6] rounded-[100px] px-8 py-4 sm:px-3 sm:py-2 text-black font-semibold cursor-pointer hover:bg-cyan-200 transition-all duration-300 hover:scale-105 me-1">
              Sign Up for the Beta
              <NorthEastIcon className="m-1 md:m-1 border border-black bg-gray-100 sm:bg-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILeadsPage;
