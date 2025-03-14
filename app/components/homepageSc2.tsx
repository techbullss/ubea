"use client"
import React from 'react'



const homepageSc2 = () => {
  return (
    <div
  className="w-full mx-auto  flex flex-col text-gray-900  bg-cover bg-fixed bg-center bg-no-repeat"
  style={{ backgroundImage: "url('bg4.jpeg')" }}
>
<div className="max-w-4xl mx-auto text-center pt-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        Streamline Your International Workforce Relocation
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-2">
        Expanding your team with global talent?
        </p>
        <hr className="w-[20%] mx-auto border-t-4 border-blue-950 rounded" />
        <p className="text-base sm:text-lg text-gray-600 mb-8">
        We make international worker relocation simple, affordable, and hassle-free! For the cost of an individual membership, we handle the logistics so your employees can focus on what matters most—seamlessly transitioning into their new roles.
        </p>
        <a
          href="#contact" // Replace with your desired link
          className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition duration-300"
        >
Contact us today to get started!        </a>
      </div>
            <div className=' w-[90%] mx-auto grid md:grid-cols-1 sm:grid-cols-1 pt-16'>
            <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
          Why Choose UBEA?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Employer & Sponsor Friendly            </h3>
            <p className="text-gray-600">
            Designed to ease the burden on organizations and sponsors</p>          </div>
          {/* Feature 2 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Affordable & Efficient
            </h3>
            <p className="text-gray-600">
            A complete relocation support package at a fraction of the cost.            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Cultural Training and Supports
            </h3>
            <p className="text-gray-600">
            Pre-arrival cultural training, post-arrival cross-cultural orientation, community integration, and networking opportunities            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
               Comprehensive Relocation Support
            </h3>
            <p className="text-gray-600">
              We assist with arrival support, transportation, housing, and cultural integration for a hassle-free transition.
            </p>
          </div>
          {/* Feature 5 */}
         
          {/* Feature 6 */}
          
        </div>
        {/* Bottom Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Affordable. Transparent. Effective.
          </h3>
          <p className="text-lg text-gray-600 mb-8">
          Our goal is to ensure that all international workers are settled quickly and comfortably in their new environments. Partner with us to ensure smooth, cost-effective transitions for your international workforce. Let’s move forward—together!          </p>
          <a
            href="#contact" // Replace with your desired link
            className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition duration-300"
          >
            Partner with UBEA Today
          </a>
        </div>
      </div>


    
            </div>
            <div className=' w-[90%] mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-0  gap-1 '>
            <div className=''>
             <img
        src="t77.png"
        alt="Image 2"
        className="w-[100%]    object-cover"
      /></div>   
       <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Our Mission
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Our mission is to connect highly skilled individuals with hiring organizations from around the globe to advance workforce development. We train, we support, and we meet the needs of our network members by ensuring seamless integration and cultural exchange of international hires across diverse settings.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Our mission is driven by the promise to do this work with transparency and care. So, let’s get started. Not with just our solutions, but with your needs. <span className="font-semibold text-blue-900">No hidden charges, no exorbitant fees.</span> We care about people.
        </p>
        
      </div>

             
    
            </div>
            
        </div>
    
  )
}

export default homepageSc2
