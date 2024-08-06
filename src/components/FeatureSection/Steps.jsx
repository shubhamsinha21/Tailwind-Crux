import React from "react";
import Feature from "./Feature";

const Steps = () => {
  return (
    <div className="rounded-xl bg-white border justify-around px-8 py-12 flex flex-col lg:flex-row hover:border-orange-300 ">
      {/* left section of div */}
      <div className="flex flex-col gap-6 lg:w-1/2">
        <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-lg w-fit font-medium cursor-pointer hover:bg-yellow-100 font-display ">
          Step
        </span>
        <h3 className="text-4xl max-sm:text-2xl font-medium">
          Bootstrap straight from your web app
        </h3>
        <p className="text-gray-700 text-xl max-sm:text-lg font-thin">
          Copy and paste your web app url into ToDesktop. Customise your app
          design, app icon and window frame UI with no code.
        </p>

        <ul className="grid grid-cols-2 gap-4">
          <Feature />
          <Feature />
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </ul>
      </div>

      {/* right section of div */}
      <div className="pt-12 mx-auto ">
        <img src="/images/asset 66.svg" alt="feature" />
      </div>
    </div>
  );
};

export default Steps;
