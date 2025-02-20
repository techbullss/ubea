"use client"
import React from 'react'

import { FaArrowRight } from 'react-icons/fa6';

const homepageSc2 = () => {
  return (
    
      
    <div className='relative w-full  flex flex-col bg-[#fbf6fa]  text-gray-900'>
            <div className='grid grid-cols-2 pt-16 pb-16 gap-1 '>
            <div className="pt-0 mx-3 flex flex-col items-center">
  <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
    Why Join UBEA?
  </h2>
  <p className="text-2xl text-gray-700 leading-relaxed  ">
    <span className="font-semibold text-blue-600">UBEA</span> is an organization revolutionizing 
    the way hiring works and eliminating unnecessary fees. 
    <span className="font-semibold"> Authentic and present</span>, we are a community that grows together 
    through a genuine desire for collective success—including yours.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed text-center mt-4 max-w-2xl">
    So, why join us? Because our focus is on 
    <span className="font-semibold text-blue-600"> empowerment, liberation</span>, and 
    <span className="font-semibold text-blue-600"> maximum rewards</span> for the people 
    and organizations we serve.
  </p>
  <button className="flex justify-center items-center gap-2 mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                      Join UBEA
                      <FaArrowRight className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
</div>

<div className="flex items-start w-full mt-0">
  <img
    src="t51.png"
    alt="Image 2"
    className=" object-cover"
  />
</div>
    
            </div>
            <div className='grid grid-cols-2 pt-0 pb-60 gap-1 '>
            <div>
             <img
        src="t77.png"
        alt="Image 2"
        className="w-[100%]    object-cover"
      /></div>   
            <div className="p-6 flex flex-col items-center">
  <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
    Our Mission
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl">
    Our mission is to <span className="font-semibold">connect highly skilled individuals</span> 
    with hiring organizations from around the globe to advance workforce development.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed text-center mt-4 max-w-2xl">
    We <span className="font-semibold text-blue-600">train</span>, we <span className="font-semibold text-blue-600">support</span>, 
    and we meet the needs of our network members by ensuring 
    <span className="font-semibold"> seamless integration</span> and 
    <span className="font-semibold"> cultural exchange</span> of international hires across diverse settings.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed text-center mt-4 max-w-2xl">
    Our mission is driven by the promise to do this work with 
    <span className="font-semibold text-blue-600"> transparency and care</span>.
  </p>

  {/* Key Highlights */}
  <div className="mt-6">
    <p className="text-xl font-bold text-blue-600 text-center">No hidden charges, no exorbitant fees.</p>
    <p className="text-xl font-bold text-blue-600 text-center mt-2">We care about people.</p>
  </div>

  {/* Closing Call to Action */}
  <p className="text-lg text-gray-700 leading-relaxed text-center mt-6 max-w-2xl">
    So, <span className="font-semibold text-blue-600">let’s get started.</span> 
    Not with just our solutions, but with <span className="font-semibold">your needs</span>.
  </p>
  <button className="flex justify-center items-center gap-2 mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                      Join UBEA
                      <FaArrowRight className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
</div>

             
    
            </div>
            <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1300 220" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160V320H0Z"
          ></path>
        </svg>
      </div>
        </div>
    
  )
}

export default homepageSc2
