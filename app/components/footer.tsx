import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function footer(){
    return(
      <footer
      className="  bg-center h-screen flex w-full flex-col bg-cover  mx-auto sm:h-[50vh] md:h-screen  "
      style={{ backgroundImage: "url('/Untitled design.png')" }}
    >
       <div className='grid grid-cols-2 gap-24'>
        <div className='flex flex-col  items-center'>
          <div>
            <Image className='w-16 bg-black' src={'/WhatsApp Image 2025-01-27 at 10.52.39.jpeg' } alt={'log image'} width={64} height={64}/>
          </div>
          <div className=" text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

      <div className="space-y-4">
        {/* Phone */}
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-yellow-400 text-xl" />
          <p>+166 xx 506 2745</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-yellow-400 text-xl" />
          <p>support@ubea.com</p>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-yellow-400 text-xl" />
          <p className="leading-tight">
          3184 West Sunset Blvd - Silver Lake - Los Angeles, CA 90026 - 5231
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <h3 className="text-lg font-semibold">Know More</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <a href="#" className="text-grey-400 hover:underline">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="text-grey-400 hover:underline">Terms and Conditions</a>
          </li>
          <li>
            <a href="#" className="text-grey-400 hover:underline">More Policy</a>
          </li>
        </ul>
      </div>
    </div>
        </div>
        <div className="flex flex-col md:flex-row items-center  text-white p-6 md:p-10 max-w-4xl mx-auto">
      {/* Left Side - Text & Input */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-3">Subscribe to receive all news and updates</h2>
        <div className="flex items-center bg-white rounded-full p-1 max-w-sm mx-auto md:mx-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-2 text-black rounded-l-full outline-none"
          />
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Side - Decorative Image */}
      <div className="mt-6 md:mt-0 md:ml-6">
        <Image 
          src="/WhatsApp Image 2025-01-27 at 10.52.39.jpeg" // Replace with your image path
          alt="Subscribe"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
       </div>
       <div className="bg-gray-950 text-white py-6  w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} UBEA. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-500">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-500">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-500">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>

        
      </footer>

    )
}