import React from "react";
import KeyFeatures from "./KeyFeatures";

const Free = () => {
  return (
    <div className="border rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
      <h3 className="text-4xl max-sm:text-2xl">Free</h3>
      <p className="text-gray-600 text-lg max-sm:text-md">
        For personal use or testing your app before deploying to customers.
      </p>

      <p className="uppercase text-gray-800 max-sm:text-sm">Key Features</p>

      <KeyFeatures />

      <button className="border py-3 w-full rounded-lg text-primary cursor-pointer font-medium font-display hover:border-gray-800 hover:rounded-lg">
        Read Docs
      </button>
    </div>
  );
};

export default Free;
