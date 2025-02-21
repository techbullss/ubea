
"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { nav_links } from '../constant/constant';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { usePathname } from "next/navigation";

const Nav = () => {
  const currentPath = usePathname();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  const [navBgs,setnavBg]=useState(false);
  useEffect(()=>{
    const hadler= ()=>{
      if(window.scrollY>=90)setnavBg(true);
      if(window.scrollY<90)setnavBg(false);
    };
  window.addEventListener('scroll',hadler);
return ()=>{
  window.removeEventListener('scroll',hadler)
}

},[]);
  

  
  return (
    <div 
    className={`fixed ${navBgs ? 'bg-black  shadow-md h-[12vh] pt-2 ' : 'fixed'} w-full bg-slate-950 mx-auto transition-all z-[1000] h-[13vh] pt-2`}>
    <div className='flex w-[90%] mx-auto    justify-between'>
      <div className='items-center'>
        <Image className='w-16' src={'/WhatsApp Image 2025-01-27 at 10.52.39.jpeg' } alt={'log image'} width={64} height={64}/>
        </div>
        <div className='hidden lg:flex space-x-15text-sm text-gray-100 items-center gap-10'>
            {nav_links.map((Links)=>{
               const isActive = currentPath === Links.url;
                return(
                    <Link href={Links.url} key={Links.id}> <p
                    className={`text-white hover:text-gray-500 transition duration-300 relative 
                      ${isActive ? "text-red-600 !important font-bold" : "text-white"}
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full`}>{Links.label}
                        </p>   </Link>     );
            })}
            <div className='text-white items-center gap-5 flex'>
            <p className="text-sm flex items-center gap-2">
  <FaPhone className="text-green-500" /> <span>0712xxxxxx</span>
</p>
<p className="text-sm flex items-center gap-2">
  <MdEmail className="text-blue-500" /> <span>info@ubea.co.ke</span>
</p>
        </div>

        </div>
        
        <div className='flex items-center gap-3'>
          <button className='bg-white rounded-full md:px-8 md:py-2.5'>login</button>
          <HiBars3BottomRight className=' w-8 cursor-pointer text-white h-8 lg:hidden ' />
        </div>
    </div>
    </div>
  )
}

export default Nav
