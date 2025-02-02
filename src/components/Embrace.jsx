import NorthEastIcon from "@mui/icons-material/NorthEast";

const Embrace = () => {
  return (
    <>
      <div className="mt-10">
        <div className="text-center">
          <h3 className="text-xl text-tcolr top-10">GET STARTED</h3>
          <h1 className="text-white text-3xl sm:text-4xl mt-5">
            Embrace the <span className="font-bold">new era</span> of outbound.
          </h1>
          <p className="text-gray-300 sm:text-xl mt-5 sm:max-w-sm max-w-xs text-center mx-auto">
            Wizia lets you train, activate, and optimize aiDRs. Take your
            outbound to new levels of performance and efficiency.
          </p>

          <button className="border my-5 mt-6 md:mt-10 bg-[#0FF1F6] rounded-[100px] px-14 py-2 sm:px-3 sm:py-2 text-black font-semibold cursor-pointer hover:bg-cyan-200 transition-all duration-300 hover:scale-105 me-1">
            Sign Up for the Beta
            <NorthEastIcon className="m-1 md:m-1 border border-black bg-gray-100 sm:bg-gray-300" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Embrace;
