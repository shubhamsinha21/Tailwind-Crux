import React from "react";
import Free from "./Prices/Free";
import Essential from "./Prices/Essential";
import Professional from "./Prices/Professional";

const Pricing = () => {
  return (
    <div className="container">
      <h2 className="h2-style max-sm:text-3xl">
        Choose a plan that fits your needs
      </h2>
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        <Free />
        <Essential />
        <Professional />
      </div>
    </div>
  );
};

export default Pricing;
