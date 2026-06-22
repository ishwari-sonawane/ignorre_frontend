import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import logowhite from "./assets/logowhite.png";
const Footer = () => {
  return (
    <>
     <div className="bg-[#111111] text-white">
  <div
    className="
      min-h-[60vh] w-full
      flex flex-col
      justify-center items-center
      px-6 sm:px-10 
    "
  >
    <div
      className="
        w-full
        max-w-7xl
       pt-5 pb-5
      "
    >
      {/* TOP CTA */}
      <div
        className="
          flex flex-col
          lg:flex-row
          justify-between items-start lg:items-center
          gap-6
        "
      >
        <p className="text-[20px] sm:text-[24px] lg:text-[30px]">
          Start building secure, scalable internet
          <br className="hidden lg:block" />
          infrastructure today
        </p>

        <button
          className="
            h-12 w-52
            bg-white text-black
            flex justify-center items-center gap-2
            rounded-2xl
            flex-shrink-0
          "
        >
          Get Started Now
          <RiArrowRightUpLine size={20} />
        </button>
      </div>

      <div className="h-[1px] w-full bg-gray-600 my-6"></div>

      {/* MAIN FOOTER CONTENT */}
      <div
        className="
          flex flex-col
          lg:flex-row
          gap-10
        "
      >
        {/* LEFT INFO */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
         <div className='p-3 pl-0'>
          <img src={logowhite} alt="" className='h-16 sm:h-20'/>
         </div>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold">
           helps you manage domains, hosting, servers, and subscriptions from one powerful dashboard — built for scale.
          </p>

          <div className="h-10 w-full max-w-xs sm:w-72 bg-white flex rounded-lg">
            <input
              type="text"
              placeholder="Enter Your Email.."
              className="
                bg-[#272727]
                rounded-lg
                w-full
                pl-2
                text-gray-300
                outline-none
              "
            />
            <RiArrowRightUpLine
              size={20}
              className="mx-4 mt-2 text-black flex-shrink-0"
            />
          </div>
        </div>

        {/* SEPARATORS (DESKTOP ONLY) */}
       <div className="hidden lg:block h-full w-[1px] bg-gray-600 my-6"></div>

        {/* PRODUCT */}
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-0 lg:w-1/2 flex-wrap">
          <div className="w-full sm:w-auto sm:flex-1 flex flex-col items-center lg:items-center gap-3">
          <p className="text-[18px] font-semibold mb-2">Product</p>
         <a href="/domain"> <p className="hover:underline cursor-pointer">Domains</p></a>
         <a href="/dns"> <p className="hover:underline cursor-pointer">DNS</p></a>
          <a href="/email"><p className="hover:underline cursor-pointer">Email </p></a>
          <a href="/seo"><p className="hover:underline cursor-pointer">SEO Tools</p></a>
          <a href="/ai"><p className="hover:underline cursor-pointer">AI Services</p></a>
          <a href="#"><p className="hover:underline cursor-pointer">VPS Hosting</p></a>
        </div>

        <div className="block sm:hidden h-[1px] w-full bg-gray-600 my-2"></div>

        <div className="hidden lg:block h-full w-[1px] bg-gray-600"></div>

        {/* COMPANY */}
        <div className="w-full sm:w-auto sm:flex-1 flex flex-col items-center lg:items-center gap-3">
          <p className="text-[18px] font-semibold mb-2">Company</p>
        <a href="/"><p className="hover:underline cursor-pointer">Home</p></a>
         <a href="/contact"> <p className="hover:underline cursor-pointer">Contact</p></a>
        </div>

        <div className="block sm:hidden h-[1px] w-full bg-gray-600 my-2"></div>

        <div className="hidden lg:block h-full w-[1px] bg-gray-600"></div>

        {/* UTILITIES */}
        <div className="w-full sm:w-auto sm:flex-1 flex flex-col items-center lg:items-center gap-3">
          <p className="text-[18px] font-semibold mb-2">Support</p>
          <a href="/faq"><p className="hover:underline cursor-pointer">FAQ</p></a>
        </div>
        
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-600 my-6"></div>

      <p className="text-center">
        © 2025 All rights reserved.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer