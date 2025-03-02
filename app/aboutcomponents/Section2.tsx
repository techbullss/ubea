import React from 'react'
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950 flex items-center justify-center  p-6">
  <div className="max-w-6xl  overflow-hidden p-10 space-y-12">
    
    {/* Our Mission Section */}
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our Mission</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our mission is to connect highly skilled individuals with hiring organizations from around the 
          globe to advance workforce development. We train, we support, and we meet the needs of our 
          network members by ensuring seamless integration and the cultural exchange of international 
          hires across diverse settings. Our mission is driven by the promise to do this work with 
          transparency and care.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image 
          src={'/mission.jpg'} 
          alt={'Mission Image'} 
          width={500} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Our Vision Section */}
    <div className="flex flex-col-reverse md:flex-row items-center gap-10">
      <div className="flex-1 flex justify-center">
        <Image 
          src={'/josh1.png'} 
          alt={'Vision Image'} 
          width={500} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our Vision</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our vision is to be the leading global talent bridge that empowers individuals and organizations 
          by fostering professional excellence, diversity, and cultural exchange. We aim to revolutionize 
          workforce integration, making opportunities accessible and enriching for all stakeholders involved.
        </p>
      </div>
    </div>

  </div>
</div>


  )
}

export default Section2
