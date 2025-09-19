import { useParams } from "react-router-dom";
import blogs from "../data/Blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div className="text-center py-20">Blog not found</div>;

  const firstHalf = blog.contents.slice(0, 2); // First 2-3 paragraphs
  const secondHalf = blog.contents.slice(2); // Remaining paragraphs

  return (
    <div className="px-4 lg:px-32 py-12 pt-[90px] text-justify">
       <Link to="/blog" className=" flex items-center gap-2 text-black/70  font-jost lg:text-body-desktop font-medium" >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Back
              </Link>
      <h1 className="lg:text-h2-desktop text-h2-mobile font-bold mb-4 font-roboto">
        {blog.title}
      </h1>

      {blog.youtubeUrl && (
        <div className="mb-4 pb-6 border-b border-black/30 overflow-hidden">
          <iframe
            className="lg:w-[90%] w-full m-auto rounded-[20px] h-[200px] lg:h-[600px]"
            src={blog.youtubeUrl}
            title={blog.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <p className="text-[141219] font-raleway lg:text-subtext-desktop text-subtext-mobile font-medium">{blog.date}</p>
      {/* First 2-3 paragraphs */}
      {firstHalf.map((paragraph, i) => (
        <p key={i} className="mt-4 mb-4 font-jost text-h6-mobile lg:text-h6-desktop text-black/75">
          {paragraph}
        </p>
      ))}

      {/* Image Slider */}
      <div className="my-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1, // 👈 Mobile view
            },
            768: {
              slidesPerView: 2.3, // 👈 Tablet and up
            },
          }}
          className="rounded-xl"
        >
          {blog.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Blog image ${i + 1}`}
                className="rounded-xl w-full h-[250px] lg:h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Remaining content */}
      {secondHalf.map((paragraph, i) => (
        <p key={i + 3} className="mb-4 font-jost text-h6-mobile lg:text-h6-desktop text-black/75">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default BlogDetail;
