import React, { Suspense } from "react";

import mainDesktop from "../assets/contactMainDesktop.png";
import map from "../assets/🌎 Map Maker_ eletom79 (Standard).png";

const Form = React.lazy(() => import("../components/Question"));

const Contact = () => {
  return (
    <div>
      {/*  */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/60"></div>
        <img className="h-full w-full object-cover" src={mainDesktop} alt="" />
        <div className="absolute text-center top-[40%] flex flex-col lg:w-full justify-center">
          <h3 className="font-jost font-bold text-h1-mobile lg:text-h1-desktop text-white uppercase">
            Contact Us
          </h3>
          <p className="font-roboto text-white text-h6-mobile lg:text-h4-desktop mt-6 lg:mt-10 capitalize px-4">
            Reach out to us through the form below, email us directly, or give
            us a call. We <br className="hidden lg:block" /> strive to respond to all inquiries as quickly
            as possible
          </p>
        </div>
      </div>
      <Suspense>
        <Form />
      </Suspense>
      <div className="lg:px-20 px-4 py-4 lg:py-8">
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 lg:p-16 text-center lg:rounded-[25px] lg:shadow-[0_0_60px_0_rgba(0,0,0,0.1)] relative">
          <div className="lg:w-1/2  flex flex-col gap-4 lg:gap-6 justify-center items-center">
            <h3 className="text-black font-roboto font-bold text-h5-mobile lg:text-h5-desktop">
              Company Address
            </h3>
            <p className="font-jost font-medium text-[#515151] text-subtext-mobile lg:text-subtext-desktop">
              Street Address: 84/B, First Floor, PART-B <br /> Industrial Area, {" "}
              Vishwaneedam, Herohalli, Post,
              <br /> City: BANGALORE <br /> State / Province: KARNATAKAbr <br />{" "}
              Postal / Zip Code: 560091
            </p>
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full border-[1px] border-[#DCDCDC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <p className="font-jost font-bold text-black/40 text-body-mobile lg:text-body-desktop lowercase">
                SUPPORT@ELETom79.Com
              </p>
            </div>
          </div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 transform w-1 -translate-x-0.5 gradient-border-l h-[80%] m-auto"></div>
          <div className="lg:w-1/2  flex justify-center">
            <img className="lg:h-[400px]" src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
