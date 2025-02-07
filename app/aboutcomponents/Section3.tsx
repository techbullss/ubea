import React from 'react'


const Section3 = () => {
  return (
    <div className='pt-16 w-[90%] mx-auto pb-20'>
        <div className='grid grid-cols-2 gap-10 pb-10'>
            <div><h1 className='text-6xl font-bold'>OUR WORK.</h1></div>
            <div><h1 className='text-2xl text-center'>Check out to see how we work and what we achieve.<br></br> A picture speaks a thousand words!</h1></div>
            </div>
            <div className='grid grid-cols-3 w-full gap-2'>
                <div className='h-[80vh] bg-cover border-8 border-black shadow-md rounded-md bg-black'
                style={{ backgroundImage: "url('/conect.png')" }}>
                    
                </div>
                <div className='h-[80vh] mt-20 border-8 border-black bg-cover shadow-md rounded-md bg-black'
                style={{ backgroundImage: "url('careers.jpg')" }} >

                </div>
                <div className='h-[80vh] bg-cover border-8 border-black shadow-md rounded-md bg-black' style={{ backgroundImage: "url('/moving1.jpg')" }}></div>
            </div>
            <div className='grid grid-cols-3 w-full gap-2 pt-12'>
                <div className='h-[80vh] bg-cover  border-8 border-black shadow-md rounded-md bg-black'
                style={{ backgroundImage: "url('/conct.jpg')" }}>
                    
                </div>
                <div className='h-[80vh] mt-20 border-8 border-black bg-cover shadow-md rounded-md bg-black'
                style={{ backgroundImage: "url('career2.gif')" }} >

                </div>
                <div className='h-[80vh] bg-cover  border-8 border-black shadow-md rounded-md bg-black' style={{ backgroundImage: "url('/moving.jpg')" }}></div>
            </div>
            <div className='grid grid-cols-3 w-full gap-2'>
                <div className=''>
                <p className='text-4xl text-sky-400 text-center'>Connecting teachers</p>
                    
                </div>
                <div className=' '
                 >
                <p className='text-4xl text-sky-400 pt-8 text-center'>Developing Careers</p>


                </div>
                <div className='' 
                >
                <p className='text-4xl text-sky-400 text-center'>Relocation and Orientation</p>

                </div>
            </div>
            
    </div>
  )
}

export default Section3
