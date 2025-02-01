import React from 'react'

const homepageSec1 = () => {
  return (
    <div className=' flex flex-col w-full'>
        <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/student.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg animate-pulse">
  Welcome to <span className="text-white ml-2">UBEA</span>
</div>

    </div>

      
    </div>
  )
}

export default homepageSec1
