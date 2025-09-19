import React from "react";

import mainDesktop from "../assets/blogMainDesktop.png";
import blog1 from "../assets/blog1.png";

import blogs from "../data/Blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      {/* Desktop */}
      <div className=" relative h-screen">
        <img className="h-full w-full object-cover" src={mainDesktop} alt="" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute text-center top-[350px] flex flex-col lg:w-full justify-center">
          <h3 className="font-roboto font-bold lg:text-h2-desktop text-h1-mobile text-white">
            Blogs
          </h3>
          <p className="font-jost text-white text-h4-mobile lg:text-h4-desktop mt-4 lg:mt-10 capitalize">
            Insights, tips, and inspiration across a variety of topics.
          </p>
        </div>
      </div>
      {/* Grid */}
      <div className=" lg:py-16 py-8">
        <h4 className="text-center text-[#EE1D23] font-jost font-semibold text-h4-mobile lg:text-h4-desktop">
          Blogs
        </h4>
        <h2 className="text-center text-black font-roboto font-medium text-h2-mobile lg:text-h2-desktop lg:mt-2">
          News And Insight
        </h2>
        <div className="lg:px-20 px-8 mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
          {blogs.map((blog, index) => (
            <Link to={`/blog/${blog.slug}`} key={index} className="rounded-[24px] p-4 bg-white shadow-[0_0_60px_0_rgba(0,0,0,0.1)]">
              <img className="rounded-[24px] h-[200px] lg:h-[250px] object-cover" src={blog.images[5]} alt="" />
              <div className="lg:mt-4 flex justify-between items-center border-b-[1px] border-black/10 py-2">
                <p className="font-raleway font-bold text-h5-mobile lg:text-h5-desktop">
                  {blog.title}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <p className="text-[#141219] font-jost lg:text-[14px] text-[12px] lg:mt-2">{blog.date}</p>
            </Link>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Blogs;
