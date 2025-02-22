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
    <div className="relative flex flex-col w-full ">
  <div className="relative w-full">
    
    {/* Video Background */}
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted={isMuted}
      playsInline
    >
      <source src="/students.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Mute Button */}
    <button
      onClick={toggleMute}
      className="absolute bottom-5 right-20 sm:right-[50%] translate-x-1/2 p-3 bg-black/50 text-white rounded-full"
    >
      {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
    </button>
  </div>
</div>

  )
}

export default HomepageSec1
