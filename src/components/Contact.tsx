"use client";
import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container px-4">
      <div className="grid gap-10 md:grid-cols-2">
        
        <div className="space-y-8">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-center border-b-4 w-max mx-auto pb-2"
            data-aos="zoom-in-right"
          >
            Get in touch
          </h2>
          <p
            className="text-gray-400 text-[16px] sm:text-[18px] pt-2"
            data-aos="zoom-in-right"
          >
            Drop me a line, give me a call, or send a message by submitting the
            form.
          </p>
          <div
            className="flex gap-3 items-center text-sm sm:text-base"
            data-aos="zoom-in-right"
          >
            <IoIosMail size={24} />
            <span>laiqaeman1011@gmail.com</span>
          </div>
          <div
            className="flex gap-3 items-center text-sm sm:text-base"
            data-aos="zoom-in-right"
          >
            <BsFillTelephoneFill size={24} />
            <span>(+92) 3997755443</span>
          </div>
          <div
            className="flex gap-3 items-center text-sm sm:text-base"
            data-aos="zoom-in-right"
          >
            <FaInstagramSquare size={24} />
            <span>laiqaeman0101</span>
          </div>
          <div
            className="flex gap-3 items-center text-sm sm:text-base"
            data-aos="zoom-in-right"
          >
            <FaTwitter size={24} />
            <span>Emanlaiqa twitter.com</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6" data-aos="zoom-in-right">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-blue-500 px-2 text-sm sm:text-base"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-right">
            <label htmlFor="email" className="text-sm sm:text-base">
              Email
            </label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-blue-500 px-2 text-sm sm:text-base"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-right">
            <label htmlFor="Message" className="text-sm sm:text-base">
              Message
            </label>
            <textarea
              className="bg-transparent border border-blue-500 px-2 text-sm sm:text-base"
              id="Message"
              rows={6}
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-6 text-sm sm:text-base hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
