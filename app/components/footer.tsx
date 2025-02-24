import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import WhatsAppButton from './WhatsAppButton';

export default function footer(){
    return(
      <footer
  className="bg-center flex w-full flex-col bg-cover mx-auto h-auto md:h-screen"
  style={{ backgroundImage: "url('josh4.jpeg')" }}
>
  {/* Main Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">
    
    {/* Left Column - Contact Section */}
    <div className="flex flex-col items-center text-center md:text-left">
      {/* Logo */}
      <div>
        <Image className="" src={'/logo.png'} alt={'logo'} width={100} height={100} />
      </div>

      {/* Contact Info */}
      <div className="text-white p-6 rounded-lg shadow-lg w-full md:max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Us</h2>

        <div className="space-y-3">
          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaPhoneAlt className="text-black text-lg md:text-xl" />
            <p className='text-black'>+1 (336) 491-4041</p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaEnvelope className="text-black text-lg md:text-xl" />
            <p className='text-black'>info@ubeausa.com</p>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaMapMarkerAlt className="text-black text-lg md:text-xl" />
            <p className="leading-tight text-black">
              3184 West Sunset Blvd, Silver Lake, Los Angeles, CA 90026
            </p>
          </div>
        </div>

        {/* Policy Links */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <h3 className="text-lg font-semibold">Know More</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-900 hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-900 hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-900 hover:underline">More Policies</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Right Column - Subscription Form */}
    <div className="flex flex-col items-center md:items-start text-white text-center md:text-left p-6 md:p-10">
      <h2 className="text-xl md:text-2xl text-white font-bold mb-3">Subscribe to get updates</h2>

      {/* Subscription Input */}
      <div className="md:flex ms:flex ms:flex-col items-center bg-white rounded-full md:p-1 md:max-w-sm w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 p-2 text-black rounded-l-full outline-none"
        />
        <button className="bg-gray-900 text-white md:px-4 md:py-2 rounded-full font-semibold">
          Subscribe
        </button>
      </div>

      {/* Decorative Image */}
      <div className="mt-6">
        <Image 
          src="/logo.png" 
          alt="Subscribe"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="bg-gray-950 text-white py-4 text-center md:text-left">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} UBEA. All rights reserved.</p>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-3 md:mt-0">
        <a href="#" className="text-white hover:text-yellow-500"><FaFacebook className="text-2xl" /></a>
        <a href="#" className="text-white hover:text-yellow-500"><FaTwitter className="text-2xl" /></a>
        <a href="#" className="text-white hover:text-yellow-500"><FaInstagram className="text-2xl" /></a>
        <a href="#" className="text-white hover:text-yellow-500"><FaLinkedin className="text-2xl" /></a>
      </div>
    </div>
  </div>

  <WhatsAppButton />
</footer>


    )
}