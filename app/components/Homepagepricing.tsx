import React from 'react'
import { FaCheck } from 'react-icons/fa'
import {  MdClose } from 'react-icons/md'

const Homepagepricing = () => {
  const additionalServices = [
    { service: "Foreign Credential Evaluation and Transcript Verification", price: "$200" },
    { service: "U.S. Licensure Guidance and Registration", price: "$200" },
    { service: "Resume Preparation and Review", price: "$50" },
    { service: "Interview Skills Workshops/Seminars", price: "$50 per session" },
    { service: "Airport Transportation", price: "Fees vary" },
    { service: "Temporary Housing in the U.S.", price: "Fees vary" },
  ];
  return (
    <div className='bg-[#edfbff] pb-16'>
      <h2 className="text-2xl font-bold pt-12 text-gray-800 uppercase tracking-wide text-center">
        Our Membership Fees and Services
      </h2>
      <p className="text-lg text-teal-600 italic mt-2 text-center">
        No hidden charges, no exorbitant fees
      </p>
      <div className='flex flex-col w-[90%] mx-auto'>
        <div className=' grid lg:grid-cols-4 gap-4 mt-8'>
          <div className="  border-2 bg-slate-50 rouded-lg shadow-lg h-fit">
            <h1 className='text-l mt-6 font-semibold text-center text-blue-600'>Individual Memberships </h1>
            <p className='text-2xl from-neutral-900 text-center mt-3'>$<span className='text-5xl font-bold'>449</span>/anual</p>
            <div className='mt-10 '>
            <div className='text-center flex  items-center  space-x-3 ' >
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <MdClose className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Access to Members</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3 ' >
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Job Boards</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>E-Newsletters</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Virtual Community Events</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Cultural Immersion Trainings or Webinars*</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Travel Information </p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Education Trainings or Webinars</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>English Language Immersion Support</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Technology Training</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Visa & Tax Webinars </p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Relocation Information</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Referral Services</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Discounted U.S. Culture Tours</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Discounted Rates to Regional and
                Annual Conferences</p>
                
              </div>
              <div className='mt-8'><button className=' block p-4 w-[90%] mx-auto mb-4 shadow-md rounded-md bg-blue-900 hover:bg-blue-950 text-center text-gray-300 transition-all delay-300'>Make your Subscription</button></div>

            </div>
            </div>
            <div className="  h-fit border-2 bg-slate-50 rouded-lg shadow-lg">
            <h1 className='text-l mt-6 font-semibold text-center text-blue-600'>Educational Organizations </h1>
            <p className='text-2xl from-neutral-900 text-center mt-3'>$<span className='text-5xl font-bold'>1,249</span>/anual</p>
            <div className='mt-10 '>
            <div className='text-center flex  items-center  space-x-3 ' >
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Access to Members</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3 ' >
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Job Boards</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>E-Newsletters</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Virtual Community Events</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Cultural Immersion Trainings or Webinars*</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className='text-green-500'/>                </div>
                <p className='text-sm font-semibold text-gray-700'>Travel Information </p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className='text-green-500'/>                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Education Trainings or Webinars</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className='text-green-500'/>                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>English Language Immersion Support</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className='text-green-500'/>                </div>
                <p className='text-sm font-semibold text-gray-700'>Technology Training</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className='text-green-500'/>                </div>
                <p className='text-sm font-semibold text-gray-700'>Visa & Tax Webinars </p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className='text-green-500'/>                </div>
                <p className='text-sm font-semibold text-gray-700'>Relocation Information</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className='text-green-500'/>                </div>
                <p className='text-sm font-semibold text-gray-700'>Referral Services</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className='text-green-500'/>                </div>
                <p className='text-sm font-semibold text-gray-700'>Discounted U.S. Culture Tours</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Discounted Rates to Regional and
                Annual Conferences</p>
                
              </div>
              <div className='mt-8'><button className=' block p-4 w-[90%] mx-auto mb-4 shadow-md rounded-md bg-blue-900 hover:bg-blue-950 text-center text-gray-300 transition-all delay-300'>Make your Subscription</button></div>

            </div>
            </div>
            <div className=" h-fit border-2 bg-slate-50 rouded-lg shadow-lg">
            <h1 className='text-l mt-6 font-semibold text-center text-blue-600'>J-1 Sponsors  </h1>
            <p className='text-2xl from-neutral-900 text-center mt-3'>$<span className='text-5xl font-bold'>1,249</span>/anual</p>
            <div className='mt-10 '>
            <div className='text-center flex  items-center  space-x-3 ' >
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Access to Members</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3 ' >
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm font-semibold text-gray-700'>Job Boards</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>E-Newsletters</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Virtual Community Events</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Cultural Immersion Trainings or Webinars*</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm font-semibold text-gray-700'>Travel Information </p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Education Trainings or Webinars</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>English Language Immersion Support</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm font-semibold text-gray-700'>Technology Training</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm font-semibold text-gray-700'>Visa & Tax Webinars </p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm font-semibold text-gray-700'>Relocation Information</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm font-semibold text-gray-700'>Referral Services</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  " />
                </div>
                <p className='text-sm font-semibold text-gray-700'>Discounted U.S. Culture Tours</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Discounted Rates to Regional and
                Annual Conferences</p>
                
              </div>
              <div className='mt-8'><button className=' block p-4 w-[90%] mx-auto mb-4 shadow-md rounded-md bg-blue-900 hover:bg-blue-950 text-center text-gray-300 transition-all delay-300'>Make your Subscription</button></div>

            </div>
            </div>
            <div className="  border-2 bg-slate-50 rouded-lg shadow-lg h-fit">
            <h1 className='text-l mt-6 font-semibold text-center text-blue-600'>Corporate/Business
            Members </h1>
            <p className='text-2xl from-neutral-900 text-center mt-3'>$<span className='text-5xl font-bold'>1,599</span>/anual</p>
            <div className='mt-10 '>
            <div className='text-center flex  items-center  space-x-3 ' >
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Access to Members</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3 ' >
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />
                </div>
                <p className='text-sm font-semibold text-gray-700'>Job Boards</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>E-Newsletters</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>Virtual Community Events</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Cultural Immersion Trainings or Webinars*</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />                </div>
                <p className='text-sm font-semibold text-gray-700'>Travel Information </p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Education Trainings or Webinars</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>English Language Immersion Support</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />                </div>
                <p className='text-sm font-semibold text-gray-700'>Technology Training</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />                </div>
                <p className='text-sm font-semibold text-gray-700'>Visa & Tax Webinars </p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />                </div>
                <p className='text-sm font-semibold text-gray-700'>Relocation Information</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />                </div>
                <p className='text-sm font-semibold text-gray-700'>Referral Services</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                <MdClose className="text-green-500  cursor-pointer" />                </div>
                <p className='text-sm font-semibold text-gray-700'>Discounted U.S. Culture Tours</p>
                
              </div>
              <div className='text-center flex  items-center  space-x-3'>
                <div className='w-8 h-8 text-center justify-center  rounded-full flex flex-col  items-center'>
                  <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm text-left font-semibold text-gray-700'>Discounted Rates to Regional and
                Annual Conferences</p>
                
              </div>
              <div className='mt-8'><button className=' block p-4 w-[90%] mx-auto mb-4 shadow-md rounded-md bg-blue-900 hover:bg-blue-950 text-center text-gray-300 transition-all delay-300'>Make your Subscription</button></div>

            </div>
            </div>
          
        </div>

      </div>
      <h1 className='text-2xl font-bold text-center text-gray-400 mt-8'>Additional UBEA Membership Services</h1>
      <div>
      <div className="border w-[80%] mx-auto border-gray-300 p-4 rounded-lg shadow-md mt-5 mb-6 bg-white">
        
        <ul className="space-y-2">
          {additionalServices.map((service, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span>{service.service}</span>
              <span className="font-semibold">{service.price}</span>
            </li>
          ))}
        </ul>
      </div>

      </div>
    </div>
  )
}

export default Homepagepricing
