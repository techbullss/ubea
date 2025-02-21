"use client"
import React, { useRef, useState } from 'react';

import { Volume2, VolumeX } from "lucide-react";
const HomepageSec1 = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  return (
    <div className=" flex-col w-full">
  <div className=" w-full  ">
    
    {/* Video Background */}
    <video
    ref={videoRef}
      className=" top-0 left-0 w-full h-full md:object-cover sm:object-cover"
      autoPlay
      loop
      muted={isMuted}
      playsInline
    >
      <source src="/students.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button
        onClick={toggleMute}
        className="absolute bottom-5 right-[50%] p-3 bg-black/50 text-white rounded-full"
      >
        {isMuted ? <VolumeX size={64} /> : <Volume2 size={64} />}
      </button>

    {/* Overlay Content */}
    

  </div>
</div>

  )
}

export default HomepageSec1
