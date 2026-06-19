import React from "react";
// import { Mail, Phone, MapPin } from "lucide-react";
import { IoMailUnread } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { RiMapPin2Fill } from "react-icons/ri";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";


export default function SupportSalesSection() {
  return (
    <>
    <ScrollToTop />
    <section className="min-h-screen bg-[#E3EAFF] text-white px-6 md:px-16 lg:px-28 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-20">
          <p className="text-[#312C85] text-[14px] font-semibold inline-block pb-1">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight text-[#312C85]">
            Support &amp; Sales
          </h1>

          <p className="text-[#586579] text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Have questions about domains, hosting, VPS servers, or
            subscriptions?
            <br />
            Send us a message — our experts will respond quickly.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="pt-8">
            <h2 className="text-3xl font-bold text-[#312C85] md:text-[#312C85] mb-6">
              Let&apos;s Start a Conversation
            </h2>

            <p className="text-[#586579] text-lg leading-relaxed max-w-xl mb-12">
              Whether you're looking to streamline your workflow, boost
              productivity, or transform your business operations, we're here
              to help you succeed.
            </p>

            <div className="space-y-10">
              {/* Email */}
              <div className="flex items-start gap-4">
                <IoMailUnread className="w-6 h-6 text-[#312C85] mt-1" />
                <div>
                  <p className="text-[#312C85] md:text-[#312C85] font-medium">
                    Email
                  </p>
                  <p className="text-[#586579]">support@ignorre.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhone className="w-6 h-6 text-[#312C85] mt-1" />
                <div>
                  <p className="text-[#312C85] md:text-[#312C85] font-medium">
                    Phone
                  </p>
                  <p className="text-[#586579]">+91 (0253) 4001496</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <RiMapPin2Fill className="w-6 h-6 text-[#312C85] mt-1" />
                <div>
                  <p className="text-[#312C85] md:text-[#312C85] font-medium">
                    Address
                  </p>
                  <p className="text-[#586579] leading-relaxed">
                    VVT Avenue, Opp Ashoka Medicover,
                    <br />
                    Indira Nagar Nashik 422009, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="border border-gray-500 rounded-3xl p-8 md:p-10 bg-white shadow-xl">
            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#312C85]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white border border-gray-800 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#312C85]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white border border-gray-800 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-gray-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[#312C85]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full bg-white border border-gray-800 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-gray-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[#312C85]">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Tell us more about your project or question..."
                  className="w-full bg-white border border-gray-800 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-gray-500 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black border border-gray-900 hover:border-gray-700 rounded-xl py-4 text-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    </>
  );
}
