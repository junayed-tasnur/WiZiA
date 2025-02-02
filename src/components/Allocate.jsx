const Allocate = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div
          className="bg-cover bg-no-repeat w-full rounded-2xl"
          style={{ backgroundImage: "url('/Frame2.png')" }}
        >
          <div className="sm:ml-10 mx-auto py-5 sm:py-10">
            <div className="text-start ml-3 my-5">
              <h1 className="text-3xl text-white max-w-md">
                Allocate effort where your reps make an impact.
              </h1>
              <h2 className="text-tcolr my-2 text-[32px]">
                Let us handle the rest.
              </h2>
              <p className="text-gray-400 max-w-md">
                Keep your reps “in the air” -- out in the field and on the phone
                where they can build relationships.
              </p>
            </div>
            <div className="flex sm:flex-row flex-col ml-3 sm:ml-10 mt-1 text-start gap-5 mb-6">
              <div>
                <h2 className="text-[40px] text-tcolr">32%</h2>
                <p className="text-[20px] mt-1 text-gray-300">
                  Improvement in Open Rates
                </p>
              </div>
              <div>
                <h2 className="text-[40px] text-tcolr">75%</h2>
                <p className="text-[20px] mt-1 text-gray-300">
                  Improvement in Ramp Time
                </p>
              </div>
              <div>
                <h2 className="text-[40px] text-tcolr">35%</h2>
                <p className="text-[20px] text-gray-300">
                  Improvement in Meetings Booked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allocate;