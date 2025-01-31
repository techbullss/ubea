import React from 'react'
export default function footer(){
    return(
        <footer
        className="bg-cover bg-center py-12 flex w-100% h-[70vh]"
        style={{ backgroundImage: "url('/footer.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-30"></div>

        <div className="container  text-center text-white mt-10">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-6">Follow us on our social channels for updates and offers.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-xl hover:text-gray-300">Facebook</a>
            <a href="#" className="text-xl hover:text-gray-300">Twitter</a>
            <a href="#" className="text-xl hover:text-gray-300">Instagram</a>
          </div>
          <p className="mt-8 text-sm">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
        <div className="container mx-auto text-center text-black">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-6">Follow us on our social channels for updates and offers.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-xl hover:text-gray-300">Facebook</a>
            <a href="#" className="text-xl hover:text-gray-300">Twitter</a>
            <a href="#" className="text-xl hover:text-gray-300">Instagram</a>
          </div>
          <p className="mt-8 text-sm">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
        <div className="container mx-auto text-center text-black">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-6">Follow us on our social channels for updates and offers.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-xl hover:text-gray-300">Facebook</a>
            <a href="#" className="text-xl hover:text-gray-300">Twitter</a>
            <a href="#" className="text-xl hover:text-gray-300">Instagram</a>
          </div>
          <p className="mt-8 text-sm">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>

    )
}