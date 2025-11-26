import Link from "next/link";
import React from "react";


const Banner = () => {
    return (
      <>
        <div
          className="bg-cover h-75 md:h-96 bg-center max-w-7xl mx-auto flex items-center"
          style={{ backgroundImage: `url(${"/assets/more/3.png"})` }}
        >
          <div className="left flex-1 hidden md:block"></div>
          <div className="right flex-1 space-y-4">
            <h1 className="text-2xl font-semibold text-white text-center md:text-left">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-gray-400 text-center md:text-left pr-3">
              It s coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <div className="flex items-center justify-center md:block">
              <Link href={"/about"} className="btn btn-md hover:bg-[#d1b48c] text-[#242222]">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#ECEAE3] p-2 md:p-0 h-50 flex justify-center items-center">
          <div className="md:w-3/4 flex gap-2 md:gap-4 items-center">
            <div className="space-y-1.5">
              <img
                className="md:w-12 w-10"
                src={"/assets/icons/1.png"}
                alt=""
              />
              <h1 className="md:text-2xl text-sm font-semibold text-[#331A15]">
                Awesome Aroma
              </h1>
              <p className="text-xs text-gray-800">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
            <div className="space-y-1.5">
              <img
                className="md:w-12 w-10"
                src={"/assets/icons/2.png"}
                alt=""
              />
              <h1 className="md:text-2xl text-sm font-semibold text-[#331A15]">
                High Quality
              </h1>
              <p className="text-xs text-gray-800">
                We served the coffee to you maintaining the best quality
              </p>
            </div>
            <div className="space-y-1.5">
              <img
                className="md:w-12 w-10"
                src={"/assets/icons/3.png"}
                alt=""
              />
              <h1 className="md:text-2xl text-sm font-semibold text-[#331A15]">
                Pure Grades
              </h1>
              <p className="text-xs text-gray-800">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
            <div className="space-y-1.5">
              <img
                className="md:w-12 w-10"
                src={"/assets/icons/4.png"}
                alt=""
              />
              <h1 className="md:text-2xl text-sm font-semibold text-[#331A15]">
                Proper Roasting
              </h1>
              <p className="text-xs text-gray-800">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Banner;
