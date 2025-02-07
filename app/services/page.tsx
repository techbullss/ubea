import Pricing from "../aboutcomponents/Pricing";

export default function Services() {
    const services = [
      "Job Boards",
      "E-Newsletters",
      "Virtual Community Events",
      "Cultural Immersion Trainings or Webinars",
      "Travel Information",
      "Education Trainings or Webinars",
      "English Language Immersion Support",
      "Technology Training",
      "Visa & Tax Webinars",
      "Relocation Information",
      "Referral Services",
      "Discounted U.S. Culture Tours",
      "Discounted Rates to Regional and Annual Conferences"
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-100 mb-6">Our Services</h1>
          <p className="text-gray-400 text-lg mb-12">We offer a range of services to support international professionals and students.</p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-gray-700"
              >
                <h2 className="text-xl font-semibold text-gray-200">{service}</h2>
              </div>
            ))}
          </div>
        </div>
        <Pricing />
      </div>
    );
  }
  