import React from "react";

const Theme = () => {
  return (
    <div id="theme" className="container">
      <div className="rounded-xl bg-black border justify-around py-10 flex flex-col lg:flex-row hover:border-orange-300 ">
        {/* left */}
        <div className="flex flex-col gap-8 py-6 px-10">
          <span className="text-gray-400 font-semibold">
            READY TO START BUILDING?
          </span>

          <h1 className="text-4xl text-white sm:max-w-xl lg:text-6xl tracking-wide ">
            Create your desktop app for free*
          </h1>

          <p className="leading-relaxed font-display text-xl text-gray-500">
            ToDesktop Builder will take you step-by-step through the process of
            creating your first desktop app in just a few minutes.
          </p>

          <button className="flex gap-3 text-white font-display w-full hover:bg-purple-400 justify-center items-center bg-primary p-3 rounded-xl ">
            <i class="fa-solid fa-download"></i>
            <p className="font-medium text-lg">Download ToDesktop Builder</p>
          </button>

          <p className="text-gray-700 text-sm leading-tight">
            <i>
              *You can create a desktop app and run it on your computer for
              free. You will only be charged if you want to create a
              distributable app for your customers.
            </i>
          </p>
        </div>

        {/* right */}
        <div className="flex items-bottom ">
          <img src="/images/asset 46.png" className="pl-12 max-w-lg " />
        </div>
      </div>
    </div>
  );
};

export default Theme;
