import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";

import main from "../assets/industriesMain.png";
// import mainMobile from "../assets/industriesMobile.png";

const mainMobile =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp/v1750254532/industriesMobile_stfnkb.png";

// import service1 from "../assets/service1.png";
// import service2 from "../assets/service2.png";
// import service3 from "../assets/service3.png";
// import service4 from "../assets/service4.png";
// import service5 from "../assets/service5.png";
// import service6 from "../assets/service6.png";
// import service7 from "../assets/service7.png";
// import service8 from "../assets/service8.png";
// import service9 from "../assets/service9.png";
// import serviceBlur1 from "../assets/serviceBlur1.png";
// import serviceBlur2 from "../assets/serviceBlur2.png";
// import serviceBlur3 from "../assets/serviceBlur3.png";
// import serviceBlur4 from "../assets/serviceBlur4.png";
// import serviceBlur5 from "../assets/serviceBlur5.png";
// import serviceBlur6 from "../assets/serviceBlur6.png";
// import serviceBlur7 from "../assets/serviceBlur7.png";
// import serviceBlur8 from "../assets/serviceBlur8.png";
// import serviceBlur9 from "../assets/serviceBlur9.png";

const service1 =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1751018396/serviceNew1_bnwvf6.png";
const service2 =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1751018389/serviceNew2_xy2mmq.png";
const service3 =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1751018395/serviceNew3_fu7woz.png";
const service4 =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1751018385/serviceNew4_rl2i7b.png";
const service5 =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1751018391/serviceNew5_vtrx7c.png";
const service6 =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1751018397/serviceNew6_jbwtn1.png";
const service7 =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1751018397/serviceNew7_b8akzb.png";
const service8 =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1751018399/serviceNew8_xxsojm.png";
const service9 =
  "https://res.cloudinary.com/dpwcgdzdi/image/upload/v1751018399/serviceNew9_kzlhmf.png";

// const serviceBlur1 = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp,q_auto/v1750253076/serviceBlur1_mvg9ph.png";
// const serviceBlur2 = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp,q_auto/v1750253076/serviceBlur2_vsqas7.png";
// const serviceBlur3 = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp,q_auto/v1750253076/serviceBlur3_dgrthd.png";
// const serviceBlur4 = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp,q_auto/v1750253077/serviceBlur4_hzhiid.png";
// const serviceBlur5 = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp,q_auto/v1750253080/serviceBlur5_ur0ndj.png";
// const serviceBlur6 = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp,q_auto/v1750253077/serviceBlur6_z6lt1w.png";
// const serviceBlur7 = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp,q_auto/v1750253077/serviceBlur7_unlcpq.png";
// const serviceBlur8 = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp,q_auto/v1750253079/serviceBlur8_z0gi2i.png";
// const serviceBlur9 = "https://res.cloudinary.com/dpwcgdzdi/image/upload/f_webp,q_auto/v1750253078/serviceBlur9_axxte6.png";

const services = [
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  service7,
  service8,
  service9,
];
// const services = [
//   {
//     image: service1,
//     title: "Pharmaceutical",
//     blur: serviceBlur1,
//   },
//   {
//     image: service2,
//     title: "FMCG Industry",
//     blur: serviceBlur2,
//   },
//   {
//     image: service3,
//     title: "Academic & Research Institutions",
//     blur: serviceBlur3,
//   },
//   {
//     image: service4,
//     title: "Testing Laboratories",
//     blur: serviceBlur4,
//   },
//   {
//     image: service5,
//     title: "Hospitals & Clinical Labs",
//     blur: serviceBlur5,
//   },
//   {
//     image: service6,
//     title: "Custom Industrial Projects",
//     blur: serviceBlur6,
//   },
//   {
//     image: service7,
//     title: "Biotechnology",
//     blur: serviceBlur7,
//   },
//   {
//     image: service8,
//     title: "Chemical Industry",
//     blur: serviceBlur8,
//   },
//   {
//     image: service9,
//     title: "Cosmetics Industry",
//     blur: serviceBlur9,
//   },
// ];

const Industries = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRefDesktop = useRef(null);
  const nextRefDesktop = useRef(null);
  const [swiperMobile, setSwiperMobile] = useState(null);
  const [swiperDesktop, setSwiperDesktop] = useState(null);

  useEffect(() => {
    if (!swiperMobile) return;

    swiperMobile.params.navigation.prevEl = prevRef.current;
    swiperMobile.params.navigation.nextEl = nextRef.current;

    swiperMobile.navigation.init();
    swiperMobile.navigation.update();
  }, [swiperMobile]);

  useEffect(() => {
    if (!swiperDesktop) return;

    swiperDesktop.params.navigation.prevEl = prevRefDesktop.current;
    swiperDesktop.params.navigation.nextEl = nextRefDesktop.current;

    swiperDesktop.navigation.init();
    swiperDesktop.navigation.update();
  }, [swiperDesktop]);

  return (
    <div>
      <div className="hidden lg:block w-full lg:h-[350px] relative">
        <img
          className="w-full h-full absolute object-cover z-0"
          src={main}
          alt=""
        />

        <div className="absolute inset-0 lg:py-16 flex items-center justify-center flex-col lg:flex-row z-10 bg-black/50">
          {/* Left Content */}
          <div className="lg:w-[40%] flex flex-col  justify-center lg:pl-20 text-white">
            <h1 className="font-roboto font-bold lg:text-h2-desktop gradient-border-left lg:pl-4 uppercase">
              Industries We <br /> Serve
            </h1>
            <p className="font-jost lg:text-body-desktop lg:mt-2 capitalize">
              We build cutting-edge lab instruments trusted by <br /> biotech,
              pharma, and research industries <br /> worldwide.
            </p>
          </div>
          <div className="w-[60%]">
            <div className="w-full h-full flex flex-col justify-center">
              {/* Swiper */}
              <Swiper
                modules={[Navigation, Autoplay]}
                onSwiper={setSwiperDesktop}
                slidesPerView={4.3}
                spaceBetween={"20"}
                loop={true}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRefDesktop.current;
                  swiper.params.navigation.nextEl = nextRefDesktop.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                autoplay={{
                  delay: 1500, // 3 seconds between slides
                  disableOnInteraction: false, // Keeps autoplay after user interaction
                }}
                className="w-full"
              >
                {services.map((item, index) => (
                  <SwiperSlide key={index}>
                    {/* <div className="relative h-full w-full overflow-hidden rounded-[25px] border-white border-[10px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-[15px]"
                      />
                      <img className="absolute bottom-0 rounded-b-[15px]" src={item.blur} alt="" />
                      <p className="absolute left-4 bottom-2 text-white font-jost font-semibold text-h3-mobile z-20">
                    {item.title}
                  </p>
                    </div> */}
                    <div>
                      <img className="h-[200px]" src={item} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="hidden justify-end mt-6 mr-8  flex  gap-4">
                <button
                  ref={prevRefDesktop}
                  className="  bg-[#EEEEEE] lg:h-12 lg:w-12 rounded-full lg:flex justify-center items-center p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#1e1e1e"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>
                <button
                  ref={nextRefDesktop}
                  className=" bg-[#EEEEEE] lg:h-12 lg:w-12 rounded-full lg:flex justify-center items-center p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#1e1e1e"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden relative">
        <img className="reltive" src={mainMobile} alt="" />
        <div>
          <div className="absolute top-8 left-6 lg:w-[40%] flex flex-col justify-center lg:pl-20">
            <h1 className="text-white font-roboto font-bold text-h1-mobile lg:text-h2-desktop gradient-border-left pl-2 lg:pl-4">
              Industries We <br /> Serve
            </h1>
            <p className="text-white font-jost text-body-mobile lg:text-body-desktop mt-2">
              We build cutting-edge lab instruments trusted by <br /> biotech,
              pharma, and research industries <br /> worldwide.
            </p>
          </div>
          {/* Swiper Slider */}
          <div className="w-full px-8  absolute bottom-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={setSwiperMobile}
              slidesPerView={1}
              spaceBetween={"20"}
              loop={true}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
               autoplay={{
                  delay: 500, // 3 seconds between slides
                  disableOnInteraction: false, // Keeps autoplay after user interaction
                }}
              className="w-full h-[300px] lg:h-[500px]"
            >
              {services.map((service, index) => (
                <SwiperSlide
                  className="relative"
                  key={index}
                >
                  <img
                    src={service}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover rounded-[15px]"
                  />
                  
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Buttons */}
            <button
              ref={prevRef}
              className="hidden left-12 absolute z-10 top-[45%]  bg-[#EEEEEE] lg:h-12 lg:w-12 rounded-full lg:flex justify-center items-center p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#1e1e1e"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="hidden right-12 absolute z-10 top-[45%]  bg-[#EEEEEE] lg:h-12 lg:w-12 rounded-full lg:flex justify-center items-center p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#1e1e1e"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
