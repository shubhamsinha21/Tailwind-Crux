import React from "react";
import Steps from "./FeatureSection/Steps";

const Features = () => {
  return (
    <div id="features" className="container flex flex-col gap-8">
      <h2 className="sm:text-6xl mb-12 text-5xl max-w-2xl sm:font-semibold mx-2 font-body md:leading-snug">
        How it works
      </h2>

      {/* step-1 */}
      <Steps />

      {/* step-2 */}
      <Steps />

      {/* step-3 */}
      <Steps />

      {/* step-3 */}
      <Steps />
    </div>
  );
};

export default Features;
