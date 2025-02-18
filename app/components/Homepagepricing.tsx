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
    <div className=" p-6  flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Benefits of UBEA Membership (included in Annual Membership)
      </h2>
      <div className="w-full ">
        <table className="w-full border-collapse border border-gray-400 text-left shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-4 border">Benefits</th>
              {memberships.map((membership, index) => (
                <th key={index} className="p-4 border text-center">
                  <div className="text-lg font-semibold">{membership.name}</div>
                  <div className="text-sm">{membership.price}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit, rowIndex) => (
              <tr key={rowIndex} className="border bg-white even:bg-gray-50">
                <td className="p-4 border font-medium">{benefit}</td>
                {memberships.map((_, colIndex) => (
                  <td key={colIndex} className="p-4 border text-center">
                    {benefitAccess[rowIndex][colIndex] ? "✓" : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex justify-center gap-4">
          {memberships.map((membership, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition"
            >
              JOIN US - {membership.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepagepricing
