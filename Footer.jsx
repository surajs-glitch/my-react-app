import React from "react";

import logoDesktop from "../assets/logoDesktop.png";
import location from "../assets/location.png";
// import mobile from "../assets/mobile.png";
import mail from "../assets/mail.png";
import { Link } from "react-router-dom";

const Footer = () => {
  function scrollToTop(duration = 500) {
    const start = window.scrollY;
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }
  return (
    <div className="w-full bg-[#F6F6F6] px-4 py-8 lg:px-16 lg:py-16 ">
      <div className="gradient-border-b pb-2">
        <div className="flex flex-col lg:flex-row justify-between   gap-6 lg:gap-0">
          <div>
            <img className="lg:w-[180px] w-[180px]" src={logoDesktop} alt="" />
            <h4 className="font-jost font-medium text-[#2F2F2F] text-body-mobile lg:text-body-desktop mt-2">ELEMENT79 INSTRUMENTS PVT. LTD.</h4>
            <p className="text-[#2F2F2F] font-jost font-semibold mt-0 text-body-mobile lg:text-body-desktop">
              Ceritification ISO | CE | EN | IEC Certified 
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <img className="lg:h-6 h-6" src={location} alt="Location icon" />
              <a
                // href="https://maps.app.goo.gl/xpRGcdoqYLrKhvbG6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jost font-medium text-[#515151] text-body-mobile lg:text-body-desktop"
              >
                
                
                ELEMENT79 INSTRUMENTS PVT. LTD. <br />
                 84/B, First Floor, <br />
                {/* PART-B 
                Street Address Line 2: <br /> */}
                Veerabhadreshwara Industrial <br />
                Area, Vishwaneedam, Herohalli, Post, <br />
                City: BANGALORE <br />
                State / Province: KARNATAKA <br />
                Postal / Zip Code: 560091
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <img className="lg:w-6 w-6" src={mail} alt="Mail icon" />
              <a
                href="mailto:support@eletom79.com"
                className="font-jost font-medium text-[#515151] text-subtext-mobile lg:text-subtext-desktop lowercase"
              >
                support@eletom79.com
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-black font-jost font-bold text-h5-mobile lg:text-h6-desktop">
              Company
            </h2>
            <div className="font-jost font-medium text-black/50 text-h5-mobile lg:text-h6-desktop mt-2 space-y-2">
              <p>
                {" "}
                <Link to="/">Home Page</Link>
              </p>
              <p>
                <Link to="/about-us">About us</Link>
              </p>
              {/* <p>Privacy policy</p> */}
            </div>
          </div>
          <div>
            <h2 className="text-black font-jost font-bold text-h5-mobile lg:text-h6-desktop">
              Social media
            </h2>
            <div className="font-jost font-medium text-black/50 text-h5-mobile lg:text-h6-desktop mt-2 space-y-2">
              
              <p>
                <a
              href="https://www.facebook.com/profile.php?id=61578257164488"
              target="_blank"
            rel="noopener noreferrer"
              >Facebook</a>
              </p>
              
             <p>
               <a
              href="https://www.linkedin.com/company/108209974/admin/dashboard/"
              target="_blank"
            rel="noopener noreferrer"
              >Linkedin</a>
             </p>
            </div>
          </div>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://techwire.studio/"
          className="cursor-pointer flex lg:justify-end text-body-mobile lg:text-body-desktop text-black/50 font-jost mt-4 "
        >
          Designed By TechWire Studio
        </a>
      </div>
      <div
        onClick={() => scrollToTop(700)}
        className="flex gap-2 items-center justify-end mt-4 cursor-pointer"
      >
        <p className="text-black/40 font-medium lg:text-body-desktop">
          Back to top
        </p>
        <div className="rounded-[6px] border-[1px] border-black/50 p-2">
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
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
