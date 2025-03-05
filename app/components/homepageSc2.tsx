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
          Unlock Global Talent with UBEA
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-2">
          Affordable & Transparent International  Connections
        </p>
        <hr className="w-[20%] mx-auto border-t-4 border-blue-950 rounded" />
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Are you a school, district, or  visa sponsor seeking top-tier international workforce without exorbitant recruitment fees? UBEA is your trusted partner for  Employees placement, relocation, and ongoing support—at a fraction of the cost.
        </p>
        <a
          href="#contact" // Replace with your desired link
          className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition duration-300"
        >
          Get Started
        </a>
      </div>
            <div className=' w-[90%] mx-auto grid md:grid-cols-1 sm:grid-cols-1 pt-16'>
            <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
          Why Choose UBEA?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
               No Hidden Fees, Just Transparency
            </h3>
            <p className="text-gray-600">
              Unlike traditional agencies, UBEA offers a flat annual membership fee of just $499—no inflated placement fees, no surprises.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
               Access to Highly Qualified Workforce
            </h3>
            <p className="text-gray-600">
              We connect you with rigorously vetted international  Workforce passionate about shaping young minds.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
               Seamless Hiring & Compliance
            </h3>
            <p className="text-gray-600">
              Our team ensures a smooth placement process, adhering to  visa regulations and  requirements.
            </p>
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
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
               Ongoing Professional & Cultural Development
            </h3>
            <p className="text-gray-600">
              Members gain access to cultural training, instructional webinars, global networking, and a thriving educator community.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Commitment to  Employee Success & Retention
            </h3>
            <p className="text-gray-600">
              Our team ensures  Employees adapt, excel, and stay engaged in your schools.
            </p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Affordable. Transparent. Effective.
          </h3>
          <p className="text-lg text-gray-600 mb-8">
           A diverse, high-quality educators shouldn’t come at an unreasonable cost. With UBEA, you get top-tier talent, full-service support, and an engaged global community—all without hidden fees or excessive charges.
          </p>
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
