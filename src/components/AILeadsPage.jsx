import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
const AILeadsPage = () => {
  return (
    // <div
    //   className=" bg-cover bg-center flex items-center justify-center"
    //   style={{
    //     backgroundImage: "url('/bgOne.png')",
    //     // Fallback for dark color
    //   }}
    // >
    //   <div className="text-center lg:text-left max-w-4xl mx-auto">
    //     {/* Left Content */}
    //     <div className="mb-12 lg:mb-0">
    //       <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
    //         More <span className="text-cyan-400">leads,</span> <br />
    //         less people.
    //       </h1>
    //       <p className="text-gray-300 mt-4 lg:mt-6 text-lg lg:text-xl">
    //         Train an <span className="text-cyan-400">aiDR</span> on your ICP and
    //         messaging matrix. Activate it on a patch. It will send personalized
    //         sequences to every target contact.
    //       </p>
    //       <button className="mt-8 px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-cyan-300 transition">
    //         Sign Up for the Beta 🚀
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <>
      <>
        <div
          className="absolute w-full h-fit sm:h-[573px] bg-cover"
          style={{
            backgroundImage: "url('/bgOne.png')",
          }}
        >
          <div className="sm:ml-[120px] text-center sm:text-start mt-11  sm:mt-[134px]">
            <h5 className="text-[#0FF1F6] text-2xl "> AI SDRs (aiDRs)</h5>
            <h1 className="mt-2 text-white text-5xl sm:text-4xl lg:text-6xl sm:max-w-sm max-w-3x ">
              <span className="font-bold">More</span> leads,{" "}
              <span className="font-bold">less</span> people.
            </h1>
            <p className="text-[20px] text-gray-300 mt-3 max-w-sm">
              Train an aiDR on your ICP and messaging matrix. Activate it on a
              patch. It will send personalized sequences to every target
              contact.
            </p>
            <div>
              <button className="border my-15 mt-6 md:mt-10 bg-[#0FF1F6] rounded-[100px] px-18 py-4 sm:px-3 sm:py-2 text-black text font-semibold cursor-pointer hover:bg-cyan-200 transition-all duration-300 hover:scale-105 me-1 ">
                Sign Up for the Beta
                <NorthEastIcon className=" m-1 md:m-1 border border-black bg-gray-100 sm:bg-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AILeadsPage;
