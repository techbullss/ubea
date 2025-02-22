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
  className="flex flex-col bg-cover bg-center bg-no-repeat sm:bg-scroll md:bg-fixed"
  style={{ backgroundImage: "url('josh4.jpeg')" }}
>
<hr className="w-[20%] mx-auto border-t-8 border-gray-700 rounded mt-8" />
    <h2 className="text-2xl font-bold text-gray-500 pt-6 mb-8 text-center">
    UBEA Annual Membership Cost and Benefits
    </h2>
  
    {/* Flex container for table and image */}
    <div className="grid gap-24 md:grid-cols-2 w-[95%] mx-auto sm:grid-cols-1">
  {/* Table Section - Adjusted Width */}
  <div className="w-full md:overflow-visible overflow-x-auto sm:max-w-full">
    <table className="w-full min-w-[600px] border-collapse border-2 mb-8 border-gray-400 text-left shadow-lg rounded-lg text-sm">
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
      </tbody>
    </table>
  </div>

  {/* Image Section */}
  <div className="w-full flex justify-center">
    <img
      src="uni.png"
      alt="Image 1"
      className="w-full max-w-[500px] sm:max-w-full h-auto object-cover"
    />
  </div>
</div>

  </div>


  
    
  
  

  );
}

export default Homepagepricing
