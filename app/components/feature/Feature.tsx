import React from "react";
import BlackBtn from "../button/BlackBtn";

const Feature = () => {
  return (
    <div>
      <div className=" text-black flex items-center flex-col justify-center bg-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-5 items-center w-[80%] mx-auto">
          <div className="col-span-2 ">
            <div data-aos="fade-right" className="mt-10">
              <p className="text-[13px] lg:text-[14px] sm:text-[12px] mb-3 py-1 bg-[#38c223] rounded-lg px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <h4 className=" text-[18px] lg:text-[30px] sm:text-[26px] mb-3 font-bold">
                Whether you're paying for
                <br /> electricity, water, airtime, or
                <br /> internet, we've got you{" "}
                <span className="text-[#2FB01A] updated">covered</span>
              </h4>
            </div>
          </div>
          <div data-aos="fade-left" className="col-span-3 py-10">
            <img src="images/surest30.png" alt="" className="object-cover mx-auto w-[300px] " />
          </div>
        </div>
      </div>

      {/* join waitlist */}
      <div className=" text-white flex items-center flex-col justify-center bg-[#297916]">
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-5 items-center w-[80%] mx-auto">
          <div className="col-span-2 ">
            <div data-aos="fade-right" className="mt-10">
              <h4 className="text-[18px] lg:text-[30px] sm:text-[22px] mb-3 font-bold">
                The future of{" "}
                <span className="text-lime-300 updated">
                  bill and
                  <br /> utility
                </span>{" "}
                management
              </h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                aliquam, eligendi nemo earum inventore ea vel rem, veniam
                asperiores voluptates a voluptatem optio reiciendis odit
                deserunt consectetur? Numquam, obcaecati corrupti.
              </p>
              <BlackBtn text="Join Waitlist" />
            </div>
          </div>
          <div data-aos="fade-left" className="col-span-3">
            <img src="images/surest mobile.png" alt=""  className="object-cover mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
