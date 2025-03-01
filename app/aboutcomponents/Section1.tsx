"use client"
import React, { useRef, useState } from 'react';
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";


const Section1 = () => {
  const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);
  
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
      }
    };
  return (
    <div className=' w-full bg-cover bg-fixed  bg-[#fbf6fa]  text-gray-900'style={{ backgroundImage: "url('bg4.jpeg')" }}>
     <div className="relative h-64 md:h-[50vh] ">
              {/* Background Image */}
              <div className="absolute inset-0 ">
                <Image src="/sx.jpg"   alt="About Us Background" layout="fill" objectFit="cover" className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              </div>
      
              {/* Heading Text */}
              <div className="relative flex flex-col items-center justify-center h-full">
                <div><h1 className="text-4xl font-bold text-white text-center">
                ABOUT US
                </h1>
                </div>
                
              </div>
            </div>
        <div className='md:grid md:grid-cols-5 grid grid-cols-1 w-[90%] mx-auto md:gap-12'>
            <div className='md:pt-8 flex flex-col col-span-2 items-center '>
                <h1 className='pb-4 text-center text-4xl font-bold'>About Us?</h1>
                <hr className='border-4 w-[60%] border-gray-400 rounded-full'/>
               <p className='pt-4 text-lg pb-8 font-serif text-gray-700'>Founded in 2011 and based in the Washington, DC area, UBEA is a global consulting firm dedicated to empowering organizations across diverse industries by connecting them with top-tier international talent.

With over 14 years of experience, we have successfully recruited talent from over 25 countries, bringing a wealth of diverse expertise to organizations worldwide. Our presence in 4 key countries enables us to bridge talent gaps and offer customized solutions tailored to each organization unique needs.

We specialize in global talent acquisition, visa process management, and relocation management. Our tailored solutions help businesses build diverse, high-performing teams that drive long-term success. Through strategic partnerships and our global network, we provide the talent needed for organizations to thrive in today interconnected world.

At UBEA, we are committed to fostering collaboration, diversity, and innovation that fuel business success, wherever you are.</p>
               
            </div>
            <div className='md:col-span-3 md:mt-28 h-full rounded-lg'>

            <video
      ref={videoRef}
      className="w-full rounded-2xl object-cover"
      autoPlay
      loop
      muted={isMuted}
      playsInline
    >
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button
      onClick={toggleMute}
      className="absolute bottom-5 right-20 sm:right-[50%] translate-x-1/2 p-3 bg-black/50 text-white rounded-full"
    >
      {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
    </button>

            </div>

        </div>
        
        
    </div>
    
  )
}

export default Section1
