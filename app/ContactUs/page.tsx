"use client";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const ContactUs = () => {
  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const [captchaVerified, setCaptchaVerified] = useState(false);
      const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleCaptcha = (value: string | null) => {
        setCaptchaVerified(!!value);
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!captchaVerified) {
          alert("Please complete the CAPTCHA before sending.");
          return;
        }
    
        try {
          const response = await fetch("https://formspree.io/f/xblglqlr", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
            recaptchaRef.current?.reset();
            setCaptchaVerified(false);
          } else {
            alert("Failed to send message. Try again.");
          }
        } catch (error) {
          console.error("Error sending email:", error);
        }
      };
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('globe.jpeg')" }}
      >
        <h1 className="text-black text-4xl md:text-5xl font-bold uppercase">
          Contact Us
        </h1>
      </div>

      {/* Contact Section */}
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {/* Left - Contact Details */}
        <div className="flex flex-col gap-6 pt-14">
        <h2 className="text-2xl font-semibold text-blue-900 ">Get In Touch</h2>

          <h2 className="text-4xl font-semibold text-gray-900 ">Feel free to reach out to us for any inquiries or assistance.</h2>
          <hr className="w-[50%] justify-start  border-t-8 border-slate-700 rounded" />
          <p className="text-gray-600">
            
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-gray-800">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <p> 4919 Harford road MD 21214</p>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <p>+1 (443) 653-8482</p>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <FaEnvelope className="text-blue-500 text-xl" />
              <p>info@ubeausa.com</p>
            </div>
            <div className="mt-6 flex space-x-4">
            <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-pink-600 text-2xl hover:text-pink-800"><FaInstagram /></a>
            <a href="#" className="text-blue-700 text-2xl hover:text-blue-900"><FaLinkedin /></a>
          </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <form  action={"https://formsubmit.co/ebeeb46e6758a8f52c833bb976a9ee5f"} method="POST"  className="flex flex-col gap-4 bg-white p-6 ">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>

      {/* Google reCAPTCHA */}
      <div className="flex justify-center">
  <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
    <div className="scale-75 sm:scale-90 md:scale-100 flex justify-center">
    <ReCAPTCHA
        sitekey="6LdRdOkqAAAAAKq4-JSx3nLfGetg7EfPDfCBFahH"
        onChange={handleCaptcha}
        ref={recaptchaRef}
      />
    </div>
  </div>
</div>

      <button
        type="submit"
        className={`bg-blue-600 text-white py-3 rounded-md transition duration-300 ${
          captchaVerified ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!captchaVerified}
      >
        Send Message
      </button>
    </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full md:h-[80vh]">
        <iframe
          className="w-full md:h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.4331923528366!2d-76.56867752404155!3d39.346425671631614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c805e97d96b549%3A0xb9be6bfe7abf757!2s4919%20Harford%20Rd%2C%20Baltimore%2C%20MD%2021214%2C%20USA!5e0!3m2!1sen!2ske!4v1741104407506!5m2!1sen!2ske"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
