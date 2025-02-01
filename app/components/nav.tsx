import Image from 'next/image'
import React from 'react'
import { nav_links } from '../constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

const nav = () => {
  return (
    <div className='w-full bg-slate-950   transition-all z-[100] h-[12vh]'>
    <div className='flex w-[90%] mx-auto    justify-between'>
      <div className='items-center'>
        <Image className='w-16' src={'/WhatsApp Image 2025-01-27 at 10.52.39.jpeg' } alt={'log image'} width={64} height={64}/>
        </div>
        <div className='hidden lg:flex space-x-15 text-white items-center gap-10'>
            {nav_links.map((Links)=>{
                return(
                    <Link href={Links.url} key={Links.id}> <p>{Links.label}
                        </p>   </Link>     );
            })}

        </div>
        <div className='text-white items-center gap-5 flex'>
          <p className='text-sm items-center'>call Us <span>0712xxxxxx</span></p>
          <p className='text-sm items-center'>Email <span>info@ubea.co.ke</span></p>
        </div>
        <div className='flex items-center gap-3'>
          <button className='bg-white rounded-full md:px-8 md:py-2.5'>login</button>
          <HiBars3BottomRight className=' w-8 cursor-pointer text-white h-8' />
        </div>
    </div>
    </div>
  )
}

export default nav
