import React from "react";

const Feature = () => {
  return (
    <>
      <li className="flex gap-4 max-sm:gap-2 group max-sm:text-sm">
        <i className="fa-solid fa-check text-gray-700 font-semibold group-hover:scale-150"></i>
        <a
          href="#"
          className="cursor-pointer font-light border-opacity-30 border-b-[1px] border-gray-600 pb-[1px] hover:border-opacity-60"
        >
          Multiple windows
        </a>
      </li>
    </>
  );
};

export default Feature;
