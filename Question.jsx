import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import screw from "../assets/framered.png";
// import phone from "../assets/call.png";
// import message from "../assets/message-question.png";

const Question = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
  e.preventDefault();

  const form = formRef.current;

  // Get values
  const name = form.name.value.trim();
  const number = form.number.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const termsAccepted = form.querySelector('#terms').checked;

  // ✅ Validation
  if (!name || !number || !email || !message) {
    toast.error('Please fill in all required fields.');
    return;
  }

  // ✅ Phone number validation (10 digits)
  if (!/^\d{10}$/.test(number)) {
    toast.error('Please enter a valid 10-digit phone number.');
    return;
  }

  // ✅ Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    toast.error('Please enter a valid email address.');
    return;
  }

  // ✅ Terms checkbox validation
  if (!termsAccepted) {
    toast.error('Please agree to the Terms and Conditions.');
    return;
  }

  // ✅ Send email if all is valid
  emailjs
    .sendForm(
      'service_7h6wtdn',
      'template_1m1uelc',
      form,
      'Jf0kmH3Y2HiGiArSW'
    )
    .then(
      (result) => {
        console.log(result.text);
        toast.success('Message sent successfully!');
        form.reset(); // Clear form after submission
      },
      (error) => {
        console.log(error.text);
        toast.error('Something went wrong, please try again.');
      }
    );
};


  return (
    <div className="w-full lg:py-8 px-4 py-4 lg:px-24">
      {/* Form */}
      <div className="w-full  lg:px-8">
        <div className="w-full flex items-center justify-center gap-2 border-b border-b-black/30 lg:pb-4 pb-2 text-[#3a3a3a]">
          <img className="lg:h-10 lg:w-10 w-8 hidden lg:block" src={screw} alt="" />
          <h4 className="lg:text-h2-desktop text-h2-mobile font-bold font-roboto uppercase">
            Contact us
          </h4>
        </div>
        <p className="font-jost font-medium text-center text-black/75 text-subtext-mobile lg:text-subtext-desktop mt-2">
          We’re here to help—share your thoughts or inquiries with us,
          and we’ll get back to you <br className="hidden lg:block" />  soon!
        </p>
        {/* Form */}
        <div className="flex lg:flex-row  flex-col-reverse mt-6 lg:mt-10 gap-4 lg:gap-8 ">
          <div className="lg:w-[90%] p-4 lg:p-8 rounded-[24px] shadow-[0_0_60px_0_rgba(0,0,0,0.1)]">
            <form ref={formRef} onSubmit={handleSubmit}   className="h-full">
              <div className=" h-full">
                <div className="flex lg:flex-row flex-col gap-4 lg:gap-8">
                  {/* Left Side */}
                  <div className="lg:w-1/2 flex flex-col gap-4 lg:gap-6 justify-between">
                    <div className="space-y-2">
                      <p className="font-jost font-bold lg:text-h6-desktop">
                        NAME*
                      </p>
                      <input
                        name="name"
                        type="text"
                        placeholder="user name"
                        className="rounded-[12px] border-[1px] border-black/30 px-4 py-2 w-full placeholder:jost placeholder:text-black/30 text-black/30 font-jost text-body-mobile lg:text-body-desktop"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-jost font-bold lg:text-h6-desktop">
                        NUMBER*
                      </p>
                      <input
                      name="number"
                        type="text"
                        placeholder="user phone number"
                        className="rounded-[12px] border-[1px] border-black/30 px-4 py-2 w-full placeholder:jost placeholder:text-black/30 text-black/30 font-jost text-body-mobile lg:text-body-desktop"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-jost font-bold lg:text-h6-desktop">
                        EMAIL*
                      </p>
                      <input
                        name="email"
                        type="text"
                        placeholder="user email id"
                        className="rounded-[12px] border-[1px] border-black/30 px-4 py-2 w-full placeholder:jost placeholder:text-black/30 text-black/30 font-jost text-body-mobiles lg:text-body-desktop"
                      />
                    </div>
                  </div>

                  {/* Right Side */}
                  {/* Right Side */}
                  <div className="lg:w-1/2 flex flex-col space-y-2">
                    <p className="font-jost font-bold lg:text-h6-desktop">
                      MESSAGE*
                    </p>
                    <div className="h-full flex-1">
                      <textarea
                        name="message"
                        placeholder="a message for us"
                        className="h-[150px] lg:h-full w-full resize-none rounded-[12px] border-[1px] border-black/30 px-4 py-2 placeholder:jost placeholder:text-black/30 text-black/30 font-jost lg:text-body-desktop"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-6">
                  <div className="lg:w-1/2 flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="accent-[#EE1D23] w-5 h-5 rounded border border-black/30"
                    />
                    <label
                      htmlFor="terms"
                      className="font-jost font-medium text-black lg:text-subtext-desktop"
                    >
                      I agree to the Terms and Condition
                    </label>
                  </div>
                  <button
  type="submit"
  className="lg:w-1/2 flex items-center justify-between bg-[#EE1D23] px-4 py-2 rounded-[40px]"
>
  <p className="text-white font-jost text-body-mobile lg:text-body-desktop">
    Send a Message
  </p>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="#fff"
    className="size-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
</button>

                </div>
              </div>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
          <div className="lg:w-[10%] flex flex-col gap-4 lg:gap-8 justify-start">
            {/* <div className="flex justify-center items-center lg:items-start gap-4 lg:gap-4 bg-[#7C818F]/30 rounded-[24px] w-full lg:w-fit p-4 lg:p-6">
              <div>
                <img className="lg:h-6 h-6 w-auto lg:w-auto" src={phone} alt="" />
              </div>
              <div>
                <p className="text-black/40 font-jost font-medium text-body-mobile  lg:text-body-desktop">
                  Contact Phone
                </p>
                <p className="text-black/40 font-jost font-medium text-body-mobile  lg:text-body-desktop">
                  +91 6290112561
                </p>
              </div>
            </div> */}
            {/* <div className="flex justify-center items-center lg:items-start gap-4 lg:gap-4 bg-[#7C818F]/30 rounded-[24px] w-full lg:w-fit p-4 lg:p-6">
              <div>
                <img className="lg:h-6 h-6 w-auto lg:w-auto" src={message} alt="" />
              </div>
              <div>
                <p className="text-black/40 font-jost font-medium text-body-mobile lg:text-body-desktop">
                  Help
                </p>
                <p className="text-black/40 font-jost font-medium text-body-mobile  lg:text-body-desktop">
                  Ask anything
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
