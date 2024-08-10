import React from "react";
import WhiteBtn from "../button/WhiteBtn";
import GreenBtn from "../button/GreenBtn";

const Hero = () => {
  return (
    <div className="bg-black pb-28 items-center text-center lg:pt-32  pt-24">
      <div className="w-[85%] mx-auto items-center">
        <div>
          <div className="flex justify-center ">
            <img data-aos="fade-up"
              src="images/surest drop.png"
              alt=""
              className="object-cover md:w-[260px] md:h-[130px] w-[120px] h-[60px] lg:mb-0 mb-2"
            />
          </div>
          <h1 data-aos="fade-right"
            className="text-[20px] sm:text-[28px] lg:text-[40px] mb-3 font-bold text-white
                 "
          >
            N5M Worth of Airtime & Data
            <br /> to be shared!
          </h1>
          <div className="text-white text-[13px] mb-5">
            <p data-aos="fade-left" data-aos-delay="200">
              How to participate in this Drop?
              <br />
            </p >
            <p data-aos="fade-left" data-aos-delay="200">Enter your active Whatsapp number and Email below.</p>
          </div>
          <div className="lg:flex justify-center  space-x-2 md:space-x-5" data-aos="fade-up">
            <WhiteBtn text="Enter phone number"/>
            <WhiteBtn text="Enter Email" />
            <GreenBtn text="Buy airtime" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
