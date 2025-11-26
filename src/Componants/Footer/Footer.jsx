"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Footer = () => {

  const { register, handleSubmit, formState:{errors}} = useForm();

  const handleMessageSubmit = () => {
   toast.success("Your Message Recorted Successful.")
}


  return (
    <div className="max-w-7xl mx-auto bg-[#37272719]">
      <footer className="py-16 px-10">
        <div className=" grid md:grid-cols-2 gap-12">
          {/* ---------- Left Section ---------- */}
          <div>
            {/* Logo */}
            <Image
              src="/assets/logo1.png"
              alt="logo"
              width={60}
              height={60}
              className="md:w-14 w-10"
            />

            <h2 className="text-3xl font-bold font-serif text-[#3c2f2f]">
              CoffeeGarden
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl">
              <FaFacebookF
                href="ashadulislam6156rs"
                className="cursor-pointer hover:text-[#3c2f2f]"
              />

              <FaXTwitter className="cursor-pointer hover:text-[#3c2f2f]" />
              <FaInstagram
                href="https://www.instag.com/ashadulislam6156rs/"
                className="cursor-pointer hover:text-[#3c2f2f]"
              />
              <FaLinkedinIn
                href={"https://www.linkedin.com/in/ashadulislam6156rs/"}
                className="cursor-pointer hover:text-[#3c2f2f]"
              />
            </div>

            {/* Contact */}
            <h3 className="text-2xl mt-8 font-serif font-bold text-[#3c2f2f]">
              Get in Touch
            </h3>

            <div className="mt-4 space-y-3 text-gray-700">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg" /> +880 1234 567890
              </p>
              <p className="flex items-center gap-3">
                <MdEmail className="text-xl" /> info@coffeegarden.com
              </p>
              <p className="flex items-center gap-3">
                <FaLocationDot className="text-xl" /> 123 Coffee Street, Dhaka,
                Bangladesh
              </p>
            </div>
          </div>

          {/* ---------- Right Section ---------- */}
          <div>
            <h2 className="text-3xl font-bold font-serif text-[#3c2f2f] mb-6">
              Connect with Us
            </h2>

            <form
              onSubmit={handleSubmit(handleMessageSubmit)}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#3c2f2f]"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Name is required!</p>
              )}

              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#3c2f2f]"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required!</p>
              )}

              <textarea
                rows="5"
                placeholder="Message"
                {...register("message")}
                className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md resize-none focus:outline-none focus:border-[#3c2f2f]"
              ></textarea>
              

              <button
                type="submit"
                className="px-6 cursor-pointer py-2 border-2 border-[#3c2f2f] text-[#3c2f2f] rounded-full hover:bg-[#3c2f2f] hover:text-white transition font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
