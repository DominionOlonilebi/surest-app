import React from "react";

const Updates = () => {
  return (
    <>
      <div className="text-black text-center mt-20 w-[85%] mx-auto ">
        <p className="text-[13px] mb-5 text-[#2FB01A]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <h3 data-aos="zoom-in" data-aos-delay="200" className="text-[18px] lg:text-[30px] sm:text-[26px] font-semibold mb-5">
          Stay <span className="text-[#2FB01A] updated ">Updated </span> with
          <br /> Surest Drop
        </h3>
        <p className=" mx-auto text-[14px] mb-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias
          error sapiente aut hic aliquid officia laudantium eum! Pariatur saepe
          voluptate sapiente consectetur provident aliquam nihil repellendus
          consequatur corporis? Sint!
        </p>
        <div className="flex justify-center items-center text-center">
          <div className="grid grid-cols-4 gap-0  justify-center items-center" data-aos="fade-left" data-aos-delay="300">
            <img src="images/surest21.png" alt="" className="w-[50px]" />
            <img src="images/surest16.png" alt="" className="w-[50px]" />
            <img src="images/surest15.png" alt="" className="w-[50px]" />
            <img src="images/surest17.png" alt="" className="w-[50px]" />
          </div>
        </div>
      </div>
      <div className="bg-black ">
        <div className=" flex items-center flex-col mt-16 justify-center ">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
            <div className="col-span-2 ">
              <div data-aos="fade-right" className="mt-10 ">
                <img
                  src="images/surest logo2.png"
                  alt=""
                  className="w-[90px]"
                />{" "}
                <span className="text-white">APP IS COMING SOON</span>
              </div>
            </div>
            <div className="col-span-3">
              <img data-aos="fade-left" src="images/surest mobile3.png" alt="" className="object-cover mx-auto sm:mr-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
