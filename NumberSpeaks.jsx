import React from "react";
import comma from "../assets/“.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const numbers = [
  {
    number: "123+",
    title: "Clients",
  },
  {
    number: "14+",
    title: "Products",
  },
  {
    number: "23+",
    title: "States",
  },
  {
    number: "15+",
    title: "Brands",
  },
];

const NumberSpeaks = () => {
  return (
    <div className="w-full">
      <div className="hidden flex flex-col lg:flex-row justify-between items-start bg-[#F6F6F6] px-4 py-8 lg:py-12 lg:px-16  ">
        <div>
          <h3 className="gradient-border-left pl-2 lg:pl-4 font-jost font-semibold text-black text-h2-mobile lg:text-h1-desktop">
            Numbers speak <br className="hidden lg:block" /> for themself{" "}
          </h3>
        </div>
        <div className="hidden grid lg:grid-cols-4 grid-cols-2 m-auto lg:mr-0 gap-x-20 lg:gap-x-24 mt-2 lg:mt-0">
          {numbers.map((number, index) => (
            <div key={index}>
              <p className="text-[#EE1D23] font-raleway font-semibold text-h1-mobile lg:text-h1-desktop">
                {number.number}
              </p>
              <p className="text-[#1D1D1D] font-raleway text-h6-mobile lg:text-h6-desktop">
                {" "}
                {number.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Content */}
      {/* <div className="bg-[#F3F3F3] rounded-[20px] px-4 lg:px-16 py-6 lg:py-20  mx-4 lg:mx-20 my-6 lg:my-10">
                <div className="flex gap-4 ">
                  <img className="lg:h-4 h-4" src={comma} alt="" />
                  <p className="font-jost  text-black/90 lg:text-h4-desktop text-body-mobile">
                    At Eletom79, we don’t just manufacture instruments, we build trust.
                    Backed by years of industry experience, our precision-driven
                    solutions empower science, research, and innovation across pharma,
                    FMCG, healthcare, and education sectors with unwavering quality and
                    reliability.
                  </p>
                </div>
                <p className="text-[12px] lg:text-[14px] font-jost flex justify-end lg:mt-4">
                  -Mallikarjun Magadam, Managing director
                </p>
              </div> */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        <SwiperSlide>
          <div className="bg-[#F3F3F3] rounded-[20px] px-4 lg:px-16 py-6 lg:py-20 mx-4 lg:mx-20 my-6 lg:my-10">
            <div className="flex gap-4">
              <img className="lg:h-4 h-4" src={comma} alt="" />
              <p className="font-jost text-black/90 lg:text-h4-desktop text-body-mobile">
                At Eletom79, we don’t just manufacture instruments, we build
                trust. Backed by years of industry experience, our
                precision-driven solutions empower science, research, and
                innovation across pharma, FMCG, healthcare, and education
                sectors with unwavering quality and reliability.
              </p>
            </div>
            <p className="text-[12px] lg:text-[14px] font-jost flex justify-end lg:mt-4">
              -Mallikarjun Magadam, Managing Director
            </p>
          </div>
        </SwiperSlide>
        

        
      </Swiper>
    </div>
  );
};

export default NumberSpeaks;
