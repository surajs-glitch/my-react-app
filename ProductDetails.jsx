import React from "react";
import { Link, useParams } from "react-router-dom";
import { productsData } from "../data/Products";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);




import { Features } from "../data/Features";
import main from "../assets/productsMainDesktop.png";

// import youtube from "../assets/IMG-20250610-WA0010.jpg";
// import bg from "../assets/productBG.png";
// import { div } from "framer-motion/client";
// import bgMobile from "../assets/productBGMobile.png";
// import features from "../assets/features.png";

const ProductDetails = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(rightRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const form = document.getElementById("formElement");
    const termsContainer = document.getElementById("termsContainer");

    if (!form || !termsContainer) return;

    const handleScroll = () => {
      form.classList.remove("pointer-events-none", "opacity-50");
      form.classList.add("pointer-events-auto", "opacity-100");

      // Optional: remove listener once activated
      termsContainer.removeEventListener("scroll", handleScroll);
    };

    termsContainer.addEventListener("scroll", handleScroll);

    return () => {
      termsContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { name } = useParams();
  const product = productsData.find((item) => item.slug === name);

  if (!product) return <div className="p-10 text-xl">Product not found</div>;
  const [variant1, variant2] = product.variants;

  

  return (
    <div className="w-full  ">
      <div className="hidden   w-full relative overflow-x-hidden">
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
        <img className="h-full w-full object-cover" src={main} alt="" />
        <div className="inset-0 absolute text-center bg-black/40 flex flex-col lg:w-full justify-center">
          <h3 className="font-roboto font-bold text-h1-mobile lg:text-[64px] text-white">
            Our Products
          </h3>
          <p className="font-jost font-medium text-white text-h4-mobile lg:text-h4-desktop">
            We have Become a Trusted Partner for Research Institutions,
            Educational <br className="hidden lg:block" /> Facilities,
            Healthcare Providers, and Industrial Laboratories across the Globe.
          </p>
        </div>
      </div>

      <div className="w-full text-center mt-[90px]  lg:h-screen py-4 lg:py-8 bg-[#909191] flex flex-col lg:flex-row gap-8 lg:gap-0 items-center">
        <div className="lg:w-1/2   h-full flex justify-center items-center">
          <img className="lg:h-[500px] h-[450px] w-auto lg:w-auto" src={product.image} alt="" />
        </div>
        <div className="lg:w-1/2  flex lg:justify-start h-full lg:items-center">
          <h1 className="text-white lg:text-[84px] text-[54px]  font-comic  flex">
            {product.name}
          </h1>
        </div>
        {/* <img className="flex justify-start  h-[600px]" src={image} alt="" /> */}
      </div>

      {/* Desktop */}
      <div className="hidden w-full lg:flex flex-col">
        {product.variants.map((variant, index) => (
          <div className="relative " key={index}>
            {/* <img className="" src={bg} alt="" /> */}
            <div className=" flex justify-center w-full cursor-pointer">
              {index % 2 === 0 ? (
                <div className="bg-[#7C818F] bg-opacity-15 flex w-full py-16 group">
                  <div className="w-1/2 flex  justify-center items-center">
                    <img
                      src={variant.image}
                      alt={product.name}
                      className=" lg:h-[400px]"
                    />
                  </div>
                  <div className="w-1/2 flex lg:px-8 flex-col lg:gap-4 justify-center">
                    <div>
                      <p className="font-jost text-[#F11726] lg:text-body-desktop text-body-mobile m-0 p-0 leading-none uppercase">
                        {variant.type} Series
                      </p>
                      <h1 className="text-black font-bold font-roboto  lg:text-h2-desktop text-h2-mobile m-0 p-0 leading-none ">
                        {variant.name}
                      </h1>
                    </div>
                    <ul className="lg:space-y-4">
                      {variant.shortDetail.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <li
                            className="flex items-center gap-2 font-roboto uppercase lg:text-body-desktop"
                            key={i}
                          >
                            <Icon className="h-6 w-6" />
                            {feature.feature}
                          </li>
                        );
                      })}
                    </ul>
                    {/* <Link
                      to={`/products/${
                        product.slug
                      }/${variant.type.toLowerCase()}`}
                      className=" ml-0 bg-[#F11726] lg:text-body-mobile text-body-mobile font-medium font-jost text-white px-6 py-2 rounded-[25px] w-fit"
                    >
                      Enquire
                    </Link> */}
                    <Link
                    to={`/products/${
                        product.slug
                      }/${variant.type.toLowerCase()}`}
                    className="h-full absolute right-0 group  px-4 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F11726]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        className="size-12 stroke-[#F11726] transition-all duration-300 group-hover:stroke-white group-hover:translate-x-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-[#dedfe3] flex w-full py-20 group">
                  <div className="w-1/2 flex flex-col px-20 lg:gap-4 justify-center ml-20">
                    <div>
                      <p className="font-jost text-[#F11726] lg:text-body-desktop text-body-mobile m-0 p-0 leading-none uppercase">
                        {variant.type} Series
                      </p>
                      <h1 className="text-black font-bold font-roboto  lg:text-h2-desktop text-h2-mobile m-0 p-0 leading-none ">
                        {variant.name}
                      </h1>
                    </div>
                    <ul className="lg:space-y-4">
                      {variant.shortDetail.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <li
                            className="flex items-center gap-2 font-roboto uppercase lg:text-body-desktop"
                            key={i}
                          >
                            <Icon className="h-6 w-6" />
                            {feature.feature}
                          </li>
                        );
                      })}
                    </ul>
                    {/* <Link
                      to={`/products/${
                        product.slug
                      }/${variant.type.toLowerCase()}`}
                      className="bg-[#F11726] lg:text-body-mobile text-body-mobile font-medium font-jost text-white px-6 py-2 rounded-[25px] w-fit"
                    >
                      Enquire
                    </Link> */}
                    <Link
                    to={`/products/${
                        product.slug
                      }/${variant.type.toLowerCase()}`}
                    className="h-full absolute left-0 group bg-[#dedfe3] px-4 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F11726]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        class="size-12 stroke-[#F11726] transition-all duration-300 group-hover:stroke-white group-hover:-translate-x-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="w-1/2 flex justify-center items-center">
                    <img
                      src={variant.image}
                      alt={product.name}
                      className="h-[400px]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        {product.variants.map((variant, index) => (
          <div className="" key={index}>
            {/* <img className="relative h-fit" src={bgMobile} alt="" /> */}
            <div className="flex flex-col mt-16 z-10 px-4">
              <div>
                <Link
                  to={`/products/${product.slug}/${variant.type.toLowerCase()}`}
                >
                  <img
                    className="h-[320px] w-auto m-auto mt-12"
                    src={variant.image}
                    alt=""
                  />
                </Link>
              </div>
              <div className="mt-4">
                <p className="text-body-mobile text-black/70">
                  {variant.type} Series
                </p>
                <h2 className="font-bold text-h3-mobile font-roboto">
                  {variant.name}
                </h2>
                <ul className=" mt-4 space-y-4">
                  {variant.shortDetail.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <li
                        className="flex items-center gap-2 font-roboto text-[16px]"
                        key={i}
                      >
                        <Icon className="h-6 w-6" />
                        {feature.feature}
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to={`/products/${product.slug}/${variant.type.toLowerCase()}`}
                  className="mt-4 bg-[#F11726] text-white px-8 py-2 text-h5-mobile font-jost rounded-[20px] inline-block text-center"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden lg:py-12 py-8 bg-[#7C818F] bg-opacity-15 mt-4">
        <h1 className="text-center text-h2-mobile lg:text-h3-desktop font-bold">
          CHOOSE WHAT'S BEST FOR YOU
        </h1>
        <div className="flex flex-col lg:flex-row gap-6  justify-between mt-6 lg:mt-10 px-8 lg:px-32 ">
          {product.variants.map((variant, index) => (
            <div className="" key={index}>
              <div className="lg:w-[450px] space-y-6 px-4 lg:space-y-8 text-center lg:text-left">
                <div>
                  <p className="text-black/75 lg:text-subtext-desktop text-subtext-mobile uppercase">
                    {variant.type} Series
                  </p>
                  <h1 className="lg:text-h2-desktop font-extrabold text-h2-mobile">
                    {variant.name}
                  </h1>
                </div>
                <Link
                  to={`/products/${product.slug}/${variant.type.toLowerCase()}`}
                >
                  <img
                    className="h-[300px] lg:h-[300px] m-auto"
                    src={variant.image}
                    alt=""
                  />
                </Link>
                <div className="bg-[#F11726] lg:text-body-mobile text-body-mobile font-medium font-jost text-white text-center py-2 w-full">
                  <Link
                    to={`/products/${
                      product.slug
                    }/${variant.type.toLowerCase()}`}
                  >
                    Enquire
                  </Link>
                </div>

                <hr className="border-black/30" />

                <div className="space-y-2">
                  {/* ✅ Corrected compare mapping per variant */}
                  {variant.compare?.map((item, itemIndex) => (
                    <div
                      className="flex w-full border-b border-black/30"
                      key={itemIndex}
                    >
                      <div className="w-[80%] px-2 py-1">
                        <p className="text-[14px] font-semibold text-black/80 text-left">
                          {item.title}
                        </p>
                      </div>
                      <div className="w-[20%] px-2 py-1  border-black/30 text-right">
                        <p className="text-[14px] text-black/60">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block w-full px-28 py-8 bg-[#7C818F] bg-opacity-15 ">
        <h1 className="text-center text-h2-mobile lg:text-h3-desktop font-bold">
          CHOOSE WHAT'S BEST FOR YOU
        </h1>
        {/* Header row */}
        <div className="grid grid-cols-[50%,25%,25%]  border-b-[1px] border-black/30  text-sm md:text-base mt-10">
          {/* Questions heading */}
          <div className="p-4 border-r-[1px] border-black/30 flex items-end justify-center text-center">
            <h4 className="text-black font-bold lg:text-h3-desktop font-roboto">
              FEATURES
            </h4>
          </div>

          {/* Variant 1 column */}
          <div className="p-4 border-r-[1px] border-black/30 flex flex-col">
            <p className="text-black/70 lg:text-subtext-desktop font-medium">
              {variant1.type} Series
            </p>
            <p className="lg:text-h4-desktop font-roboto font-bold text-black">
              {product.name}
            </p>
            <img
              src={variant1.image}
              alt={variant1.type}
              className="w-auto h-[300px] m-auto object-contain rounded"
            />
            <Link
              to={`/products/${product.slug}/${variant1.type.toLowerCase()}`}
              className="bg-[#F11726] text-center text-white px-6 py-2 font-medium lg:text-body-desktop mt-4"
            >
              Enquire
            </Link>
          </div>

          {/* Variant 2 column */}
          <div className="p-4 flex flex-col">
            <p className="text-black/70 lg:text-subtext-desktop font-medium">
              {variant2.type} Series
            </p>
            <p className="lg:text-h4-desktop font-roboto font-bold text-black">
              {product.name}
            </p>
            <img
              src={variant2.image}
              alt={variant2.type}
              className="w-auto h-[300px] object-contain rounded"
            />
            <Link
              to={`/products/${product.slug}/${variant2.type.toLowerCase()}`}
              className="bg-[#F11726] text-center text-white px-6 py-2 font-medium lg:text-body-desktop mt-4"
            >
              Enquire
            </Link>
          </div>
        </div>

        {/* Questions & Answers Rows */}
        {product.question.map((q, i) => (
          <div
            key={i}
            className="grid grid-cols-[50%,25%,25%] border-b-[1px] border-black/30 last:border-b-0  text-sm md:text-base"
          >
            <div className="p-2 border-r-[1px] border-black/30 flex items-center font-jost font-medium text-black/80">
              {q}
            </div>
            <div className="py-2 border-r-[1px] border-black/30 font-jost font-medium text-black/80 text-center">
              {variant1.compare[i]?.answer || "N/A"}
            </div>
            <div className="py-2 font-jost font-medium text-black/80 text-center">
              {variant2.compare[i]?.answer || "N/A"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
