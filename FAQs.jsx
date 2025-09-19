import React, { useState } from "react";
// import faq from "../assets/faq.png";
const faq = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp/v1750670783/pexels-thisisengineering-3862603_txjzrr.jpg"
import screw from "../assets/framered.png";

const accordionContent = {
  General: [
    {
      question:
        "What makes ELETOM79 a trusted name in laboratory instrumentation?",
      answer:
        "Premium Quality, Customer Support and Precise Performance make ELETOM79 Unique.",
    },
    {
      question: "Which industries does ELETOM79 cater to?",
      answer: "",
      list: [
        "Pharmaceutical",
        "Testing Laboratories",
        "Biotechnology",
        "FMCG Industry",
        "Hospitals & Clinical Labs",
        "Chemical Industry",
        "Institutions",
        "Custom Industrial Projects",
        "Cosmetics Industry",
      ],
    },
    {
      question: "Where is ELETOM79 based, and do you ship internationally?",
      answer:
        "ELETOM79 based in Bangalore, India and we supply Internationally.",
    },
    {
      question:
        "Does ELETOM79 offer B2B solutions or bulk supply for institutions and industries?",
      answer:
        "Yes. Eletom79 offers B2B solutions or bulk supply for it's customers.",
    },
  ],
  Product: [
    {
      question:
        "What types of laboratory instruments does ELETOM79 manufacture?",
      answer:
        "Autoclave, BOD Incubator, Chillers, Dual Chambers, Freezers, Hot Air Oven, Incubator, Muffle Furnace, Refrigerator, Stability Chamber, Vacuum Oven, Waterbath.",
    },
    {
      question: "Are your instruments compliant with international standards?",
      answer:
        "Yes. ELETOM79 is compliance with CE, ISO, EN and IEC standards.",
    },
    {
      question:
        "Can I request a custom-configured instrument for a specific application?",
      answer: "Yes. ELETOM79 offer customized solutions.",
    },
    {
      question:
        "Do you provide user manuals and operational training for your products?",
      answer: "Yes. ELETOM79 provides user manual and operational training (at the time of installation) for all its products.",
    },
  ],
  Support: [
    {
      question: "What kind of technical support does ELETOM79 offer?",
      answer:
        "ELETOM79 offers Pre-Sales Technical Support, Online & Offline Service Support, IQ-OQ Documentation Support, User Trainings.",
    },
    {
      question:
        "How do I request servicing or repairs for a purchased instrument?",
      answer:
        "Customer can request for service through Email or by online service request form.",
    },
    {
      question: "Is there a warranty on ELETOM79 products?",
      answer: "Yes. ELETOM79 offers 1 year of Warranty Support.",
    },
    {
      question:
        "Do you offer Annual Maintenance Contracts (AMCs) or calibration services?",
      answer: "Yes, ELETOM79 offers Standard and Customized AMC's and Calibration Support with Traceable to NABL Certificates.",
    },
  ],
  Other: [
    {
      question: "Can ELETOM79 assist with turnkey laboratory setup solutions?",
      answer:
        "Yes. ELETOM79 is specialized in Laboratory Instrument manufacturing to Build Complete eco-system for Laboratory Instrument setup of ELETOM79 BRAND Products.",
    },
    {
      question:
        "Does ELETOM79 participate in government tenders or institutional procurement?",
      answer:
        'Yes. ELETOM79 is also available on Govt. Platforms like, GEM and E-Procurments.',
    },
    {
      question: "How do I become a distributor or sales partner with ELETOM79?",
      answer: "Dealer / Distributor has to take few simple process and document verifications to become ELETOM79 dealer / Distributor.",
    },
    {
      question: "Where can I find product datasheets or brochures?",
      answer: "Customer can find product details in our website or they can drop a mail to support@eletom79.com",
    },
  ],
};

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div className="w-full px-4 lg:px-20 lg:py-12 py-8">
        <div className="bg-[#F1F1F3] rounded-[25px] flex lg:px-8 lg:gap-8">
          <div className="hidden lg:w-[45%] lg:flex justify-center items-center">
            <img className="h-[450px] rounded-[25px] w-full object-cover" src={faq} alt="" />
          </div>

          <div className="lg:w-[55%] w-full  lg:p-12 lg:my-16 bg-white rounded-[24px]">
            <div className="hidden lg:flex items-center lg:gap-2">
              <img className="h-10 w019" src={screw} alt="" />
              <p className="text-black/70 font-bold font-jost text-body-mobile lg:text-h2-desktop">
                FAQ
              </p>
            </div>
            {/* <p className="text-[#3A3A3A]  font-roboto text-h2-mobile text-center lg:text-left lg:text-h2-desktop font-bold border-b-[2px]  border-[#DCDCDC] pb-2 lg:pb-4 uppercase">
              Frequently asked <br /> questions
            </p> */}
            {/* Accordion */}
            <div className="w-full">
              {/* Category Tabs */}
              <div className="w-full rounded-[188px] bg-[#F1F1F3] mt-4 p-2 grid grid-cols-4 md:grid-cols-4 gap-2">
                {Object.keys(accordionContent).map((category) => (
                  <button
                    key={category}
                    className={`rounded-[40px] px-2 py-2 lg:px-4 lg:py-3 font-jost font-bold text-[14px] lg:text-subtext-desktop ${
                      activeCategory === category
                        ? "bg-[#EE1D23] text-white"
                        : "bg-black bg-opacity-[3%] text-black"
                    }`}
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenIndex(null); // Reset open accordion
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Accordion Questions */}
              <div className="mt-6  bg-[#F1F1F3] px-4 lg:px-8 py-2 rounded-[24px] ">
                {accordionContent[activeCategory].map((item, index) => (
                  <div
                    key={index}
                    className="border-b-[2px] border-[#DCDCDC] last:border-b-0 py-2"
                  >
                    <button
                      className="w-full text-left font-jost font-medium text-black flex justify-between items-start text-[14px] lg:text-[16px]"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="w-[90%] text-justify">
                        {item.question}
                      </span>
                      <span className="w-[10%] text-right">
                        {openIndex === index ? "-" : "+"}
                      </span>
                    </button>

                    {openIndex === index && (
                      <div className="mt-2">
                        {item.answer && (
                          <p className="text-[#667085] text-[12px] lg:text-[14px] font-jost">
                            {item.answer}
                          </p>
                        )}

                        {Array.isArray(item.list) && item.list.length > 0 && (
                          <ul className="list-disc list-inside mt-1">
                            {item.list.map((listItem, idx) => (
                              <li
                                key={idx}
                                className="text-[#667085] text-[12px] lg:text-[14px] font-jost"
                              >
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
