"use client"
import React from 'react'
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from "framer-motion";
const homepageSc2 = () => {
  return (
    <motion.div
      className="pt-10"
      initial={{ opacity: 0, x: -50 }} // Starts off-screen to the left
      whileInView={{ opacity: 1, x: 0 }} // Animates when in view
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // Adds a 0.5s delay
      viewport={{ once: false, amount: 0.2 }} // Adjust duration as needed
    >
      
    <h1 className='mt-6 mb-6 md:text-3xl capitalize font-bold  text-center'> Why choose ubea</h1>
    <div className='flex flex-col  bg-[#f7f6fb]'>
        <div className='grid pt-20 grid-cols-1 lg:grid-cols-2 item-center gap-12'>
            <div className='flex flex-col items-center'>
                <p className='text-center mt-6 md:text-3xl font-extrabold  text-gray-600 block mb-4'>United Borders in Education Association (UBEA)</p>
                <p className='text-center mt-10 md:text-2xl font-inter text-gray-600 leading-8 tracking-wide'>With over 20 years of experience in education, leadership, and international program management and recruitment, we’re connecting people where it matters. For sustainability and change. For the future.</p>
                <button className="flex items-center gap-2 mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
  Join UBEA
  <FaArrowRight className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
</button>
    

            </div>
            <div>
        <Image  src={'/teacher.png' } alt={'log image'} width={800} height={800}/>
                
            </div>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 item-center gap-12'>
        <div className='mt-32'>
        <Image  src={'/classroom.png' } alt={'log image'} width={500} height={500}/>
                
            </div>
            <div className='flex  flex-col items-center'>
                <p className='text-center mt-32 md:text-3xl font-extrabold  text-gray-600 block mb-4'>UBEA makes the best even better</p>
                <p className='text-center mt-10 md:text-2xl font-inter text-gray-600 leading-8 tracking-wide'> We train, we support, and we meet the needs of our network members by ensuring seamless integration and the cultural exchange of international hires across diverse settings</p>
                <button className="flex items-center gap-2 mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
  Join UBEA
  <FaArrowRight className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
</button>
    

            </div>
            

        </div>
        

    </div>
    
    </motion.div>
  )
}

export default homepageSc2
