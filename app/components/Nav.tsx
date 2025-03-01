
"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { nav_links } from '../constant/constant';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { usePathname } from "next/navigation";
import { X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    className={`fixed md:w-full bg-slate-950 transition-all z-[1000] 
      ${navBgs ? 'bg-black shadow-md md:h-[12.5vh] lg:h-[12.5vh] h-[8vh]' : 'fixed'} 
     md:h-[12.5vh] lg:h-[12.5vh] h-[6vh] w-full pt-2`}
  >
    <div className='flex w-[90%] mx-auto justify-between  lg:justify-between  md:justify-between'>
      <div className='items-center'>
        <Image className='' src={'/logo.png' } alt={'log image'} width={64} height={64}/>
        </div>
        <div className='hidden lg:flex md:space-x-15  text-sm text-gray-100 items-center md: gap-10'>
            {nav_links.map((Links)=>{
               const isActive = hydrated && currentPath === Links.url;
                return(
                    <Link href={Links.url} key={Links.id} > <p style={{ color: isActive ? "grey" : "white", fontWeight: "bold",fontSize:isActive ?"30px":""}}
                    className={`text-white hover:text-gray-500 transition duration-300 relative 
                     
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full`}>{Links.label}
                        </p>   </Link>     );
            })}
            <div className='text-white items-center gap-5 flex'>
            <p className="text-sm flex items-center gap-2">
  <FaPhone className="text-gray-100 text-2xl" /> <span>+1 (336) 491-4041</span>
</p>
<p className="text-sm flex items-center gap-2">
  <MdEmail className="text-gray-100 text-3xl" /> <span>info@ubeausa.com</span>
</p>
        </div>

        </div>
        
        <div className='flex items-center gap-3'>
          <button className='bg-white rounded-full text-black px-8  py-2.5 md:px-8 md:py-2.5'>login</button>
          <HiBars3BottomRight className=' w-8 cursor-pointer text-white h-8 lg:hidden ' onClick={() => setIsOpen(true)}/>
        </div>
    </div>
    {/* Sidebar (Mobile) */}
    {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-[1000] sm:block lg:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-800"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Sidebar Content */}
        <nav className="flex flex-col gap-6 p-6 text-gray-800">
          {nav_links.map((Links) => (
            <Link
              href={Links.url}
              key={Links.id}
              className="text-lg font-semibold hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {Links.label}
            </Link>
          ))}
        </nav>
        <div className='text-black items-center gap-5 flex flex-col'>
            <p className="text-sm flex items-center gap-2">
  <FaPhone className="text-black text-2xl" /> <span>+1 (336) 491-4041</span>
</p>
<p className="text-sm flex items-center gap-2">
  <MdEmail className="text-black text-3xl" /> <span>info@ubeausa.com</span>
</p>
        </div>
      </div>
    </div>
  )
}

export default Nav
