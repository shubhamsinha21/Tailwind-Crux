import React from "react";
import Scroll from "./Scroll";
import BentoGrid from "./BentoGrid";
import Features from "./Features";

const Hero = () => {
  return (
    // hero section
    <main>
      <div
        id="hero"
        className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent"
      >
        {/* hero-container */}
        <div
          id="hero-container"
          className="max-w-2xl mx-auto flex flex-col px-6 py-20"
        >
          {/* version-text */}
          <div
            id="version-text"
            className="cursor-pointer flex sm:mx-auto gap-2 
                    items-center justify-center px-4 py-1 mb-8 w-fit border
                 border-yellow-600 bg-yellow-50 rounded-lg shadow-md 
                 hover:shadow-lg hover:-translate-y-1 transition group"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-800"></div>
            <p className="text-yellow-600 text-lg max-sm:text-sm px-2 font-medium font-display">
              v0.21.1:
              <span className="text-yellow-800 font-medium">
                {" "}
                Find-in-page bug fixes{" "}
              </span>
            </p>
            <i className="fa-solid fa-arrow-right text-yellow-800 group-hover:translate-x-1 transition duration-300"></i>
          </div>

          {/* hero-features */}
          <div
            id="hero-features"
            className="hidden sm:flex gap-4 mx-auto my-6 "
          >
            <div className="flex gap-2 items-center text-gray-500">
              <i className="fa-regular fa-file-code text-sm text-yellow-500"></i>
              <p>Code Optional</p>
            </div>

            <div className="flex gap-2 items-center text-gray-500">
              <i class="fa-solid fa-hand-back-fist text-sm text-purple-700"></i>
              <p>Drag and Drop Builder</p>
            </div>

            <div className="flex gap-2 items-center text-gray-500">
              <i class="fa-solid fa-laptop text-sm text-blue-900"></i>
              <p>Windows, Mac, Linux</p>
            </div>
          </div>

          {/* headline and content */}
          <h1 className="text-4xl font-semibold leading-snug sm:text-6xl sm:leading-normal sm:text-center">
            Web <span className=" text-blue-700 ">a</span>pp to desktop{" "}
            <span className=" text-blue-700 ">a</span>pp in {"\t"}
            <span className="text-amber-900">m</span>
            <span className="text-amber-200">i</span>
            <span className="text-amber-300">n</span>
            <span className="text-amber-500">u</span>
            <span className="text-amber-600">t</span>
            <span className="text-amber-700">e</span>
            <span className="text-amber-800">s</span>
          </h1>
          <p className="text-xl mt-3 sm:text-2xl text-gray-800 sm:text-center">
            Take your web app codebase and transform it into a cross platform
            desktop app with native functionality.
          </p>

          {/* button-container */}
          <div
            id="button-container"
            className="flex mt-12 gap-4 flex-col sm:flex-row sm:mx-auto"
          >
            <button className="bg-primary rounded-md text-white font-semibold px-8 py-3 hover:bg-blue-600">
              Download Now
            </button>
            <button className="bg-primary rounded-md text-white font-semibold px-8 py-3 hover:bg-blue-600">
              Read Docs
            </button>
          </div>
        </div>

        <Scroll />
        <Features />
        <BentoGrid />
      </div>
    </main>
  );
};

export default Hero;
