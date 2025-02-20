import React from 'react'

const Homepagepricing = () => {
  const memberships = [
    { name: "Individual Memberships", price: "$449/Annual" },
    { name: "Educational Organizations", price: "$1,249/Annual" },
    { name: "J-1 Sponsors", price: "$1,249/Annual" },
    { name: "Corporate/Business Members", price: "$1,599/Annual" },
  ];

  const benefits = [
    "Access to Members",
    "Job Boards",
    "E-Newsletters",
    "Virtual Community Events",
    "Cultural Immersion Trainings/Webinars*",
    "Travel Information",
    "Education Trainings/Webinars**",
    "English Language Immersion Support",
    "Technology Training",
    "Visa & Tax Webinars",
    "Relocation Information",
    "Referral Services",
    "Discounted U.S. Culture Tours",
    "Discounted Rates to Regional and Annual Conferences",
  ];

  const benefitAccess = [
    [true, false, true, true],
    [false, false, true, true],
    [true, false, false, false],
    [false, true, false, false],
    [true, true, false, false],
    [false, false, true, false],
    [false, true, false, false],
    [false, false, true, false],
    [false, false, true, false],
    [false, false, true, false],
    [false, false, true, false],
    [false, false, true, false],
    [false, false, false, true],
    [true, true, true, true],
  ];

  return (
    <div className="p-2 flex flex-col  bg-cover bg-center bg-no-repeat  bg-fixed"
    >
    <h2 className="text-2xl font-bold text-black mb-4 text-center">
      Benefits of UBEA Membership (included in Annual Membership)
    </h2>
  
    {/* Flex container for table and image */}
    <div className="grid gap-6 grid-cols-2  ">
      
      {/* Table Section - Adjusted Width */}
      <div className="">
        <table className="w-full border-collapse border border-gray-400 text-left shadow-lg rounded-lg text-sm">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 border">Benefits</th>
              {memberships.map((membership, index) => (
                <th key={index} className="p-3 border text-center">
                  <div className="text-base font-semibold">{membership.name}</div>
                  <div className="text-xs">{membership.price}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit, rowIndex) => (
              <tr key={rowIndex} className="border bg-white even:bg-gray-50">
                <td className="p-1 border font-medium">{benefit}</td>
                {memberships.map((_, colIndex) => (
                  <td key={colIndex} className="p-1 border text-center">
                    {benefitAccess[rowIndex][colIndex] ? "✓" : ""}
                  </td>
                ))}
              </tr>
            ))}
  
            {/* Buttons Row */}
            <tr className="bg-gray-100">
              <td className="p-1 border font-medium text-center">Join Now</td>
              {memberships.map((membership, index) => (
                <td key={index} className="p-1 border text-center">
                  <button
                    className="px-2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition text-sm"
                  >
                    JOIN 
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
  
      {/* Image Section - Larger Width */}
      <div className="w-full flex flex-col  p-2">
  {/* First Row */}
  

  {/* Second Row */}
  <div className="grid  ">
  <div className="relative w-full h-[100vh]   group">
  {/* Image */}
  <img
    src="uni.png"
    alt="Image 1"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 
      opacity-0 invisible transition-opacity duration-500 group-hover:opacity-100 group-hover:visible">
    <h2 className="text-2xl font-bold uppercase">UBEA</h2>
    <p className="text-lg mt-2">No hidden Charges</p>
    
    {/* Decorative Line */}
    <button className="mt-4 px-6 py-3 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition duration-300">
  JOIN US
</button>
  </div>
</div>

  </div>
</div>

  
    </div>
  </div>
  

  );
}

export default Homepagepricing
