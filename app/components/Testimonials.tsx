"use client"

import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
const Testimonials = () => {
  return (
    <div className='bg-[#fcf6fa] pb-10'>
        <h1  className="font-bold text-center text-3xl flex items-center justify-center gap-4 pt-4">
  <span className="w-20 border-t-4 border-gray-400"></span>
  What our clients think about Us
  <span className="w-20 border-t-4 border-gray-400"></span>
</h1>

      <Carousel showDots arrows={false}autoPlay={true}responsive={responsive} infinite autoPlaySpeed={5000}>
<div className='w-[90%] relative mx-auto rounded-lg shadow-lg p-6 '>
    <div>
        <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8'/>
    </div>
    <div className='grid grid-cols-1 md:grid md:grid-cols-5 md:gap-6 items-start'>
        <div className='col-span-3 order-2 lg:order-1'>
            <p className='mt-8 font-medium leading-[2.5rem]'>
            "Transparent & Affordable—Finally!"
            "Unlike traditional agencies that charge exorbitant fees, UBEA offers an affordable and straightforward membership model. The value we receive—from job boards to visa guidance and relocation support—is incredible.
             I’ve recommended UBEA to several colleagues, and they’ve had the same positive experience!"
            </p>
            <div className='flex items-center mt-6'>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>

            </div>
            <h1 className='font-bold text-xl mt-6'> Maria L.</h1>
            <p className='mt-2 text-gray-500 text-lg'>Director of International Recruitment, Future Scholars Academy</p>
        </div>
        <div className='col-span-2 lg:order-2 mx-auto'>
            <Image
                          
                              width={250}
                              height={120}
                              className=" rounded-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src={'/avatar2.png'} alt={'student'}                        />

        </div>
    </div>
</div>
<div className='w-[90%] relative mx-auto rounded-lg shadow-lg p-6 '>
    <div>
        <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8'/>
    </div>
    <div className='grid grid-cols-1 md:grid md:grid-cols-5 md:gap-6'>
        <div className='col-span-3 order-2 lg:order-1'>
            <p className='mt-8 font-medium leading-[2.5rem]'>
            "A Game-Changer for Schools!"
            "We were struggling with teacher shortages until we partnered with UBEA. Not only did they provide access to highly qualified educators, but their ongoing training and cultural integration support made a real difference.
             Our new hires feel engaged and supported, which has improved retention rates significantly."
            </p>
            <div className='flex items-center mt-6'>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>

            </div>
            <h1 className='font-bold text-xl mt-6'>James T.</h1>
            <p className='mt-2 text-gray-500 text-lg'>Superintendent, Bright Future Schools</p>
        </div>
        <div className='col-span-2 lg:order-2 mx-auto'>
            <Image
                          
                              width={250}
                              height={120}
                              className=" rounded-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src={'/avatar2.png'} alt={'student'}                        />

        </div>
    </div>
</div>
<div className='w-[90%] relative mx-auto rounded-lg shadow-lg p-6 '>
    <div>
        <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8'/>
    </div>
    <div className='grid grid-cols-1 md:grid md:grid-cols-5 md:gap-6'>
        <div className='col-span-3 order-2 lg:order-1'>
            <p className='mt-8 font-medium leading-[2.5rem]'>
            "Seamless Hiring & Support!"
            "UBEA has completely transformed our hiring process. The transparency in pricing and the quality of candidates are unmatched. Their relocation support ensured a smooth transition for our new hires, making it easier for them to adapt and thrive in our district. 
            We highly recommend UBEA to any organization looking for top-tier international talent!"
            </p>
            <div className='flex items-center mt-6'>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>

            </div>
            <h1 className='font-bold text-xl mt-6'>Sarah M.</h1>
            <p className='mt-2 text-gray-500 text-lg'>HR Director, Global Education Network</p>
        </div>
        <div className='col-span-2 lg:order-2 mx-auto'>
            <Image
                          
                              width={250}
                              height={120}
                              className=" rounded-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src={'/avatar2.png'} alt={'student'}                        />

        </div>
    </div>
</div>
</Carousel>
    </div>
  )
}

export default Testimonials
