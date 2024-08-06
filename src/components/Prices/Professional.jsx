import React from "react";
import KeyFeatures from "./KeyFeatures";

const Professional = () => {
  return (
    <div className=" border rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
      <h3 className="text-4xl">Professional</h3>
      <p className="text-gray-600 text-xl">For sophisticated desktop apps.</p>

      <p className="text-gray-600 text-xl">
        <span className="font-bold text-gray-900">$240</span>/month
      </p>

      <p className="uppercase text-gray-800">Key Features</p>

      <KeyFeatures />

      <button
        className="py-3 w-full cursor-pointer font-medium 
    font-display rounded-lg text-white 
    hover:bg-opacity-90"
      >
        Read Docs
      </button>
    </div>
  );
};

export default Professional;
