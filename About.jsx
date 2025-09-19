import React from "react";
import { Link } from "react-router-dom";

// import aboutDesktop from "../assets/heroAbout.png";
// import aboutMobile from "../assets/aboutMobile.png"
// const aboutDesktop = "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1750252919/heroAbout_oawyaz.png"
const aboutDesktop =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp/v1750670781/row-equipment-producing-metal-parts-works-photo-with-depth-field_645730-72_yr62ri.jpg";
// const aboutMobile = "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1750252935/aboutMobile_dhetck.png"
const aboutMobile =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp/v1750670781/row-equipment-producing-metal-parts-works-photo-with-depth-field_645730-72_yr62ri.jpg";
import redFrame from "../assets/framered.png";

const About = () => {
  return (
    <div className="lg:px-20 px-4 py-10 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-32">
      <div className="lg:w-[40% hidden">
        <img
          className="hidden lg:block rounded-[20px] h-[300px] object-center"
          src={aboutDesktop}
          alt=""
        />
        <img
          className="lg:hidden rounded-[20px] object-cover"
          src={aboutMobile}
          alt=""
        />
      </div>
      <div className="lg:w-full flex flex-col justify-center">
        <div className="flex items-center justify-center gap-2 lg:gap-4 border-b-[1px] border-b-black/30 lg:pb-4 pb-2 ">
          <img className="lg:h-10 lg:w-10 w-8 h-8" src={redFrame} alt="" />
          <h1 className="text-red font-roboto font-bold lg:text-h2-desktop text-[#3A3A3A]  text-h3-mobile uppercase">
            About us
          </h1>
        </div>
        {/* <p className="font-jost text-black/90 text-h6-mobile lg:text-h6-desktop lg:w-[100%] mt-2 lg:mt-4 leading-[30px] text-center">
          <span className="text-[#EE1D23] text-h5-mobile lg:text-h5-desktop">Eletom79</span> is a leading manufacturer of {" "}
          <span className="text-[#EE1D23]">Scientific and Laboratory Instruments.</span>
          With over a decade of experience, we have been delivering reliable,
          premium-grade equipment to the pharma, FMCG, academic, and healthcare
          sectors.
        </p> */}
        <p className="font-jost text-black/90 text-h6-mobile lg:text-h6-desktop lg:w-[100%] mt-2 lg:mt-10 leading-[30px] text-justify">
          At ELETOM79, We Are Dedicated to Advancing Scientific Research and
          Innovation Through the Design and Manufacture of High-Quality
          Laboratory Instruments. With Over Decade of Industry Experience, We
          Have Established Ourselves as A Trusted Partner for Pharma Industry,
          FMCG, Research Institutions, Universities, Healthcare Facilities, And
          Industrial Labs.
        </p>
        {/* <p className="font-jost text-black/90 text-h6-mobile lg:text-h6-desktop lg:w-[100%] mt-2 lg:mt-4 leading-[30px] text-justify">
          Our Mission Is to Empower Scientists and Researchers by Providing Reliable, Precise, And Cutting-Edge Lab Equipment That Meets the Highest Standards of Accuracy and Durability. From Concept to Production, Our Expert Team Combines Advanced Engineering, Rigorous Quality Control, And Customer-Focused Service to Deliver Instruments That Enhance Productivity and Drive Discovery.

        </p>
        <p className="font-jost text-black/90 text-h6-mobile lg:text-h6-desktop lg:w-[100%] mt-2 lg:mt-4 leading-[30px] text-justify">
         We Specialize in A Wide Range of Laboratory Instruments, Including List Key Products, E.G., AUTOCLAVE, BOD INCUBATORS, CHILLERS, DUAL CHAMBERS, FREEZERS, HOT AIR OVENS, INCUBATORS, MUFFLE FURNACE, REFRIGERATORS, STABILITY CHAMBER, VACUUM OVEN, WATER BATH, Tailored to Meet Diverse Scientific Needs. Our Commitment to Innovation Ensures That We Continually Incorporate the Latest Technologies and Industry Trends to Support Evolving Research Demands.

        </p> */}
       
        <p className="font-jost text-black/90 text-h6-mobile lg:text-h6-desktop lg:w-[100%] mt-2 lg:mt-4 leading-[30px] text-justify">
          Our Mission Is to Empower Scientists and Researchers by Providing
            Reliable, Precise, And Cutting-Edge Lab Equipment That Meets the
            Highest Standards of Accuracy and Durability. From Concept to
            Production, Our Expert Team Combines Advanced Engineering, Rigorous
            Quality Control, And Customer-Focused Service to Deliver Instruments
            That Enhance Productivity and Drive Discovery.
        </p>
        <Link to="/about-us" className="flex items-center  gap-2">
          <p className="text-[#EE1D23] font-semibold font-roboto text-body-mobile lg:text-body-desktop">
            Read More
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="#EE1D23"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default About;
