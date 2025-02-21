"use client"
import React from 'react'



const homepageSc2 = () => {
  return (
    <div
  className="w-full mx-auto flex flex-col text-gray-900 h-fit bg-cover bg-fixed bg-center bg-no-repeat"
  style={{ backgroundImage: "url('bg4.jpeg')" }}
>
            <div className=' w-[90%] mx-auto grid grid-cols-2 pt-16'>
            <div className="  flex flex-col items-center">
  <h2 className="text-5xl font-bold text-gray-400 pb-6 text-center">
    Why Join UBEA?
  </h2>
  <hr className="w-[50%] mx-auto border-t-8 border-slate-700 rounded" />
  <p className="text-2xl text-gray-600  pt-6 ">
    <span className="font-semibold text-grey-600">UBEA</span> is an organization revolutionizing 
    the way hiring works and eliminating unnecessary fees. 
    <span className="font-semibold"> Authentic and present</span>, we are a community that grows together 
    through a genuine desire for collective success—including yours.
  </p>
  <p className="text-2xl text-gray-700  mt-4">
    So, why join us? Because our focus is on 
    <span className="font-semibold text-grey-600"> empowerment, liberation</span>, and 
    <span className="font-semibold text-grey-600"> maximum rewards</span> for the people 
    and organizations we serve.
  </p>
  
</div>

<div className="flex items-start w-full mt-0">
  <img
    src="josh1.png"
    alt="Image 2"
    className=" object-cover"
  />
</div>
    
            </div>
            <div className=' w-[90%] mx-auto grid grid-cols-2 pt-0  gap-1 '>
            <div className='pt-24'>
             <img
        src="t77.png"
        alt="Image 2"
        className="w-[100%]    object-cover"
      /></div>   
            <div className=" flex flex-col items-center">
  <h2 className="text-5xl font-bold text-gray-400 pt-8 mb-4 text-center">
    Our Mission
  </h2>
  <hr className="w-[50%] mx-auto border-t-8 border-slate-700 rounded" />

  <p className="text-2xl text-gray-700 leading-relaxed pt-6 mb-6 ">
    Our mission is to <span className="font-semibold">connect highly skilled individuals</span> 
    with hiring organizations from around the globe to advance workforce development.
    We <span className="font-semibold text-grey-600">train</span>, we <span className="font-semibold text-grey-600">support</span>, 
    and we meet the needs of our network members by ensuring 
    <span className="font-semibold"> seamless integration</span> and 
    <span className="font-semibold"> cultural exchange</span> of international hires across diverse settings.
    Our mission is driven by the promise to do this work with 
    <span className="font-semibold text-grey-600"> transparency and care. </span>
    So, <span className="font-semibold text-grey-600">let’s get started.</span> 
    Not with just our solutions, but with <span className="font-semibold">your needs</span>.
    No hidden charges, no exorbitant fees
    We care about people.
  </p>

  

  
</div>

             
    
            </div>
            
        </div>
    
  )
}

export default homepageSc2
