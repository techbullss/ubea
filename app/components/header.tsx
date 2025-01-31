import React from 'react'

const header = () => {
  return (
    <div className='bg-white'>
        <nav className='flex gap-6 w-100% justify-between mt-20px items-center'>
        
         <div>
        <img className="w-16" src="/WhatsApp Image 2025-01-27 at 10.52.39.jpeg" alt="" />
        </div>
        

            <div className='items-center'>
                <ul className="flex  items-center gap-5">
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Services</li>
                    <li>ContactUs</li>
                </ul>

            </div>
           
            <div>
                <button className='bg-black text-white px-5 py-2 rounded-full'>Login</button>
            </div>
        </nav>
      
    </div>
  )
}

export default header
