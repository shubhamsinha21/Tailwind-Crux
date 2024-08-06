import React, { useState } from "react";

const FAQ = () => {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
      {toggle ? (
        <div>
          <dt className="flex justify-between items-center">
            <p className="font-semibold text-md max-sm:text-sm">
              Is ToDesktop For Me
            </p>

            <i
              className="fa-solid fa-chevron-up -rotate-180 transition duration-300 cursor-pointer"
              onClick={toggleButton}
            ></i>
          </dt>
          <dd className="text-lg font-light mt-8 text-gray-700 transition duration-300">
            <p>
              That depends! If you would like to distribute your web app to your
              users as a downloadable desktop app then ToDesktop is for you.
            </p>
          </dd>
        </div>
      ) : (
        <div>
          <dt className="flex justify-between items-center">
            <p className="font-semibold text-lg">Is ToDesktop For Me</p>

            <i
              className="fa-solid fa-chevron-up transition duration-300 cursor-pointer"
              onClick={toggleButton}
            ></i>
          </dt>
        </div>
      )}
    </div>
  );
};

export default FAQ;
