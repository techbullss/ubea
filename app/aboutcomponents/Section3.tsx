import React from 'react'


const Section3 = () => {
  return (
    <div className='pt-16 w-[90%] mx-auto pb-20'>
        <div className='grid grid-cols-2 gap-10 pb-10'>
            <div><h1 className='text-6xl font-bold'>OUR WORK.</h1></div>
            <div><h1 className='text-2xl text-center'>Check out to see how we work and what we achieve.<br></br> A picture speaks a thousand words!</h1></div>
            </div>
            <div className='grid grid-cols-3 w-full gap-2'>
                <div className='h-[80vh] bg-cover border-8 transition duration-300 transform hover:scale-105 hover:bg-gray-700 border-black shadow-md rounded-md bg-black'
                style={{ backgroundImage: "url('/conect.png')" }}>
                    
                </div>
                <div className='h-[80vh] mt-20 border-8 transition duration-300 transform hover:scale-105 hover:bg-gray-700 border-black bg-cover shadow-md rounded-md bg-black'
                style={{ backgroundImage: "url('careers.jpg')" }} >

                </div>
                <div className='h-[80vh] bg-cover border-8 transition duration-300 transform hover:scale-105 hover:bg-gray-700 border-black shadow-md rounded-md bg-black' style={{ backgroundImage: "url('/moving1.jpg')" }}></div>
            </div>
            <div className='grid grid-cols-3 w-full gap-2 pt-12'>
                <div className='h-[80vh] bg-cover  border-8 border-black shadow-md rounded-md bg-black'
                style={{ backgroundImage: "url('/conct.jpg')" }}>
                    
                </div>
                <div className='h-[80vh] mt-20 border-8 transition duration-300 transform hover:scale-105 hover:bg-gray-700 border-black bg-cover shadow-md rounded-md bg-black'
                style={{ backgroundImage: "url('career2.gif')" }} >

                </div>
                <div className='h-[80vh] bg-cover  border-8transition duration-300 transform hover:scale-105 hover:bg-gray-700 border-black shadow-md rounded-md bg-black' style={{ backgroundImage: "url('/moving.jpg')" }}></div>
            </div>
            <div className='grid grid-cols-3 w-full gap-2'>
                <div className=''>
                <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-center">Connecting Employees</p>
                    
                </div>
                <div className=' '
                 >
                <p  className="text-4xl pt-8 font-bold text-transparent bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-center">Developing Careers</p>


                </div>
                <div className='' 
                >
                <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-center">
  Relocation and Orientation
</p>


                </div>
            </div>
            
    </div>
  )
}

export default Section3
