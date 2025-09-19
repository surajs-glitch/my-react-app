// src/pages/ProductVariantDetails.jsx
import { useParams } from "react-router-dom";
import { productsData } from "../data/Products"; // adjust the path if needed
import { Link, useNavigate } from "react-router-dom";

const ProductVariantDetails = () => {
  const { name, variant } = useParams(); // autoclave, pt
  const navigate = useNavigate()

  const product = productsData.find((p) => p.slug === name);
  const selectedVariant = product?.variants.find(
    (v) => v.type.toLowerCase() === variant.toLowerCase()
  );

  if (!product || !selectedVariant)
    return <div className="p-10 text-xl">Variant not found</div>;

  return (
    <div className="block">
      <div className="flex flex-col lg:flex-row px-4 gap-0  lg:px-28 lg:gap-8 pt-[90px] lg:pt-[90px] lg:pb-20">
        <div className="lg:w-[50%] sticky lg:top-[90px] lg:h-[580px] flex flex-col gap-4 lg:gap-0 rounded-[25px]">
          {/* ✅ Show title only if type is non-empty */}
          {selectedVariant?.type?.trim() && (
            <div>
              <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-black/70 font-jost lg:text-body-desktop font-medium"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      Back
    </button>
              <p
                className={` text-[#F11726] font-jost lg:text-body-desktop text-body-desktop lg:mt-4  ${
                  selectedVariant?.type?.trim().toUpperCase() === "SOFTWARE"
                    ? "hidden"
                    : ""
                }`}
              >
                {selectedVariant.type} Series
              </p>

              <h1 className="text-black lg:text-h1-mobile text-h2-mobile font-bold m-0 p-0 leading-none">
                {selectedVariant.name}
              </h1>
            </div>
          )}

          {/* ✅ Always show image */}
          <img
            src={selectedVariant?.image}
            alt={product?.name}
            className="h-[350px] m-auto"
          />

          {/* ✅ Always show button */}
          <Link
            to="/contact-us"
            className="bg-[#F11726] lg:text-body-mobile  text-body-mobile font-medium font-jost text-white text-center py-2 w-full"
          >
            Enquire
          </Link>
          {/* <a
          href={selectedVariant?.pdf}
            target="_blank"
            rel="noopener noreferrer"
            // download
            className="bg-[#F11726]  text-body-mobile font-medium font-jost text-white text-center py-2 w-full lg:mt-2"
          >
            Download
          </a> */}
        </div>

        {/* RIGHT: Features */}
        <div className="lg:w-[50%]">
          <div className="bg-white z-10 mt-16 flex items-center lg:gap-2 border-b-[1px] lg:pb-2 border-[#DCDCDC]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#F11726"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <h4 className="text-black font-bold lg:text-h6-desktop">
              FEATURES
            </h4>
          </div>
          <ul className="list-disc list-inside space-y-2 lg:ml-4 ml-2 mt-2 lg:mt-4 font-jost font-light lg:text-subtext-desktop small-marker">
            {selectedVariant.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technical Specs */}
      {selectedVariant.detailImage && (
        <div className="w-full h-full px-4 mt-8 lg:mt-0 lg:pb-16">
          <h1 className="font-roboto font-extrabold text-center text-h2-mobile lg:text-[54px]">
            Technical Specification
          </h1>
          <div className="lg:w-[80%] m-auto">
            <img
              src={selectedVariant.detailImage}
              alt={`Specs for ${selectedVariant.type}`}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductVariantDetails;
