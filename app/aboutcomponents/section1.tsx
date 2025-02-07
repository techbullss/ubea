import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const section1 = () => {
  return (
    <div className='w-full h-screen  bg-[#fbf6fa]'>
        <div className=''>
            <div className='pt-40 flex flex-col items-center'>
                <h1 className='pb-8 text-center text-3xl font-bold'>Who are we?</h1>
                <h1 className='text-6xl font-bold text-center '> United Borders in <br></br>Education Association (UBEA)</h1>
                <h1>Explore our range of design subscriptions, available for everyone! Enjoy the flexibility to pause or cancel anytime, with absolutely no commitments required.</h1>
                <button className="flex justify-center items-center gap-2 mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                  Join UBEA
                  <FaArrowRight className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>

        </div>
      
    </div>
  )
}

export default section1
