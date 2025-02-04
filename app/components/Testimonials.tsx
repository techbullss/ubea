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
    <div className='grid grid-cols-5 gap-6 items-start'>
        <div className='col-span-3 order-2 lg:order-1'>
            <p className='mt-8 font-medium leading-[2.5rem]'>
            UBEA is a nonprofit organization leading a global recruitment rebellion. We are changing the way recruitment works by eliminating the need for costly intermediaries. Authentic and present
            , we’re a community that has grown together through a genuine desire for collective success
            </p>
            <div className='flex items-center mt-6'>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>

            </div>
            <h1 className='font-bold text-xl mt-6'>Kamua John</h1>
            <p className='mt-2 text-gray-500 text-lg'>Student</p>
        </div>
        <div className='col-span-2 lg:order-2 mx-auto'>
            <Image
                          
                              width={250}
                              height={120}
                              className=" rounded-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src={'/member.jpg'} alt={'student'}                        />

        </div>
    </div>
</div>
<div className='w-[90%] relative mx-auto rounded-lg shadow-lg p-6 '>
    <div>
        <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8'/>
    </div>
    <div className='grid grid-cols-5 gap-6 items-start'>
        <div className='col-span-3 order-2 lg:order-1'>
            <p className='mt-8 font-medium leading-[2.5rem]'>
            UBEA is a nonprofit organization leading a global recruitment rebellion. We are changing the way recruitment works by eliminating the need for costly intermediaries. Authentic and present
            , we’re a community that has grown together through a genuine desire for collective success
            </p>
            <div className='flex items-center mt-6'>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>

            </div>
            <h1 className='font-bold text-xl mt-6'>Maina J</h1>
            <p className='mt-2 text-gray-500 text-lg'>Student</p>
        </div>
        <div className='col-span-2 lg:order-2 mx-auto'>
            <Image
                          
                              width={250}
                              height={120}
                              className=" rounded-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src={'/member2.jpg'} alt={'student'}                        />

        </div>
    </div>
</div>
<div className='w-[90%] relative mx-auto rounded-lg shadow-lg p-6 '>
    <div>
        <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8'/>
    </div>
    <div className='grid grid-cols-5 gap-6 items-start'>
        <div className='col-span-3 order-2 lg:order-1'>
            <p className='mt-8 font-medium leading-[2.5rem]'>
            UBEA is a nonprofit organization leading a global recruitment rebellion. We are changing the way recruitment works by eliminating the need for costly intermediaries. Authentic and present
            , we’re a community that has grown together through a genuine desire for collective success
            </p>
            <div className='flex items-center mt-6'>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>
                <FaStar className='w-6 h-6 text-y text-yellow-600'/>

            </div>
            <h1 className='font-bold text-xl mt-6'>Hannah k</h1>
            <p className='mt-2 text-gray-500 text-lg'>Teacher</p>
        </div>
        <div className='col-span-2 lg:order-2 mx-auto'>
            <Image
                          
                              width={250}
                              height={120}
                              className=" rounded-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" src={'/member3.jpg'} alt={'student'}                        />

        </div>
    </div>
</div>
</Carousel>
    </div>
  )
}

export default Testimonials
