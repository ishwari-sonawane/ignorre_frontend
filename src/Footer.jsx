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
        xl:w-340
       pt-5 pb-5
      "
    >
      {/* TOP CTA */}
      <div
        className="
          flex flex-col
          xl:flex-row lg:flex-row
          justify-between items-start xl:items-center
          gap-6
        "
      >
        <p className="text-[22px] sm:text-[26px] xl:text-[30px]">
          Start building secure, scalable internet
          <br className="hidden xl:block" />
          infrastructure today
        </p>

        <button
          className="
            h-12 w-52
            bg-white text-black
            flex justify-center items-center gap-2
            rounded-2xl
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
        <div className="w-full lg:w-150 flex flex-col gap-4">
         <div className='  2xl:w-110 p-3'>
          <img src={logowhite} alt="" className='h-20'/>
         </div>
          <p className="text-[16px] lg:text-[18px] font-semibold">
           helps you manage domains, hosting, servers, and subscriptions from one powerful dashboard — built for scale.
          </p>

          <div className="h-10 w-full sm:w-70 bg-white flex rounded-lg">
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
              className="mx-4 mt-2 text-black"
            />
          </div>
        </div>

        {/* SEPARATORS (DESKTOP ONLY) */}
       <div className="h-full w-[1px] bg-gray-600 my-6"></div>

        {/* PRODUCT */}
        <div className="flex flex-col xl:flex-row md:flex-row gap-10 lg:gap-0 lg:w-100 ">
          <div className="w-full lg:w-60 flex flex-col items-start lg:items-center gap-4">
          <p className="text-[18px] font-semibold mb-4">Product</p>
         <a href="/domain"> <p className="hover:underline cursor-pointer">Domains</p></a>
         <a href="/dns"> <p className="hover:underline cursor-pointer">DNS</p></a>
          <a href="/email"><p className="hover:underline cursor-pointer">Email </p></a>
          <a href="/seo"><p className="hover:underline cursor-pointer">SEO Tools</p></a>
          <a href="/ai"><p className="hover:underline cursor-pointer">AI Services</p></a>
          <a href="#"><p className="hover:underline cursor-pointer">VPS Hosting</p></a>
        </div>

        <div className="hidden lg:block h-full w-[1px] bg-gray-600"></div>

        {/* COMPANY */}
        <div className="w-full lg:w-60 flex flex-col items-start lg:items-center gap-4">
          <p className="text-[18px] font-semibold mb-4">Company</p>
        <a href="/"><p className="hover:underline cursor-pointer">Home</p></a>
          {/* <p className="hover:underline cursor-pointer">Careers</p> */}
         <a href="/contact"> <p className="hover:underline cursor-pointer">Contact</p></a>
          {/* <p className="hover:underline cursor-pointer">FAQ</p> */}
        </div>

        <div className="hidden lg:block h-full w-[1px] bg-gray-600"></div>

        {/* UTILITIES */}
        <div className="w-full lg:w-60 flex flex-col items-start lg:items-center gap-4">
          <p className="text-[18px] font-semibold mb-4">Support</p>
          {/* <p className="hover:underline cursor-pointer">Licensing</p> */}
          {/* <p className="hover:underline cursor-pointer">Careers</p> */}
          {/* <p className="hover:underline cursor-pointer">Contact us</p> */}
          <a href="/faq"><p className="hover:underline cursor-pointer">FAQ</p></a>
        </div>
        
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-600 my-6"></div>

      <p className="text-center lg:text-left">
        © 2025 All rights reserved.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer