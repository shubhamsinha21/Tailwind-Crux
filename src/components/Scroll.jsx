import React from "react";
import Line1 from "./Lines/Line1";
import Line2 from "./Lines/Line2";
import Line3 from "./Lines/Line3";

const Scroll = () => {
  return (
    <>
      {/* companies-container */}
      <div id="companies-container" className="flex flex-col z-1 gap-4 w-full">
        {/* companies-title */}
        <div
          id="companies-title"
          className="flex justify-center gap-2 items-center"
        >
          <span className="font-medium">APPS POWERED BY TODESKTOP</span>
        </div>

        {/* companies */}
        <div
          id="lines-group"
          className="my-10 flex flex-col flex-wrap gap-4 justify-center items-center"
        >
          <Line1 />
          <Line2 />
          <Line3 />
        </div>
      </div>
    </>
  );
};

export default Scroll;
