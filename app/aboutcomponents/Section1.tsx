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
                <h1 className='pb-4 text-center text-4xl font-bold'>About Us</h1>
                <hr className='border-4 w-[60%] border-gray-400 rounded-full'/>
               <p className='pt-4 text-[16px] pb-8 font-serif text-gray-700'>UBEA is a global networking firm dedicated to empowering organizations across diverse industries by connecting them with top-tier international talent. It was created with one goal in mind – level the playing field by reducing the need for third party agencies and the exorbitant charges to individuals and organizations. With over 20 years of experience, we understand the needs of organizations and the international workforce, bringing a wealth of diverse expertise to organizations worldwide. Our presence in key countries enables us to bridge talent gaps and offer customized solutions tailored to each organization’s unique needs. We specialize in relocation support and service management tailored to help organizations build diverse, high-performing teams that drive long-term success. Through strategic partnerships and our global network, we provide the support to talent needed for organizations and their workforces to thrive in today’s interconnected world. At UBEA, we are committed to fostering collaboration, diversity, and innovation that fuel business success, wherever you are.

Our goal is to ensure that international workers are settled quickly and comfortably in their new environments. We provide logistical support, cultural training, cross-cultural orientation and community integration all to help make the transition as smooth and prompt as possible for global workers and organizations alike. Most importantly, we care about the individuals we serve.</p>
            </div>
            <div className=' relative    md:col-span-3 md:mt-44 h-full rounded-lg'>

            <video
      ref={videoRef}
      className="w-full rounded-2xl mb-4 border-t-[14px] border-y-[20px] border-gray-900 border-x-4 object-cover"
      autoPlay
      loop
      muted={isMuted}
      playsInline
    >
      <source src="/videoubea1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button
      onClick={toggleMute}
      className="absolute bottom-80 right-10 sm:right-[20%] translate-x-1/2 p-3 bg-black/50 text-white rounded-full"
    >
      {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
    </button>

            </div>

        </div>
        
        
    </div>
    
  )
}

export default Section1
