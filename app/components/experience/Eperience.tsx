import React from "react";

const Eperience = () => {
  return (
    <div className="text-black mt-16  ">
      <div className="text-center">
        <p className="text-[#2FB01A] sm:text-[14px]">Why Choose Surest Pay</p>
        <h3 data-aos="zoom-in" data-aos-delay="200" className="text-[18px] lg:text-[40px] sm:text-[28px] font-bold mb-3">
          Experience seamless, secure, and rewarding bill
          <br /> payments with{" "}
          <span className="text-[#2FB01A] updated">Surest Pay.</span>
        </h3>
        <p className=" mb-5  text-[13px] md:text-[15px]">
          Sign up now to take advantage of this incredible offer and experience
          the convenience of Surest Pay.
        </p>
      </div>

      <div className=" flex items-center flex-col justify-center mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-5 items-center w-[80%] mx-auto">
          <div className="col-span-2 ">
            <div data-aos="fade-up" className="mt-7">
              <img src="images/surest18.png" alt="" className="w-[40px]" />
              <h4 className="text-[15px] lg:text-[20px] sm:text-[17px] mb-3 font-bold ">
                Effortless Bill Payments
              </h4>
              <p className=" text-[13px] lg:text-[15px] sm:text-[13px]">
                Pay all your bills with ease. Our platform is designed to make
                your bill payments quick and simple, saving you time and effort.
              </p>
            </div>
            <div data-aos="fade-up" className="mt-7">
              <img src="images/surest20.png" alt="" className="w-[40px]" />
              <h4 className="text-[16px] lg:text-[20px] sm:text-[17px] mb-3 font-bold">
                Effortless Bill Payments
              </h4>
              <p className=" text-[13px] lg:text-[15px] sm:text-[13px]">
                Pay all your bills with ease. Our platform is designed to make
                your bill payments quick and simple, saving you time and effort.
              </p>
            </div>
            <div data-aos="fade-up" className="mt-7">
              <img src="images/surest19.png" alt="" className="w-[40px]" />
              <h4 className="text-[16px] lg:text-[20px] sm:text-[17px] mb-3 font-bold">
                Effortless Bill Payments
              </h4>
              <p className="md:mb-10 text-[13px] lg:text-[15px] sm:text-[13px]">
                Pay all your bills with ease. Our platform is designed to make
                your bill payments quick and simple, saving you time and effort.
              </p>
            </div>
          </div>
          <div className="col-span-3">
            <img data-aos="fade-left" src="images/list.png" alt="" className="object-cover mx-auto mt-10 sm:h-[500px] lg:ml-20 sm:ml-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eperience;
