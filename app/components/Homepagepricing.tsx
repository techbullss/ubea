import React from 'react'

const Homepagepricing = () => {
  const memberships = [
    { name: "Individual Memberships", price: "$449/Annual" },
    { name: "Hiring Organizations", price: "No Fee" },
    { name: "J-1 Sponsors", price: " No Fee" },
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
    [true, false, true, false],
    [false, true, false, false],
    [true, true, false, false],
    [true, false, false, false],
    [false, true, false, false],
    [true, false, false, false],
    [true, false, false, false],
    [true, false, false, false],
    [true, false, false, false],
    [true, false, false, false],
    [true, false, false, true],
    [true, true, true, true],
  ];

  return (
    <div
  className="flex flex-col bg-cover  bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: "url('josh4.jpeg')" }}
>
<hr className="w-[20%] mx-auto border-t-8 border-stone-50 rounded mt-8" />
    <h2 className="text-2xl font-bold text-gray-500 pt-6 mb-8 text-center">
    UBEA Annual Membership Cost and Benefits
    </h2>
  
    {/* Flex container for table and image */}
    <div className="grid gap-20 md:grid-cols-2 w-[95%] mx-auto ">
      
      {/* Table Section - Adjusted Width */}
      
        <table className="w-full border-collapse border-2 mb-8  border-gray-400 text-left shadow-lg rounded-lg text-sm">
          <thead>
            <tr className="bg-grey-500 text-black">
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
              <tr key={rowIndex} className="border">
                <td className="p-1 border font-medium text-zinc-950">{benefit}</td>
                {memberships.map((_, colIndex) => (
                  <td key={colIndex} className="p-1 border text-lg text-black text-center">
                    {benefitAccess[rowIndex][colIndex] ? "✓" : ""}
                  </td>
                ))}
              </tr>
            ))}
  
            {/* Buttons Row */}
            
          </tbody>
        </table>
      
  
      {/* Image Section - Larger Width */}
      

  
  <div className="relative w-full">
  {/* Image */}
  <img
    src="uni.png"
    alt="Image 1"
    className=" object-cover h-screen"
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


  
    
  
  

  );
}

export default Homepagepricing
