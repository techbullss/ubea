'use client'
export default function Pricing() {
    const membershipPlans = [
      {
        type: "Corporate/Business Members",
        price: "$1,599/Annual",
        benefits: ["Access to Members", "Job Boards", "E-Newsletters", "Virtual Community Events"],
      },
      {
        type: "Hiring Organizations",
        price: "No fee",
        benefits: [
          "Access to Members",
          "E-Newsletters",
          "Virtual Community Events",
          "Cultural Immersion Trainings/Webinars",
          "Discounted Rates to Regional and Annual Conferences",
        ],
      },
      {
        type: "Visa Sponsors",
        price: "No Fee",
        benefits: [
          "Access to Members",
          "E-Newsletters",
          " Community Events",
          "Cultural Immersion Trainings/Webinars",
          "Discounted Rates to Regional and Annual Conferences",
        ],
      },
      {
        type: "Individual Memberships",
        price: "$499/Annual",
        benefits: [
          "Access to Members",
          "E-Newsletters",
          " Community Events",
          "Job Boards",
          "Technology Training",
          "Visa & Tax Webinars",
          "Relocation support",
          "Referral Services",
          "Discounted U.S. Culture Tours",
          "Discounted Rates to Regional and Annual Conferences",
        ],
      },
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-100 mb-6">Benefits of UBEA Membership</h1>
          <p className="text-gray-400 text-lg mb-12">(Included in annual membership)</p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-700"
              >
                <h2 className="text-2xl font-semibold text-gray-200 mb-3">{plan.type}</h2>
                <p className="text-xl font-bold text-sky-400">{plan.price}</p>
                <ul className="mt-4 text-gray-300 text-sm space-y-2">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex text-left items-center gap-2">
                      ✅ {benefit}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition duration-300" onClick={() => window.location.href = 'https://portal.ubeausa.com/register'}>
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  