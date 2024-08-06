import React from "react";

const BentoGrid = () => {
  return (
    <div id="bento-grid" className="container">
      <h2 className="sm:text-6xl text-5xl max-sm:text-4xl max-w-2xl sm:font-semibold mx-2 font-body leading-snug">
        ToDesktop handles the details
      </h2>
      <div
        id="grid-container"
        className="flex flex-col gap-6 mt-20 lg:grid lg:grid-cols-3"
        style={{ gridAutoRows: 96 }}
      >
        <div className="row-start-1 row-end-3 gradient-hover-outer group">
          <div className="w-full h-full rounded-2xl justify-center items-center flex flex-col gap-6 p-6 gradient-hover-inner">
            <h3 className="text-2xl font-semibold shadow-sm">
              Native Notification
            </h3>
            <img src="./assets/asset 28.png" alt="native" />
          </div>
        </div>

        <div className="row-start-1 row-end-4 gradient-hover-outer group">
          <div className="w-full h-full rounded-2xl justify-center items-center flex flex-col gap-6 p-6 gradient-hover-inner">
            <h3 className="text-2xl font-semibold shadow-sm">
              Native Notification
            </h3>
            <p className="font-smedium text-center text-lg max-w-md">
              We’ll ensure the underlying browser is up to date and deliver
              performance improvements, security patches, & additional features.
            </p>
            <img src="./assets/asset 29.png" alt="native" />
          </div>
        </div>

        <div className="row-start-1 row-end-3 gradient-hover-outer group">
          <div className="w-full h-full rounded-2xl justify-center items-center flex flex-col gap-6 p-6  gradient-hover-inner group">
            <h3 className="text-2xl font-semibold shadow-sm">
              Native Notification
            </h3>
            <img src="./assets/asset 30.png" alt="native" />
          </div>
        </div>

        <div className="row-start-3 row-end-6 gradient-hover-outer group">
          <div className="w-full h-full rounded-2xl justify-center items-center flex flex-col gap-6 p-6 gradient-hover-inner group">
            <h3 className="text-2xl font-semibold shadow-sm">
              Native Notification
            </h3>
            <p className="font-medium text-center text-lg max-w-md">
              We’ll ensure the underlying browser is up to date and deliver
              performance improvements, security patches, & additional features.
            </p>
            <img src="./assets/asset 31.png" alt="native" />
          </div>
        </div>

        <div className="row-start-4 row-end-6 gradient-hover-outer group">
          <div className="w-full h-full rounded-2xl justify-center items-center flex flex-col gap-6 p-6  gradient-hover-inner group">
            <h3 className="text-2xl font-semibold shadow-sm">
              Native Notification
            </h3>
            <img src="./assets/asset 28.png" alt="native" />
          </div>
        </div>

        <div className="row-start-3 row-end-6 gradient-hover-outer group">
          <div className="w-full h-full rounded-2xl justify-center items-center flex flex-col gap-6 p-6  gradient-hover-inner group">
            <h3 className="text-2xl font-semibold shadow-sm">
              Native Notification
            </h3>
            <p className="font-medium text-center text-lg max-w-md">
              We’ll ensure the underlying browser is up to date and deliver
              performance improvements, security patches, & additional features.
            </p>
            <img src="./assets/asset 31.png" alt="native" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
