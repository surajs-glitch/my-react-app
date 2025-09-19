import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useInView } from "react-intersection-observer";

import { Link } from "react-router-dom";
import { productsData } from "../data/Products";

// Assets
import screw from "../assets/framered.png";

const sortedProducts = productsData
  .slice()
  // .sort((a, b) => (a.name || "").localeCompare(b.name || ""))
  .slice(0, 14);

const Products = () => {
  const desktopPrevRef = useRef(null);
  const desktopNextRef = useRef(null);
  const mobilePrevRef = useRef(null);
  const mobileNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (!swiperInstance) return;

    if (window.innerWidth >= 1024) {
      swiperInstance.params.navigation.prevEl = desktopPrevRef.current;
      swiperInstance.params.navigation.nextEl = desktopNextRef.current;
    } else {
      swiperInstance.params.navigation.prevEl = mobilePrevRef.current;
      swiperInstance.params.navigation.nextEl = mobileNextRef.current;
    }

    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, [swiperInstance]);

  const { ref, inView } = useInView({
    threshold: 0.9, // Trigger when 50% visible
  });

  return (
    <div className="w-full pb-8 lg:py-10">
      {/* <p className="lg:w-[70%] m-auto text-[#686868] font-jost font-light lg:text-h2-desktop  text-center leading-[2] tracking-[0.06em]">
        Eletom79 is a leading manufacturer of scientific and <span className="text-[#EE1D23]">laboratory
        instruments.</span> With over a decade of experience, we have been delivering
        reliable, premium-grade equipment to the pharma, FMCG, academic, and
        healthcare sectors.
      </p> */}
      <div className="lg:px-16 px-4" ref={ref}>
        <div
          className={`text-[#3A3A3A] justify-center flex gap-2 lg:gap-4 items-center w-full 
          border-b-[2px] pb-2 lg:pb-4 transition-colors duration-500 
          ${inView ? "border-[#EE1D23]" : "border-black/30"}`}
        >
          <img className="h-10 w-10" src={screw} alt="" />
          <p className="font-roboto font-bold lg:text-h2-desktop text-h3-mobile relative uppercase">
            List of Products
          </p>
        </div>

        <p className="mt-2 text-center font-jost text-body-mobile lg:text-body-desktop text-black">
          Explore our Wide Range of Scientific Instruments designed to Power
          Labs with Accuracy and Efficiency. Trusted across Industries, our
          Tools
          <br className="hidden lg:block" />
          support Research, Diagnostics, and Discovery.
        </p>

        <Link
          to="/products"
          className="flex gap-2 items-center justify-end mt-2"
        >
          <p className="text-[#EE1D23] font-jost lg:text-h6-desktop">
            View All
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="#EE1D23"
            className="size-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </div>
      {/* Slider */}
      <div className="relative  w-[80%] lg:w-[90%] m-auto mt-4 lg:mt-10">
        {/* Desktop Navigation */}
        <button
          ref={desktopPrevRef}
          className="hidden absolute z-10 top-[40%] left-2 bg-[#EEEEEE] hover:bg-[#EE1D23] lg:h-12 lg:w-12 rounded-full lg:flex justify-center items-center group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-6 text-[#1e1e1e] group-hover:text-white transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          ref={desktopNextRef}
          className="hidden absolute z-10 top-[40%] right-2 bg-[#EEEEEE] hover:bg-[#EE1D23] group lg:h-12 lg:w-12 rounded-full lg:flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
           className="size-6 text-[#1e1e1e] group-hover:text-white transition-colors"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <button
          ref={mobilePrevRef}
          className="lg:hidden absolute z-10 top-[45%] left-0 bg-[#EEEEEE] h-12 w-12 rounded-full flex justify-center items-center"
        >
          
           <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#1e1e1e"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          
        </button>
        <button
          ref={mobileNextRef}
          className="lg:hidden absolute z-10 top-[45%] right-0 bg-[#EEEEEE] h-12 w-12 rounded-full flex justify-center items-center"
        >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#1e1e1e"
           className="size-5 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {/* <div className="flex lg:hidden justify-center gap-4 mb-4">
          <button
            ref={mobilePrevRef}
            className="bg-blue-500 text-white px-3 py-1 rounded-full"
          >
            ◀
          </button>
          <button
            ref={mobileNextRef}
            className="bg-blue-500 text-white px-3 py-1 rounded-full"
          >
            ▶
          </button>
        </div> */}

        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          // spaceBetween={20}
          loop={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: "40",
            },
          }}
        >
          {sortedProducts.map((product, index) => (
            <SwiperSlide key={index} className="">
              <div className="relative overflow-hidden group lg:py-2 lg:px-4">
                <Link
                  to={
                    product.variants?.length === 1
                      ? `/products/${
                          product.slug
                        }/${product.variants[0].type.toLowerCase()}`
                      : `/products/${product.slug}`
                  }
                >
                  <img
                    src={product.image}
                    alt={`Product ${index}`}
                    className="lg:h-[320px] h-[250px] m-auto "
                  />
                </Link>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={
                      product.variants?.length === 1
                        ? `/products/${
                            product.slug
                          }/${product.variants[0].type.toLowerCase()}`
                        : `/products/${product.slug}`
                    }
                    className="text-white lg:text-subtext-desktop bg-[#EE1B25] font-roboto font-bold px-4 py-2 rounded-[49px]"
                  >
                    Know more
                  </Link>
                </div>
              </div>

              <div className="text-center border-b-[1px] border-[#DCDCDC] lg:pb-2 mt-2 pb-2 lg:mt-4">
                <h4 className="font-jost font-medium text-center text-h4-mobile lg:text-h5-desktop">
                  {product.name}
                </h4>
                {/* <p className="border-[1px] border-[#DCDCDC] rounded-[104px] px-4 lg:px-4 lg:py-0 font-jost lg:text-body-desktop">
                  {product.type}
                </p> */}
              </div>
              <p className="text-center lg:text-subtext-body text-subtext-mobile text-[#636363] mt-2 lg:mt-2">
                {product.title}
              </p>
              <Link
                to={
                  product.variants?.length === 1
                    ? `/products/${
                        product.slug
                      }/${product.variants[0].type.toLowerCase()}`
                    : `/products/${product.slug}`
                }
              >
                <button className="w-full font-jost font-medium text-white py-2 lg:py-2 bg-[#F11726] rounded-[24px] text-body-mobile lg:text-body-desktop mt-2 lg:mt-4">
                  Enquire
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
