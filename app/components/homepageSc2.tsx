import React from 'react'
import Image from "next/image";
const homepageSc2 = () => {
  return (
    <div className='pt-10 pb-16'>
      
    <h1 className='mt-6 mb-6 md:text-3xl capitalize font-bold  text-center'> Why choose ubea</h1>
    <div className='flex flex-col h-screen bg-[#f7f6fb]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 item-center gap-12'>
            <div>
                <p> </p>
            </div>
            <div>
        <Image  src={'/teachers.png' } alt={'log image'} width={800} height={800}/>
                
            </div>

        </div>
        

    </div>
    </div>
  )
}

export default homepageSc2
