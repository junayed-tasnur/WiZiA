import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function EmailTrainingPage() {
  return (
    <div className="text-white flex text-start sm:items-center justify-center max-w-[1400px] mx-auto">
      <div
        className="bg-cover bg-no-repeat w-full"
        style={{ backgroundImage: `url('/Framebg.png')` }}
      >
        <div className="text-start max-w-xl px-6 py-12 mx-auto mt-10">
          <h1 className="text-4xl font-bold mb-4">
            Train your <span className="text-tcolr">aiDR</span> on your...
            <span className="block text-tcolr">prefered email st|</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-xs ">
            You&apos;re in control. Train your aiDR on elements of your
            Marketing strategy.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 mb- text-icon space-x-1">
            <p className="font-medium flex items-center">
              <CheckCircleOutlineOutlinedIcon className="mr-2" /> Quick to ramp
            </p>
            <p className="font-medium flex items-center">
              <CheckCircleOutlineOutlinedIcon className="mr-2" /> Easy to
              optimize
            </p>
            <p className="font-medium flex items-center">
              <CheckCircleOutlineOutlinedIcon className="mr-2" /> Quick to scale
              up
            </p>
            <p className="font-medium flex items-center ">
              <CheckCircleOutlineOutlinedIcon className="mr-2 sm:mb-5" /> Works
              with all your existing tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
