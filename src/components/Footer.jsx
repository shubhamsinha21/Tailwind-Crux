import React from "react";

const Footer = () => {
  return (
    <div className="mx-20 max-sm:mx-10 lg:mx-8 px-20 rounded-lg flex flex-col gap-6 lg:flex-row justify-center lg:justify-between items-center bg-slate-100 border h-64  lg:h-32 mt-20 mb-[100px] ">
      <a href="#" id="brand" className="flex gap-1 items-center font-semibold">
        <img
          src="/images/asset 0.png"
          className="object-cover max-w-12 max-h-12"
          alt="Logo"
        />
        <span className="text-lg font-semibold font-display">ToDesktop</span>
      </a>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex gap-6 text-gray-600 justify-center">
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <p className="text-center font-extralight text-md tracking-wider text-gray-800">
          Documentation
        </p>
      </div>
    </div>
  );
};

export default Footer;
