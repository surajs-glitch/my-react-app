import React, { Suspense } from "react";
import { Link } from "react-router-dom";

// Assets
// import mainDesktop from "../assets/heroDesktop.webp";
// import mainMobile from "../assets/heroMobile.webp"

// const mainDesktop = "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1750252809/heroDesktop_c1g2sd.webp"
const mainDesktop = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp/v1750671347/AdobeStock_652050743_1_lkkpys.png"
const mainMobile = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp/v1750671347/AdobeStock_652050743_1_lkkpys.png"

// Component
const About = React.lazy(() => import("./About"))
const Products = React.lazy(() => import("./Products"));
const Industries = React.lazy(() => import("./Industries"));
const Values = React.lazy(() => import("./Values"));
const NumberSpeaks = React.lazy(() => import("./NumberSpeaks"));
const Questions = React.lazy(() => import("./Question"));
const FAQs = React.lazy(() => import("./FAQs"))


const Hero = () => {
  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden lg:block lg:h-screen w-full relative">
        <img className="w-full h-full object-cover hidden lg:block" src={mainDesktop} alt="" />
        <img className="w-full h-full lg:hidden" src={mainMobile} alt="" />

        {/* Centered content box with semi-transparent background */}
        <div className="absolute top-1/2 left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-black bg-opacity-[36%] flex flex-col items-center text-center space-y-4 px-12 py-6 lg:px-8 lg:py-12">
          <h3 className="lg:text-h1-desktop font-jost text-white font-bold">
            Precision Instrument for <br /> Tomorrow's Innovations
          </h3>
          <p className="font-roboto font-medium text-[#EDEDED] lg:text-subtext-desktop capitalize">
            We are scientific & laboratory instrument <br  /> manufacture with
            more than 10 years of  experience
          </p>
          <Link to="/about-us">
              <div className="text-white bg-[#EE1D23] font-akatab font-medium lg:text-subtext-desktop rounded-[10px] w-fit lg:px-6 lg:py-2">
            Explore
          </div>
          </Link>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden  relative">
            <img className="w-full h-screen object-cover" src={mainMobile} alt="" />
            <div className="w-[80%] flex flex-col justify-center items-center bg-black bg-opacity-[25%] backdrop-blur-[2px] absolute left-[10%] top-1/3 rounded-[15px] py-8 space-y-4">
                <h3 className="text-h3-mobile  font-jost text-white font-bold">
            Precision Instrument for <br /> Tomorrow's Innovations
          </h3>
          <p className="font-roboto font-medium text-[#EDEDED] text-subtext-mobile text-center capitalize">
            We are scientific & laboratory instrument  manufacture with
            more than 10 years of  experience
          </p>
          <Link to="/about-us">
          <div className="text-white bg-[#EE1D23] font-akatab font-medium text-subtext-mobile rounded-[10px] w-fit px-6 py-2 lg:px-6 lg:py-2">
            Explore
          </div>
          </Link>
            </div>
      </div>

      {/* Component */}
      <Suspense>
        <About />
        <Products />
        <Values />
        <Industries />
        <NumberSpeaks />
        {/* <Questions /> */}
        <FAQs />
      </Suspense>
    </div>
  );
};

export default Hero;
